# GitHub Repository Fetcher

This is a simple React application built to practice using the **`useEffect`** and **`useState`** hooks for asynchronous API calls.
The app retrieves public repository data from **GitHub’s open API** and displays it in a structured list.

---

## Project Purpose

The goal of this project is to understand how to:

- Use **`useEffect`** to perform actions (like fetching data) when a component loads.
- Manage and update data using **`useState`**.
- Handle **asynchronous calls** in React using **`async/await`**.
- Display dynamic content using **reusable components** and props.
- Trigger **manual data refresh** using event handlers.

---

## Features

- Fetches public repositories from GitHub for any given username.
- Automatically handles **loading** and **error states**.
- Displays repository data (name, description, and stars) in a clean structure.
- Uses a **reusable component** (`RepoCard`) to render each repository item.
- Includes a **refresh button** to fetch updated data without reloading the page.
- Styling (CSS) will be developed later.

---

## Technologies Used

- **React** (with Vite for fast development)
- **JavaScript (ES6+)**
- **GitHub REST API** as external public API to fetch information
- **Async/Await** for asynchronous data fetching

---

## How It Works

1. When the app loads, it automatically fetches data for a default GitHub user (e.g., _torvalds_) using the `useEffect` hook.
2. The `fetchRepos()` function uses `fetch()` and `async/await` to get data asynchronously from GitHub’s API.
3. While the data is loading, a _“Loading...”_ message is shown.
4. If the username doesn’t exist, an error message is displayed instead.
5. Once the data arrives, React re-renders the component and shows all repositories using the reusable `RepoCard` component.
6. The **Refresh** button re-fetches the same user’s data on demand.

---

## Component Structure

```
/src
 ├── App.jsx              # Main component with data fetching logic
 ├── components/
 │    └── RepoCard.jsx    # Reusable component to display each repository
 └── index.css            # (Styling to be developed later)
```

---

## Example Use

1. Open the app in your browser.
2. Enter a GitHub username (for example: `suhagan`).
3. Click **Fetch** to load that user’s repositories.
4. Click **🔄 Refresh** to fetch the latest data again.

---

## Example API Used

```
https://api.github.com/users/{username}/repos
```

Each response object contains fields such as:

- `name`
- `description`

---

## Learning Outcome

By completing this project, I practiced:

- Handling asynchronous API calls in React.
- Managing state and side effects with hooks.
- Structuring React apps with reusable components.
- Understanding React’s re-rendering behavior when state changes.

---

## Future Improvements

- Add CSS styling and responsive design for better UI.
- Show repository details (like forks, languages, or last update date).
- Add automatic updating of the data with an interval (e.g. every 30 seconds).
- Show time of last update.
- Add a search field to filter results by keyword.

---

**Author:** Suhagan Mostahid
**Created:** 27 October 2025

---
