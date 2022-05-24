import React from "react";
import Layout from "./components/wrapper/Layout";
// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const UsersPage = React.lazy(() => import("./pages/UsersPage"));

class App extends React.Component {
  render() {
    return (
      <Layout>
        <React.Suspense fallback={<p>Loading page...</p>}>
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </React.Suspense>
      </Layout>
    );
  }
}

export default App;
