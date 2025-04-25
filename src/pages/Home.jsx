import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "YJHD", release_date: "2020" },
        {id: 2, title: "Pathan", release_date: "2023" },
        {id: 3, title: "Jawan", release_date: "2023" },
        {id: 4, title: "Tiger 3", release_date: "2023" },
        {id: 5, title: "Dear Zindagi", release_date: "2021" },
        {id: 6, title: "Fan", release_date: "2020" },
    ]
    const handleSearch = () => {

    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movie..." className="search-input"></input>
                <button type="submit" className="search-button">Seach</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;