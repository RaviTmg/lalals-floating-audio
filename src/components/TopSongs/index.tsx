import { ISong } from "@/data/songs";
import { Play } from "lucide-react";
import Image from "next/image";
import { MouseEventHandler, useRef } from "react";
import ScrollContainer from "../ScrollContainer";

const TopSong = ({
  song,
  onClick,
}: {
  song: ISong;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  const { id, title, author, numberOfPlays, thumbnail } = song;
  return (
    <div
      className="flex items-center space-x-4 p-2 hover:bg-primary_lals-200 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <span className="text-gray-400 w-6">{id}</span>
      <div className="w-20 h-20 bg-gray-700 rounded-xl relative overflow-hidden">
        <Image
          src={thumbnail}
          width={80}
          height={80}
          alt={`song-thumbnail-${ id }`}
        />
        <Play
          className="absolute top-0 bottom-0 left-0 right-0 m-auto w-9 h-9 opacity-75"
          fill="white"
          color="white"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-medium">{title}</h4>
        <p className="text-sm text-gray-400">
          @{author} · {numberOfPlays} Plays
        </p>
      </div>
    </div>
  );
};

export default function TopSongs ({
  songs,
  onSongSelect,
}: {
  songs: ISong[];
  onSongSelect: (song: ISong) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Global Top 15</h2>
      <p className="text-sm text-gray-400 mb-6">Songs created using MusicGPT</p>
      <ScrollContainer scrollOffset={400}>
        <div
          className="grid grid-rows-3 auto-cols-[400px] grid-flow-col gap-3"
          style={{ scrollbarWidth: "none" }}
          ref={containerRef}
        >
          {songs.map((song, index) => (
            <TopSong
              key={index}
              song={song}
              onClick={() => onSongSelect(song)}
            />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
}
