import { useCardContext } from '../context/CardContext'


export default function AppHeader() {

  const { valueSearced, setValueSearced, searchMovies } = useCardContext()


  return (
    <div className='bg-black d-flex justify-content-between align-items-center'>
      <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Logo Boolfix" className='m-3 d-none d-md-block' />
      <form action="" onSubmit={searchMovies} className='d-flex justify-content-center align-items-center flex-wrap text-center'>
        <input placeholder='Scrivi il titolo del film' type="text" value={valueSearced} onChange={(e) => setValueSearced(e.target.value)} className='m-3 rounded bg-black text-white text-center' />
        <button className='btn btn-secondary m-3'>Cerca un film</button>
      </form>
    </div>
  )
}