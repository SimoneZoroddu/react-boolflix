


export default function Main() {

    const envFileAPI = import.meta.env.VITE_API_MOVIES

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${envFileAPI}&query=matrix`




    return (
        <>

        </>

    )
}