import data from "@/data";
import Image from "next/image";
import React from "react";

export default function List() {
  return (
    <div className="flex flex-col">
      {data.albums.map((album) => (
        <div className="flex gap-3 hover:bg-hover p-2 rounded" key={album.name}>
          <Image
            src={album.cover}
            width={45}
            height={45}
            alt="Album Cover"
            className="rounded"
          />
          <div className="">
            <span className="block text-white text-[15px]">{album.name}</span>
            <span className="block text-dimmed text-xs">{`Album • ${album.artist}`}</span>
          </div>
        </div>
      ))}
    </div>  
  );
}
