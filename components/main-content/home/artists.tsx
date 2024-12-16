import data from "@/data";
import Image from "next/image";
import React from "react";

export default function Artists() {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {data.artists.map((artist) => (
        <div key={artist.name} className="rounded-lg w-full bg-white/10 hover:bg-white/30 transition-all flex items-center gap-2">
          <div className="w-14 h-14 aspect-square relative">
            <Image
              src={artist.picture}
              fill
              className="object-cover rounded-l-lg"
              alt="Artist Picture"
            />
          </div>
          <span className="font-semibold text-sm">{artist.name}</span>
        </div>
      ))}
    </div>
  );
}
