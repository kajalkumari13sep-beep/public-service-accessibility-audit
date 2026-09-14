import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

function App() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  async function search(event) {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:4000/api/services?query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    setResults(data.results);
  }

  return (
    <>
      <header>
        <nav aria-label="Primary navigation">
          <a href="#main">Services</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="main">
        <h1>Public Service Search</h1>

        <form onSubmit={search} role="search">
          <label htmlFor="service-search">Search services</label>
          <input
            id="service-search"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <section aria-labelledby="results-heading">
          <h2 id="results-heading">Results</h2>
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                <article>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.url}>Open service</a>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="about">
        <p>Accessibility-first public service prototype.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
