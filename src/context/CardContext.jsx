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

    return (

        <CardContext.Provider value={{ valueSearced, setValueSearced, filmsSearced, setFilmsSearced, serieTVSearced, setSerieTVSearced, searchMovies }}>
            {children}
        </CardContext.Provider>

    )
}


function useCardContext() {

    const useCardContext = useContext(CardContext)


    return useCardContext
}



export { CreateCardContext, useCardContext }