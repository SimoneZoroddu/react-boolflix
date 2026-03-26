import { useCardContext } from '../context/CardContext'

export default function Main() {

    const { filmsSearced, serieTVSearced } = useCardContext()


    return (
        <div className='bg-secondary' style={{ height: '5000px'}}>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                    {
                        filmsSearced.map((film) => (
                            <div className="col p-3" key={film.id}>
                                <img src={film.poster_path ? `https://image.tmdb.org/t/p/w342/${film.poster_path}` : 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'} alt={film.original_title} className='img-fluid' id='image_filmhover'/>
                                <div id='description_films'>
                                    <h3><strong>Titolo</strong>: <br /> {film.title}</h3>
                                    <h4><strong>Titolo originale</strong>:{film.original_title}</h4>
                                    <div><strong>Voto</strong>:{'★'.repeat(Math.ceil(film.vote_average / 2))}{'☆'.repeat(5 - (Math.ceil(film.vote_average / 2)))}</div>
                                    <div className={`fi fi-${film.original_language === "en" ? "gb" : film.original_language === "ja" ? "jp" : film.original_language === "zh" ? "kr" : film.original_language}`}></div>
                                    <div><strong>Overview</strong>:{film.overview}</div>
                                </div>
                            </div>

                        )
                        )
                    }
                    {
                        serieTVSearced.map((serieTv) => (
                            <div className="col p-3" key={serieTv.id}>
                                <img src={serieTv.poster_path ? `https://image.tmdb.org/t/p/w342/${serieTv.poster_path}` : 'https://image.tmdb.org/t/p/w342/4SZQqcsaETKSKo15lYQO8RAcBpv.jpg'} alt={serieTv.original_name} className='img-fluid' id='image_serietvhover' />
                                <div id='description_serietv'>
                                    <h1>{serieTv.name}</h1>
                                    <h2>{serieTv.original_name}</h2>
                                    <div>{'★'.repeat(Math.ceil(serieTv.vote_average / 2))}{'☆'.repeat(5 - (Math.ceil(serieTv.vote_average / 2)))}</div>
                                    <div className={`fi fi-${serieTv.original_language === "en" ? "gb" : serieTv.original_language === "ja" ? "jp" : serieTv.original_language === "zh" ? "kr" : serieTv.original_language}`}></div>
                                    <div><strong>Overview</strong>:{serieTv.overview}</div>
                                </div>
                            </div >
                        )
                        )
                    }

                </div>
            </div>
        </div>
    )
}