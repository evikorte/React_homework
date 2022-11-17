import React from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  return (
    <div className="Search">
      <form action="search-engine" id="search-engine">
        <input
          type="text"
          placeholder="Choose a location"
          name="City"
          id="city"
        />
        <input type="submit" value="Search" id="search-button" />
        <button alt="Current location" id="current-position-button">
          <span>🧭</span>
        </button>
      </form>
    </div>
  );
}
