
export default function TimePill ({ startTime, endTime, positionLeft }: { startTime: number, endTime: number, positionLeft: number }) {
  const formatTime = (time: number | undefined): string => {
    if (typeof time === "number" && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);

      // Convert to string and pad with leading zeros if necessary
      const formatMinutes = minutes.toString().padStart(2, "0");
      const formatSeconds = seconds.toString().padStart(2, "0");

      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <span
      className="absolute text-sm bg-primary_lals-300 rounded-lg p-1 bottom-3 text-primary_lals-1000 -translate-x-1/2 hidden group-hover/seek:block w-max"
      style={{
        left: `${positionLeft}%`,
      }}
    >
      {formatTime(startTime)} / {formatTime(endTime)}
    </span>

  )
}
