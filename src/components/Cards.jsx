


export default function createCards() {


    return (
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
    )
}