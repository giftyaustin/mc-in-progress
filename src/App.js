import { Routes, Route } from "react-router-dom";
import LandingPage from "./landingComp/LandingPage";
import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import PopUp from "./popUpComponents/PopUp";
import ThreeVerticalLines from "./loadingComp/ThreeVerticalLines";
const Auth = lazy(() => import("./authComp/Auth.js"));
const UserHome = lazy(() => import('./accountComp/UserHome.js'));


function App() {


//  reloads page when clicked back function in browser
// window.onpopstate = function () {
    
// };



  const showPopup = useSelector(state=>state.popup.showPopup)
  
  return (
    <div className="App">
   
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route
          exact
          path="/auth"
          element={
            <Suspense fallback={<ThreeVerticalLines/>}>
              <Auth />
            </Suspense>
          }
        />
        <Route
          exact
          path="/accounts/*"
          element={
            <Suspense fallback={<ThreeVerticalLines/>}>
              <UserHome />
            </Suspense>
          }
        />
        <Route
          exact
          path="/g-account/*"
          element={
            <Suspense fallback={<ThreeVerticalLines/>}>
              <UserHome />
            </Suspense>
          }
        />
      </Routes>
      {showPopup && <PopUp/>}
    </div>
  );
}

export default App;
