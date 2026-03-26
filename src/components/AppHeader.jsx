import { useCardContext }from '../context/CardContext'


export default function AppHeader() {

  const { valueSearced, setValueSearced, searchMovies } = useCardContext()


  return (
    <>
      <form action="" onSubmit={searchMovies}>
        <input type="text" value={valueSearced} onChange={(e) => setValueSearced(e.target.value)} />
        <button>Cerca il film</button>
      </form>
    </>
  )
}