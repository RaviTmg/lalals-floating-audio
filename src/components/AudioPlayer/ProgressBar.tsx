import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import TimePill from "./TimePill";

const ProgressBar = () => {
  const gradientStartColor = "rgba(0,0,0,0)";
  const gradientEndColor = "rgba(168,7,246,1)";
  const trackBaseColor = "rgba(45,52,60,1)";

  const { getPosition, duration, seek } = useGlobalAudioPlayer();
  const [position, setPosition] = useState(0);
  const frameRef = useRef<number>(null);
  const [hoveredPositionX, setHoveredPositionX] = useState<number | null>(null);

  useEffect(() => {
    const animate = () => {
      setPosition(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  const handleProgressChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      seek(parseFloat(event.target.value));
    },
    [seek],
  );

  if (duration === Infinity) return null;
  const seekRelativePosition = position / duration * 100;

  return (
    <div className="flex items-center justify-center gap-5 w-[calc(100%-1.5rem)] absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 group/seek">
      <TimePill
        startTime={position}
        endTime={duration}
        positionLeft={seekRelativePosition}
      />
      {!!hoveredPositionX && (
        <TimePill
          startTime={hoveredPositionX * duration}
          endTime={duration}
          positionLeft={hoveredPositionX * 100}
        />
      )}
      <div
        className={`h-0.5 absolute left-0 top-0 rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-300`}
        style={{
          width: `${seekRelativePosition}%`,
          boxShadow: `0 0 8px ${gradientEndColor}`,
        }}
      ></div>
      <input
        className="relative w-full h-0.5 rounded-lg appearance-none focus:outline-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, ${gradientStartColor} 0%, ${gradientEndColor} ${seekRelativePosition}%, ${trackBaseColor} ${seekRelativePosition}%)`,
        }}
        type="range"
        value={position}
        max={duration}
        onChange={handleProgressChange}
        title=""
        onMouseMove={(event) => {
          setHoveredPositionX(
            event.nativeEvent.offsetX / event.currentTarget.clientWidth,
          );
        }}
      />
    </div>
  );
};

export default ProgressBar;
