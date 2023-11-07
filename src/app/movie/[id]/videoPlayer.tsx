"use client"

import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
    videoSource: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current?.paused) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <video ref={videoRef} controls width="640" height="360">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button onClick={togglePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};

export default VideoPlayer;
