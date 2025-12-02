"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export default function VideoPlayer(prop: { src?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [start, setStart] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full lg:min-w-[608px] flex justify-center lg:justify-start relative rounded-xl border cursor-pointer">
      {/* Video element always rendered */}
      <video
        ref={videoRef}
        src={
          prop.src
            ? prop.src
            : "https://res.cloudinary.com/dsns1khez/video/upload/v1763735425/HNG-Team_Tokungawa_explainer_1_p7rhvm.mp4"
        }
        loop
        className="w-full rounded-[12px] cursor-pointer"
        onClick={handleVideoClick}
      />

      {!isPlaying && (
        <button
          onClick={handleVideoClick}
          className="absolute flex w-full h-full items-center justify-center bg-black/10 rounded-[12px]  cursor-pointer"
          aria-label="Play Video"
        >
          <div className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg">
            <Play className="w-8 h-8 text-[#1A2373]" />
          </div>
        </button>
      )}

      {/* Overlay thumbnail + play button only when video is not playing */}
      {!start && (
        <button
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 rounded-[12px] cursor-pointer "
          onClick={() => {
            setStart(true);
            handleVideoClick();
          }}
          aria-label="Start Button"
        >
          <Image
            src="https://res.cloudinary.com/dsns1khez/video/upload/v1763735425/HNG-Team_Tokungawa_explainer_1_p7rhvm.jpg"
            width={606}
            height={547}
            alt="Video Thumbnail"
            className="w-full h-full object-cover rounded-[12px]"
          />
          <div className="absolute flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg">
              <Play className="w-8 h-8 text-[#1A2373]" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
