import { useState, ChangeEvent, KeyboardEventHandler } from 'react'

type SearchFormProps = {
  initialQuery: string,
  onSearch : (genre:string) => void
}

export const SearchForm = ({ initialQuery, onSearch }: SearchFormProps) => {
  const [query, setQuery] = useState(initialQuery || '')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  const search = () => {
    onSearch(query)
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={search}>Search</button>
    </div>
  )
}