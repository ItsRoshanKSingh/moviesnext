import prisma from "@/db/prisma";
import Link from "next/link";
import HeroSection from "./Hero";

export default async function Carousel() {

    const movies = await prisma.movie.findMany({
        orderBy: { id: "desc" }
    })

    return (
        <div className="carousel w-full py-5">
            {movies.map((movie, index) => (
                <div id={`slide${index}`} className="carousel-item relative w-full">

                    <HeroSection movie={movie} />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4 md:top-1/2">
                        <Link href={`#slide${index - 1}`} className="btn btn-circle" aria-disabled={index > 1}>❮</Link>
                        {movies.length !== (index + 1) && (
                            <Link href={`#slide${index + 1}`} className="btn btn-circle z-999">❯</Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}