import React from "react";
import Layout from "./components/wrapper/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = React.lazy(() => import("./pages/Home"));
const Signup = React.lazy(() => import("./pages/Signup"));
const PageNotFound = React.lazy(() => import("./pages/404"));

// App page, where all routing takes place
function App() {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn)
  console.log(isAuthenticated);
  return (
    <Layout>
      <React.Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to={"/home"}/> : <Navigate to={"/signup"}/>} exact />
          <Route path="/signup" element={isAuthenticated ? <Navigate to={"/home"}/> : <Signup/>} />
          <Route path="/home" element={isAuthenticated ? <Home/> : <Navigate to={"/signup"}/>} />
          <Route path="*" element={ <PageNotFound/>}/>
        </Routes>
      </React.Suspense>
    </Layout>
  );
}

export default App;
