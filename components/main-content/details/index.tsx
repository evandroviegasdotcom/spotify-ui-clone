import data from "@/data";
import AboutArtist from "./about-artist";
import SongMainInfo from "./song-main-info";
import { IoCloseOutline } from "react-icons/io5";
import { PiDotsThreeBold } from "react-icons/pi";

export default function Details() {
  return (
    <div className="bg-foreground rounded-lg  relative z-[1]">
      <video
        className=" absolute inset-x-0 top-0 h-[400px] object-cover rounded-t-xl z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src={"/song.mp4"} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b h-[400px] from-black/10 to-foreground z-[-1]" />

      <div className="flex justify-between sticky top-0 inset-x-0  p-3 rounded-xl">
        <span className="font-semibold">{data.song.album}</span>
        <div className="flex items-center gap-1.5 text-dimmed text-2xl">
          <PiDotsThreeBold />
          <IoCloseOutline />
        </div>
      </div>

      <div className="space-y-12 p-3">
        <SongMainInfo />
        <AboutArtist />
      </div>
    </div>
  );
}
