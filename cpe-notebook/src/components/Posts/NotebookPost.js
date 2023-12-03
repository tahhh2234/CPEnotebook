import "./NotebookPost.css";

function NotebookPost(props) {
  const { notebook, onBgClick } = props;
  return (
    <div className="notebook-post">
      <div className="notebook-post-bg" onClick={onBgClick} />
      <div className="notebook-post-content">
        <img src={notebook.thumbnailURL} />
        <h4>{notebook.title}</h4>
      </div>
    </div>
  );
}

export default NotebookPost;
