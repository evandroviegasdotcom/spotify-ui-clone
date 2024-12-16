import React from "react";
import Albums from "./albums";
import Home from "./home";
import Details from "./details";

export default function MainContent() {
  return (
    <div className="grid grid-cols-10 gap-1.5 grow max-h-full overflow-hidden">
      <div className="col-span-2 ">
        <Albums />
      </div>
      <div className="col-span-5 overflow-y-auto hide-scrollbar h-full">
        <Home />
      </div>
      <div className="col-span-3  h-full overflow-y-auto hide-scrollbar">
        <Details />
      </div>
    </div>
  );
}