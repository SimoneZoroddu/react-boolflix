import { useCardContext } from '../context/CardContext'
import Cards from "../components/Cards"

export default function Main() {

    const { filmsSearced, serieTVSearced, starsVote, changeNameLanguage, srcPoster } = useCardContext()


    return (
        <div className='bg-secondary' style={{ height: '5000px' }}>
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">   
                    <Cards arrayToMap={filmsSearced}/>
                    <Cards arrayToMap={serieTVSearced}/>
                </div>
            </div>
        </div>
    )
}

/* {`fi fi-${film.original_language === "en" ? "gb" : film.original_language === "ja" ? "jp" : film.original_language === "zh" ? "kr" : film.original_language}`}     film.poster_path */