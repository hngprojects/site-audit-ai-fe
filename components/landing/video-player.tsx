"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full relative rounded-xl overflow-hidden">
      {/* Thumbnail + Play Button */}
      {!isPlaying && (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative w-full focus:outline-none"
        >
          {/* Thumbnail image */}
          <Image
            src="https://res.cloudinary.com/dsns1khez/video/upload/v1763710071/short_video_animation_ad_2D_animation_Fast_Food_Animation_short_video_ad_owoksj.jpg"
            width={606}
            height={547}
            alt="Video Thumbnail"
            className="w-full object-cover rounded-xl"
          />

          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg">
              <Play className="w-8 h-8 text-[#1A2373]" />
            </div>
          </div>
        </button>
      )}

      {/* Actual Video */}
      {isPlaying && (
        <video
          src="https://res.cloudinary.com/dsns1khez/video/upload/v1763710071/short_video_animation_ad_2D_animation_Fast_Food_Animation_short_video_ad_owoksj.mp4"
          autoPlay
          controls
          muted
          loop
          className="w-full rounded-xl"
        />
      )}
    </div>
  );
}
