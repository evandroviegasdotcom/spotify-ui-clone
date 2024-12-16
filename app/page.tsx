import MainContent from "@/components/main-content";
import MusicPlayer from "@/components/music-player";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col  gap-3 p-4 max-h-screen h-screen overflow-hidden">
      <Navbar />
      <MainContent />
      <MusicPlayer />
    </div>
  );
}