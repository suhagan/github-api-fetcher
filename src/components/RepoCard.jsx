// A reusable component to display a single GitHub repository
import React from "react";

export default function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description || "No description available"}</p>
      
    </div>
  );
}
