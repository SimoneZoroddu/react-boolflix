import { useCardContext } from '../context/CardContext'


export default function Main() {

    const { filmsSearced, serieTVSearced, starsVote, changeNameLanguage, srcPoster } = useCardContext()


    return (
        <div className='bg-secondary' style={{ height: '5000px' }}>
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                    {
                        filmsSearced.map((film) => (
                            <div className="col my-3" key={film.id} id='changeFilm_hover'>
                                <img src={srcPoster(film.poster_path)} alt={film.original_title} className='img-fluid' id='image_film' style={{ width: 239, height: 338 }} />
                                <div id='description_film'>
                                    <h3><strong>Titolo</strong>: <br /> {film.title}</h3>
                                    <h4><strong>Titolo originale</strong>:{film.original_title}</h4>
                                    <div><strong>Voto</strong>:{starsVote(film.vote_average)}</div>starsVote(film.vote_average)
                                    <div className={`fi fi-${changeNameLanguage(film.original_language)}`}></div>
                                    <div><strong>Overview</strong>:{film.overview}</div>
                                </div>
                            </div>
                        )
                        )
                    }
                    {
                        serieTVSearced.map((serieTv) => (
                            <div className="col my-3" key={serieTv.id} id='changeSerietv_hover'>
                                <img src={srcPoster(serieTv.poster_path)} className='img-fluid' id='image_serietv' style={{ width: 239, height: 338 }} />
                                <div id='description_serietv'>
                                    <h1>{serieTv.name}</h1>
                                    <h2>{serieTv.original_name}</h2>
                                    <div>{starsVote(serieTv.vote_average)}</div>
                                    <div className={`fi fi-${changeNameLanguage(serieTv.original_language)}`}></div>
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

/* {`fi fi-${film.original_language === "en" ? "gb" : film.original_language === "ja" ? "jp" : film.original_language === "zh" ? "kr" : film.original_language}`}     film.poster_path */