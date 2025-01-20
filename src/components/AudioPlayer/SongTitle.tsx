import { ISong } from "@/data/songs";
import React from "react";

const SongTitle = (props: { currentSong: ISong }) => {
  const { title, author, numberOfPlays } = props.currentSong;

  return (
    <div>
      <h1 className="text-lg font-medium text-white">{title}</h1>
      <div className="flex text-primary_lals-1000 text-md">
        <span>@{author}</span>
        <span className="leading-4 mx-2">.</span>
        <span>{numberOfPlays} Plays</span>
      </div>
    </div>
  );
};

export default SongTitle;
