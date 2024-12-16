import data from "@/data";


export default function SongMainInfo() {
  return (
    <div className="space-y-3 pt-[300px]">
     
      
      <div className="space-y-0.5">
        <span className="text-2xl font-bold">{data.song.name}</span>
        <span className="block text-dimmed text-sm">{data.song.artists}</span>
      </div>
    </div>
  );
}
