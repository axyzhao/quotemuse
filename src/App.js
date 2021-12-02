import { Router } from "@reach/router";
import { Link } from "@reach/router";

import Posts from "./components/posts";

function App() {
  return (
    <div>
    <Router>
      <Posts path="/" />
    </Router>
    </div>
  );
}

export default App;
