import getMovies from './action'
import Gallery from './getCarouselList'

const index = async () => {

    const movies = await getMovies()

    return (
        <Gallery movies={movies} />
    )
}

export default index