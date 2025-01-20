import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function ScrollContainer ({ children, scrollOffset }: { children: React.ReactNode; scrollOffset?: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div className="w-full relative">
        <div
          className="overflow-x-auto w-full"
          style={{ scrollbarWidth: "none" }}
          ref={containerRef}
        >
            {children}
        </div>
        <div className="absolute h-full right-0 top-0 flex items-center justify-end w-72 bg-gradient-to-r from-[#11171C00] to-[#16191C]">
          <button
            className="rounded-full bg-primary_lals-200 text-primary_lals-1000"
            onClick={() =>
              containerRef.current?.scrollBy({
                top: 0,
                left: scrollOffset ?? 200,
                behavior: "smooth",
              })
            }
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    )
}