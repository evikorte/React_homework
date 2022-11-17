import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="code-reference">
        Coded by
        <a
          href="https://github.com/evikorte/React_homework"
          target="_blank"
          rel="noreferrer"
          id="git-hub-link"
        >
          evikorte
        </a>
      </div>{" "}
    </div>
  );
}
