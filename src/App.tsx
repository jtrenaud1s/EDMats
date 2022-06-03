import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import RawMaterialView from "./views/RawMaterialView"
import ManufacturedMaterialView from "./views/ManufacturedMaterialView";
import EncodedMaterialView from "./views/EncodedMaterialView";
import GuardianMaterialView from "./views/GuardianMaterialView";

function App() {
  return (
    <>
      <BrowserRouter basename="/EDMats">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/raw" element={<RawMaterialView />} />
          <Route path="/manufactured" element={<ManufacturedMaterialView />} />
          <Route path="/encoded" element={<EncodedMaterialView />} />
          <Route path="/guardian" element={<GuardianMaterialView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
