import React from "react";
import Login from "./components/Login";

const App = () => {
  return (
    <div
      className="relative bg-[linear-gradient(to_top,#d946ef,#34d399)] min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay mờ từ 4 cạnh */}
      <div className="absolute inset-0 bg-black/40">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.2)_100%)]"></div>
      </div>

      <Login />
    </div>
  );
};

export default App;
