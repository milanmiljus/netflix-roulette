import { useState } from 'react'
import Counter from './components/Counter';
import { SearchForm } from './components/SearchForm'
import { GenreSelect } from './components/GenreSelect'

export const App = () => {

  const [query, setQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  const handleSelectGenre = (genre: string) => {
    setSelectedGenre(genre);
  };


  const onSearch = (query: string) => {
    setQuery(query)
  }
  return (
    <div>
      <div>
        <h3>Counter</h3>
        <Counter initialValue={0} />
      </div>
      <div>
        <h3>Search Form</h3>
        <SearchForm initialQuery={''} onSearch={onSearch} />
        <p>Searched: {query}</p>
      </div>
      <div>
        <h3>Genre Selector</h3>
        <GenreSelect
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={handleSelectGenre}
        />
        <p>Selected Genre: {selectedGenre}</p>
      </div>
    </div>
  )
}

export default App