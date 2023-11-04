"use client"

import HeroSection from "./Hero";


// import { useState } from "react";
// import HeroSection from "./Hero-Section";

const moviesdb = [
    {
        title: "Justice League",
        director: "Zack Snyder",
        year: 2017,
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        rating: 6.1,
        stars: ["Ben Affleck", "Gal Gadot", "Jason Momoa"],
        runtime: 2,
        overview: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.",
        release_date: "November 17, 2017",
        trailer: "https://avodmp4s3ww-a.akamaihd.net/ww_iad/b703/ee9d/dd0b/427a-8e55-92f19445b1d9/ed40b853-09eb-4536-94ea-ebf16a3885cf_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
        images: [
            "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6f19b63400c41c883b6064320def4f126fa94297ec7dd15089d044c32211ed73._RI_TTW_SX360_FMwebp_.jpg",
        ]
    },

    {
        title: "Lord Of the Ring",
        director: "Zack Snyder",
        year: 2017,
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        rating: 6.1,
        stars: ["Ben Affleck", "Gal Gadot", "Jason Momoa"],
        runtime: 2,
        overview: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.",
        release_date: "November 17, 2017",
        trailer: "https://avodmp4s3ww-a.akamaihd.net/ww_iad/b703/ee9d/dd0b/427a-8e55-92f19445b1d9/ed40b853-09eb-4536-94ea-ebf16a3885cf_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
        images: [
            "https://m.media-amazon.com/images/S/pv-target-images/d7e358ea8f90d8ea8aeeb6f3e56d3d1d93d9154f7d92ceada94913402a592d1f._UR1920,1080_SX1440_FMjpg_.jpg"
        ]
    },

    {
        title: "Hulk",
        director: "Zack Snyder",
        year: 2017,
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        rating: 6.1,
        stars: ["Ben Affleck", "Gal Gadot", "Jason Momoa"],
        runtime: 2,
        overview: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.",
        release_date: "November 17, 2017",
        trailer: "https://avodmp4s3ww-a.akamaihd.net/ww_iad/b703/ee9d/dd0b/427a-8e55-92f19445b1d9/ed40b853-09eb-4536-94ea-ebf16a3885cf_video_720p_2500kbps_audio_aaclc_128kbps.mp4",
        images: [
            "https://m.media-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.7601a179-c57b-4195-a6a1-be97e48e80bc/511/HERO-16X9/en-US._UR1920,1080_SX720_FMjpg_.jpg",
        ]
    },
]

const Carousel = () => {
    const imgUrl = "https://m.media-amazon.com/images/S/le-target-images-prod/amzn1.dv.gti.7601a179-c57b-4195-a6a1-be97e48e80bc/511/HERO-16X9/en-US._UR1920,1080_SX720_FMjpg_.jpg"
    return (
        <div className="carousel w-full">
            {moviesdb.map((movie, index) => (
                <div id={`slide${index}`} className="carousel-item relative w-full">
                    <HeroSection movie={moviesdb[index]} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${index - 1}`} className="btn btn-circle" aria-disabled={index > 1}>❮</a>
                        {moviesdb.length !== (index + 1) && (
                            <a href={`#slide${index + 1}`} className="btn btn-circle z-999">❯</a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;