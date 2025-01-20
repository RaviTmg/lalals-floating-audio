import { ISong } from '@/data/songs';
import React from 'react';

const SongPrompt = (props: { currentSong: ISong }) => {
  const { prompt } = props.currentSong;
  return (
    <div className="flex flex-col relative">
      <span className="text-white">{prompt.title}</span>
      {prompt.content?.split('\n').map((line, index) => (
        <span key={index} className="text-primary_lals-1000">
          {line}
        </span>
      ))}
      {/* <div className='bg-gradient-to-b from-[#13191F00] to-[#16191C] h-2/3 absolute w-full bottom-0'></div> */}
    </div>
  );
};

export default SongPrompt;
