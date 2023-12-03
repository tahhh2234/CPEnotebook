import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import NotebookItem from "./components/Posts/NotebookItem";
import NotebookPost from "./components/Posts/NotebookPost";
import notebooks from "./data/notebooks";
import AppSearch from "./components/AppSearch";
import CommentSection from "./components/Comments/CommentSection";

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
      const lowercaseSearchText = searchText.toLowerCase();
      const lowercaseTitle = notebook.title.toLowerCase();
      return lowercaseTitle.includes(lowercaseSearchText);
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
      <a href={process.env.PUBLIC_URL + "software_engineer_proposal.pdf"} target="blank" className="pdf-file">Proposal</a>
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{notebookElements}</div>
        </div>
      </section>
      {notebookPost}

      <CommentSection />
    </div>
  );
}

export default App;
