import { Routes, Route } from "react-router-dom";
import LandingPage from "./landingComp/LandingPage";
import Appcss from "./App.module.css";
import { lazy, Suspense } from "react";
const Auth = lazy(() => import("./authComp/Auth.js"));
const UserHome = lazy(()=>{import('./accountComp/UserHome.js')})

function App() {
  return (
    <div>
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
        <Route exact path="/accounts" element={<Suspense fallback={'loading...'}><UserHome/></Suspense>}/>
      </Routes>
    </div>
  );
}

export default App;
