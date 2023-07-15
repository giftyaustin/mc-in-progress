import { Routes, Route } from "react-router-dom";
import LandingPage from "./landingComp/LandingPage";
import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import PopUp from "./popUpComponents/PopUp";
const Auth = lazy(() => import("./authComp/Auth.js"));
const UserHome = lazy(() => import('./accountComp/UserHome.js'));


function App() {


//  reloads page when clicked back function in browser
  window.onpopstate = function () {
    window.location.reload()
};



  const showPopup = useSelector(state=>state.popup.showPopup)
  
  return (
    <div className="App">
   {showPopup && <PopUp/>}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route
          exact
          path="/auth"
          element={
            <Suspense fallback={"loading ..."}>
              <Auth />
            </Suspense>
          }
        />
        <Route
          exact
          path="/accounts/*"
          element={
            <Suspense fallback={"loading..."}>
              <UserHome />
            </Suspense>
          }
        />
        <Route
          exact
          path="/g-account/*"
          element={
            <Suspense fallback={"loading..."}>
              <UserHome />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
