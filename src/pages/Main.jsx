import { useCardContext }from '../context/CardContext'

export default function Main() {

    const {filmsSearced, serieTVSearced} = useCardContext()
    

    return (
        <>
            
            {
                filmsSearced.map((film) => (
                    <div key={film.id}>
                        <h1>{film.title}</h1>
                        <h2>{film.original_title}</h2>
                        <div>{'★'.repeat(Math.ceil(film.vote_average / 2))}{'☆'.repeat(5 - (Math.ceil(film.vote_average / 2)))}</div>
                        <div className={`fi fi-${film.original_language === "en" ? "gb" : film.original_language === "ja" ? "jp" : film.original_language === "zh" ? "kr" : film.original_language}`}></div>
                        <img src={film.poster_path ? `https://image.tmdb.org/t/p/w342/${film.poster_path}` : 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'} alt={film.original_title} />
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
                        <img src={serieTv.poster_path ? `https://image.tmdb.org/t/p/w342/${serieTv.poster_path}` : 'https://image.tmdb.org/t/p/w342/4SZQqcsaETKSKo15lYQO8RAcBpv.jpg'} alt={serieTv.original_name} />
                    </div >
                )
                )
            }
        </>

    )
}