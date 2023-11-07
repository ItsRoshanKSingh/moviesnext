"use server"

import prisma from "@/db/prisma";

export default async function getMovies() {

    const movies = await prisma.movie.findMany({
        orderBy: { id: 'desc' }
    })

    return movies
}