import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BlogList } from "./components/BlogList";
import { BlogItem } from "./components/BlogItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={BlogList} />
        {/* <Route path="/posts/new" component={} /> */}
        <Route path="/posts/:id" Component={BlogItem as React.ComponentType} />
      </Routes>
    </Router>
  );
}

export default App;
