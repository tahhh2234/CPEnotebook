import "./NotebookItem.css";

function NotebookItem(props) {
  const { notebook, onNotebookClick } = props;
  return (
    <div className="notebook-item">
      <img
        src={notebook.thumbnailURL}
        onClick={() => {
          onNotebookClick(notebook);
        }}
      />
      <h4>{notebook.title}</h4>
    </div>
  );
}

export default NotebookItem;
