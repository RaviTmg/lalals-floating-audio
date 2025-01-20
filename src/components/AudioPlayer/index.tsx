"use client";
import { AnimatePresence, motion } from "framer-motion";
import Controls from "./Controls";
import PlayerOptions from "./PlayerOptions";
import ProgressBar from "./ProgressBar";
import SongPrompt from "./SongPrompt";
import SongTitle from "./SongTitle";
import { MouseEventHandler, useEffect } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { ISong } from "@/data/songs";
import { X } from "lucide-react";
import Image from "next/image";

const AudioPlayer = ({
  song,
  onClose,
}: {
  song: ISong;
  onClose: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { play } = useGlobalAudioPlayer();

  useEffect(() => {
    play();
  }, [song]);

  return (
    <AnimatePresence>
      {song && (
        <motion.div
          initial={{ y: "100%", opacity: 1 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="w-4/5 max-w-4xl h-24 rounded-2xl fixed bottom-[30px] left-0 right-0 mx-auto audio-player audio-player-group group"
        >
          <ProgressBar />
          <button
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-20 w-6 h-6 justify-center items-center rounded-full border-2 border-primary_lals-400 bg-primary_lals-100 group-hover:flex hidden"
            onClick={onClose}
          >
            <X width={14} height={14} />
          </button>
          <div className="w-full h-full rounded-2xl bg-transparent flex items-center justify-between overflow-hidden text-primary_lals-1000 pr-4 border border-[#2C343C] backdrop-blur-[50px] shadow-[0_0_50px_0_#00000080;]">
            <Image
              src={song.thumbnail}
              alt={song.title}
              width={88}
              height={88}
              className="h-full mr-2 max-w-20 object-cover"
            />
            <SongTitle currentSong={song} />
            <Controls />
            <SongPrompt currentSong={song} />
            <PlayerOptions currentSong={song} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudioPlayer;
