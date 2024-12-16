import data from "@/data";
import React from "react";
import {
  IoPlay,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";
import { LiaRandomSolid } from "react-icons/lia";
import { VscDebugRestart } from "react-icons/vsc";

export default function Controls() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-2 text-dimmed text-xl">
        <LiaRandomSolid />
        <IoPlaySkipBackSharp />
        <div className="p-3 bg-white rounded-full text-black">
          <IoPlay />
        </div>
        <IoPlaySkipForwardSharp />
        <VscDebugRestart />
      </div>
      <div className="flex items-center gap-2 text-xs text-dimmed">
        <span>0:00</span>
        <div className="w-[500px] h-[3px] rounded-full bg-hover" />
        <span>{data.song.duration}</span>
      </div>
    </div>
  );
}
