import "./App.css";

function App() {
  return (
    <div>
      <header className="app-header">
        <img className="app-header-logo" src="/images/logo.png" />
      </header>
      <div className="app-grid">
        <div className="notebook-item">
          <img src="/images/algorithms.png" />
          <h4>Algorithms for Computer Engineers</h4>
        </div>
        <div className="notebook-item">
          <img src="/images/datacomp.png" />
          <h4>Data and Computer Communications</h4>
        </div>
        <div className="notebook-item">
          <img src="/images/numerical.png" />
          <h4>Numerical Computation for Engineers</h4>
        </div>
        <div className="notebook-item">
          <img src="/images/oop.png" />
          <h4>Object-Oriented Programming (OOP)</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
