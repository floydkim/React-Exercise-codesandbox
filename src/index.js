import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const list = [
  {
    id: 1,
    title: "a"
  },
  {
    id: 2,
    title: "b"
  }
];

function App() {
  let query = 2; // 검색어
  return (
    <div className="App">
      {list.map(cur => {
        const { id, title } = cur;
        return (
          <h1 key={id + title}>
            {id === query ? "id: " + id + " / title: " + title : ""}
          </h1>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
