import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={} />
        <Route path="/posts/new" component={} />
        <Route path="/posts/:id" component={} />
      </Routes>
    </Router>
  );
}

export default App;
