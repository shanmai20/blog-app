import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Article from "./components/Article";
import "./App.css";


function App() {
  return (
    <div className="container">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/article/:id" element={<Article/>} />
          <Route path="/" element={<Articles/>} />
          <Route path="/AddArticle" element={<AddArticle/>} />

          {/* <Route
            path="/"
            element={
              <div className="row mt-5">
                <div className="col-md-8">
                  <Articles />
                </div>
                <div className="col-md-4">
                  <AddArticle />
                </div>
              </div>
            }
          /> */}
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
