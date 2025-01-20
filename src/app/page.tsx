"use client";
import AudioPlayer from "@/components/AudioPlayer";
import BestAi from "@/components/icons/BestAi";
import BiggestLibrary from "@/components/icons/BiggestLibrary";
import Dollar from "@/components/icons/Dollar";
import Download from "@/components/icons/Download";
import ShoppingBag from "@/components/icons/ShoppingBag";
import TopGenre from "@/components/TopGenre";
import TopProducers from "@/components/TopProducers";
import TopSongs from "@/components/TopSongs";
import { topGenres } from "@/data/genres";
import { topProducers } from "@/data/producers";
import { ISong, songs } from "@/data/songs";
import { useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const Header = () => (
  <header className="flex justify-between items-center p-4">
    <div className="text-2xl font-bold text-white">MusicGPT</div>
    <div className="space-x-4">
      <button className="text-gray-300 hover:text-white">Log in</button>
      <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
        Sign up
      </button>
    </div>
  </header>
);

const Features = () => (
  <div className="flex justify-between p-8 border-t border-b border-gray-800">
    <div className="flex items-center space-x-2 text-gray-300">
      <BestAi />
      <span>World&apos Best AI</span>
    </div>
    <div className="flex items-center space-x-2 text-gray-300">
      <Download />
      <span>Unlimited Free Downloads</span>
    </div>
    <div className="flex items-center space-x-2 text-gray-300">
      <Dollar />
      <span>Commercial Use</span>
    </div>
    <div className="flex items-center space-x-2 text-gray-300">
      <BiggestLibrary />
      <span>Biggest Library</span>
    </div>
    <div className="flex items-center space-x-2 text-gray-300">
      <ShoppingBag />
      <span>Songs, Beats, Instrumentals and more</span>
    </div>
  </div>
);


export default function Home() {
  const [currentSong, setCurrentSong] = useState<ISong | null>(null);
  const { load } = useGlobalAudioPlayer();

  const handleSongSelect = (song: ISong) => {
    load(song.url, {
      autoplay: false,
      onload: () => setCurrentSong(song),
    });
  };

  return (
    <div className="bg-primary_lals-100 text-white pb-20">
      <Header />

      <main className="px-4 py-8">
        <TopGenre genres={topGenres} />
        <Features />
        <TopSongs songs={songs} onSongSelect={handleSongSelect} />
        <TopProducers producers={topProducers} />
      </main>
      {currentSong && (
        <AudioPlayer song={currentSong} onClose={() => setCurrentSong(null)} />
      )}
    </div>
  );
}
