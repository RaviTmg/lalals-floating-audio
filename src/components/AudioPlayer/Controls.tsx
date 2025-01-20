import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

const Controls = () => {
  const { togglePlayPause, playing } = useGlobalAudioPlayer()
  return (
    <>
      <div className="flex gap-2 items-center mx-4">
        <SkipBack className="w-5 h-5" fill="#5d6165" color="#5d6165" />
        <button
          className="p-2 w-fit rounded-full group bg-[#FFFFFF12]"
          onClick={togglePlayPause}
        >
          {!playing ? (
            <Play
              className="w-5 h-5 translate-x-[0.1rem] group-hover:scale-110 transition-transform duration-300"
              fill="white"
              color="white"
            />
          ) : (
            <Pause className="w-5 h-5" fill="white" color="white" />
          )}
        </button>
        <SkipForward className="w-5 h-5" fill="#5d6165" color="#5d6165" />
      </div>
    </>
  );
};

export default Controls;
