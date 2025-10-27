import React, { useEffect, useState } from "react";
import RepoCard from "./components/RepoCard";
import "./index.css";

export default function App() {
  // Defining my state variables
  const [repos, setRepos] = useState([]);        // to store the fetched repositories
  const [loading, setLoading] = useState(false); // to show a loading text when data is being fetched
  const [error, setError] = useState(null);      // to handle and display any error from the API
  const [username, setUsername] = useState("");  // to store the GitHub username entered by the user

  // This async function fetches repositories from the GitHub API based on the username
  async function fetchRepos(user) {
    try {
      // if the user has entered a GitHub username or not
      if (!user) {
        setError("Please enter a GitHub username");
        return;
      }

      // Setting the loading state to true while waiting for the API response
      setLoading(true);
      setError(null);

      // This is the actual API call 
      const res = await fetch(`https://api.github.com/users/${user}/repos`);

      // If the response is not OK means no user
      if (!res.ok) throw new Error(`User "${user}" not found`);

      // Waiting for the response 
      const data = await res.json();

      // Updating my repos state with the received data
      setRepos(data);
    } catch (err) {
      
      setError(err.message); // setting error state for any error
      setRepos([]); // clearing old data
    } finally {
      setLoading(false);
    }
  }

  // // useEffect runs once when the component is first loaded (mounted)
  // // I could use this to automatically fetch a default user's data,
  // // but for this assignment, I’m keeping it manual — the user enters their own GitHub username.
  // useEffect(() => {}, []);

  // useEffect runs once when the component is first loaded (mounted)
  useEffect(() => {
  // Automatically fetch data for a default user when the app loads
    fetchRepos("suhagan"); // You can replace "torvalds" with any username you like
  }, []);


  // When the form is submitted, I call my async fetch function here
  function handleSubmit(e) {
    e.preventDefault();           // prevent page reload
    fetchRepos(username.trim());  // fetch repos for the entered username
  }

  return (
    <div className="app">
      <h1>GitHub Repository Fetcher</h1>
      <p>Enter a GitHub username to fetch their public repositories below:</p>

      {/* Input field and button to submit username */}
      <form onSubmit={handleSubmit} className="controls">
        <input
          type="text"
          placeholder="Enter GitHub username (e.g. suhagan)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Fetch</button>
      </form>

      {/* Manual refresh button – only visible when data has been fetched */}
      {repos.length > 0 && (
        <div className="controls">
          <button onClick={() => fetchRepos(username)}>🔄 Refresh</button>
        </div>
      )}

      {/* Conditional rendering based on async states */}
      {loading && <p>Loading...</p>}                    {/* shows while data is being fetched */}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* shows if there’s any error */}

      {/* Display fetched repositories when everything is ready */}
      {!loading && !error && repos.length > 0 && (
        <div className="repo-list">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}
