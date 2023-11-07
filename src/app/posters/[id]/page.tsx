import prisma from "@/db/prisma"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { cache } from "react"
import AddToCartButton from "./AddToCartButton"
import { incrementCart } from './action'

interface PageProps {
    params: {
        id: string
    }
}

const getMovie = cache(
    async (id: string) => {
        const movie = await prisma.movie.findUnique({
            where: { id }
        })

        if (!movie) notFound()
        return movie
    }
)

export async function generateMetaData({
    params: { id }
}: PageProps): Promise<Metadata> {

    const movie = await getMovie(id)

    return {
        title: movie.name,
        description: movie.overview,
        openGraph: {
            images: [{ url: movie.imageUrl }]
        }
    }

}


export default async function MoviePage({
    params: { id },
}: PageProps) {
    const movie = await getMovie(id)

    return (
        <div>
            <h1>{movie.name}</h1>
            <VideoPlayer videoSource={`${movie.trailerUrl}`} />
            <AddToCartButton movieId={movie.id} incrementMovieQuantity={incrementCart} />
        </div>
    )
}

