import "./NotebookItem.css";

function NotebookItem(props) {
  const { notebook, onNotebookClick } = props;
  return (
    <div
      className="notebook-item"
      onClick={() => {
        onNotebookClick(notebook);
      }}
    >
      <img src={notebook.thumbnailURL} />
      <h4>{notebook.title}</h4>
    </div>
  );
}

export default NotebookItem;
