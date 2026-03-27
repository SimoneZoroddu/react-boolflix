import { createContext, useState, useContext } from "react";
import axios from "axios"

const CardContext = createContext()

function CreateCardContext({ children }) {
    const envFileAPI = import.meta.env.VITE_API_MOVIES

    const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${envFileAPI}`
    const urlSerieTV = `https://api.themoviedb.org/3/search/tv?api_key=${envFileAPI}`

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


    function starsVote(vote) {
        const voteNumbers = Math.ceil(vote / 2)
        return '★'.repeat(voteNumbers) + '☆'.repeat(5 - voteNumbers)
    }

    function changeNameLanguage(language) {

        if (language == 'en') {
            language = 'gb'
        } else if (language == 'ja') {
            language = 'jp'
        } else if (language == 'zh') {
            language = 'kr'
        }

        return language
    }

    function srcPoster(src) {
        if (src) {
            return `https://image.tmdb.org/t/p/w342/${src}`
        } else {
            return 'https://placehold.co/342x513/png?text=Poster+Non+Disponibile'
        }
    }
    return (

        <CardContext.Provider value={{ valueSearced, setValueSearced, filmsSearced, setFilmsSearced, serieTVSearced, setSerieTVSearced, searchMovies, starsVote, changeNameLanguage, srcPoster }}>
            {children}
        </CardContext.Provider>

    )
}


function useCardContext() {

    const useCardContext = useContext(CardContext)


    return useCardContext
}



export { CreateCardContext, useCardContext }