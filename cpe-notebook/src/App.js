import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import NotebookItem from "./components/NotebookItem";
import NotebookPost from "./components/NotebookPost";
import notebooks from "./data/notebooks";

function App() {
  const [selectedNotebook, setSelectedNotebook] = useState(null);

  function onNotebookOpenClick(theNotebook) {
    setSelectedNotebook(theNotebook);
  }

  function onNotebookCloseClick() {
    setSelectedNotebook(null);
  }

  const notebookElements = notebooks.map((notebook, index) => {
    return (
      <NotebookItem
        key={index}
        notebook={notebook}
        onNotebookClick={onNotebookOpenClick}
      />
    );
  });

  let notebookPost = null;
  if (!!selectedNotebook) {
    notebookPost = (
      <NotebookPost
        notebook={selectedNotebook}
        onBgClick={onNotebookCloseClick}
      />
    );
  }

  return (
    <div>
      <AppHeader />
      <div className="app-grid">{notebookElements}</div>
      {notebookPost}
    </div>
  );
}

export default App;
