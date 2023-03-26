import { Fragment, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "./firebaseConfig";
import Home from "./pages/Home";
import publicRoutes from "./routes/routes";
import DefaultLayout from "./layout/DefaultLayout";
function App() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <div className="App">
      <div className="mx-auto text-base content-wrapper">
        
        <Routes>
          {/* <Route exact path="/">
            {isAuthenticated ? (
              <Route path="/home" element={<Home/>}></Route>
            ) : (
              <Navigate to="/signin" replace/>
            )}
          </Route> */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={isAuthenticated ? (<DefaultLayout><Home/></DefaultLayout>) : <Navigate to="/signin" />}
          />
          {
            publicRoutes.map((route,index)=>{
              const Page=route.element;
              let Layout = DefaultLayout;
              if(route.layout){
                Layout = route.layout
              }else if(route.layout === null){
                Layout = Fragment
              }
              return(
                <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                }
                />
              )
            })
          }
        </Routes>
      </div>
    </div>
  );
}

export default App;
