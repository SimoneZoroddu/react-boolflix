import { useState } from "react"
import axios from "axios"


export default function Main() {

    const envFileAPI = import.meta.env.VITE_API_MOVIES

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${envFileAPI}`

    const [valueSearced, setValueSearced] = useState('')
    const [filmsSearched, setFilmsSearched] = useState([])


    function searchMovies(e) {
        e.preventDefault()
        axios.get(`${url}&query=${valueSearced}`)
            .then(response => {
                //console.log(response.data)
                setFilmsSearched(response.data.results)
            }
            )
    }


    return (
        <>
            <form action="" onSubmit={searchMovies}>
                <input type="text" value={valueSearced} onChange={(e) => setValueSearced(e.target.value)} />
                <button>Cerca il film</button>
            </form>
                {
                    filmsSearched.map((film) => (
                        <div key={film.id}>
                            <h1>{film.title}</h1>
                            <h2>{film.original_title}</h2>
                            <p>{film.original_language}</p>
                            <div>{film.vote_average}</div>
                        </div>
                    ))
                }
        </>

    )
}