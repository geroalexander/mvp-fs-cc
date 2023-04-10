import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BlogList } from "./components/BlogList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts" Component={BlogList} />
        {/* <Route path="/posts/new" component={} /> */}
        {/* <Route path="/posts/:id" component={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
