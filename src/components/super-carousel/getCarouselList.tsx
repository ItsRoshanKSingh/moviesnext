"use client"

import { } from '@/app/movie/[id]/page';
import { Movie } from "@prisma/client";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";


interface GalleryProps {
    movies: Movie[]
}

const Gallery = ({ movies }: GalleryProps) => {

    return (
        <>
            <div className="carousel carousel-center p-4 space-x-4 rounded-box w-full relative bg-black">
                {movies.map(movie => (
                    <div className="carousel-item h-60 overflow-hidden md:h-96" onClick={() => alert(movie.name)}>
                        <Image
                            src={movie.imageUrl}
                            alt={movie.name}
                            layout="responsive"
                            className="rounded-box"
                            width={300}
                            height={450}
                        />
                        {/* <img src={movie.imageUrl} className="rounded-box" /> */}
                    </div>
                ))}
            </div>
            <div className="carousel carousel-center p-4 space-x-4 rounded-box w-full relative bg-black">
                {movies.map(movie => (
                    <div className="carousel-item h-60 overflow-hidden md:h-96" onClick={() => window.open(`/movie/${movie.id}`, "_blank")}>
                        <Image
                            src={movie.imageUrl}
                            alt={movie.name}
                            layout="responsive"
                            className="rounded-box"
                            width={300}
                            height={450}
                        />
                    </div>
                ))}
            </div>
        </>
    )
};

export default Gallery;
