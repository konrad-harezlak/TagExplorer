import React from "react";
import ReactDOM from "react-dom/client";
import TagExplorer from "./TagExplorer";
import reportWebVitals from "./reportWebVitals";
import { TagsProvider } from "./TagsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TagsProvider>
      <TagExplorer />
    </TagsProvider>
  </React.StrictMode>
);

reportWebVitals();
