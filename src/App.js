import "./App.css";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="">
      <Header />
      <Blogs />
      <Pagination />
      <Toaster />
    </div>
  );
}

export default App;
