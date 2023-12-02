import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import NotebookItem from "./components/NotebookItem";
import NotebookPost from "./components/NotebookPost";
import notebooks from "./data/notebooks";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedNotebook, setSelectedNotebook] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onNotebookOpenClick(theNotebook) {
    setSelectedNotebook(theNotebook);
  }

  function onNotebookCloseClick() {
    setSelectedNotebook(null);
  }

  const notebookElements = notebooks
    .filter((notebook) => {
      return notebook.title.includes(searchText);
    })
    .map((notebook, index) => {
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
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{notebookElements}</div>
        </div>
      </section>
      {notebookPost}
    </div>
  );
}

export default App;
