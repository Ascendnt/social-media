// import "./index.css";

import { FeedPage } from "./Components/FeedPage";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    // yung <> at </> ay fragment yan for wrapper siya at iwas nesting sa div
    <>
      <Navbar />
      <FeedPage />
    </>
  );
}

export default App;
