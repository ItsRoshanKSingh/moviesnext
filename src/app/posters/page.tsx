import getMovies from "@/components/super-carousel/action"

export default async function Poster() {
    const movies = await getMovies()

    return (
        <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {movies.map((movie) => (
                        <div key={movie.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-96">
                                <img
                                    src={movie.imageUrl}
                                    alt={movie.name}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-white">
                                        <a href={`/posters/${movie.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {movie.name}
                                        </a>
                                    </h3>
                                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                </div>
                                <p className="text-sm font-medium text-white">${5}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
