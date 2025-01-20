import { ISong } from "@/data/songs";
import { Ellipsis, Heart } from "lucide-react";
import React from "react";

const PlayerOptions = (props: { currentSong: ISong }) => {
  const { numberOfLikes } = props.currentSong;

  return (
    <div className="flex flex-col justify-between items-end h-full py-2">
      <Ellipsis />
      <div className="flex gap-1 items-center">
        <span className="text-sm">{numberOfLikes}K</span>
        <Heart className="ml-1 w-6 h-6" />
      </div>
    </div>
  );
};

export default PlayerOptions;
