import { useState } from "react"
import axios from "axios"


export default function Main() {

    const envFileAPI = import.meta.env.VITE_API_MOVIES

    const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${envFileAPI}`
    const urlSerieTV = `https://api.themoviedb.org/3/search/tv?api_key=${envFileAPI}&query=scrubs`

    const [valueSearced, setValueSearced] = useState('')
    const [filmsSearced, setFilmsSearced] = useState([])
    const [serieTVSearced, setSerieTVSearced] = useState([])

    function searchMovies(e) {
        e.preventDefault()
        axios.get(`${urlMovies}&query=${valueSearced}`)
            .then(response => {
                //console.log(response.data)
                setFilmsSearced(response.data.results)
            }
            )
        axios.get(`${urlSerieTV}&query=${valueSearced}`)
            .then(response => {
                //console.log(response.data)
                setSerieTVSearced(response.data.results)
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
                filmsSearced.map((film) => (
                    <div key={film.id}>
                        <h1>{film.title}</h1>
                        <h2>{film.original_title}</h2>
                        <div>{'★'.repeat(Math.ceil(film.vote_average / 2))}{'☆'.repeat(5 - (Math.ceil(film.vote_average / 2)))}</div>
                        <div className={`fi fi-${film.original_language === "en" ? "gb" : film.original_language === "ja" ? "jp" : film.original_language === "zh" ? "kr" : film.original_language}`}></div>
                        <img src={film.poster_path ? `https://image.tmdb.org/t/p/w342/${film.poster_path}` : 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'} alt="" />
                    </div >
                )
                )
            }
            {
                serieTVSearced.map((serieTv) => (
                    <div key={serieTv.id}>
                        <h1>{serieTv.name}</h1>
                        <h2>{serieTv.original_name}</h2>
                        <div>{'★'.repeat(Math.ceil(serieTv.vote_average / 2))}{'☆'.repeat(5 - (Math.ceil(serieTv.vote_average / 2)))}</div>
                        <div className={`fi fi-${serieTv.original_language === "en" ? "gb" : serieTv.original_language === "ja" ? "jp" : serieTv.original_language === "zh" ? "kr" : serieTv.original_language}`}></div>
                        <img src={serieTv.poster_path ? `https://image.tmdb.org/t/p/w342/${serieTv.poster_path}` : 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'} alt="" />
                    </div >
                )
                )
            }
        </>

    )
}