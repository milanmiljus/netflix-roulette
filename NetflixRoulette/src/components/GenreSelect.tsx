type GenreSelectProps = {
  genres: string[],
  selectedGenre: string,
  onSelect: (genre:string) => void
}

export const GenreSelect = ({ genres, selectedGenre, onSelect }: GenreSelectProps) => {
  return (
    <div>
      {genres.map(genre => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          style={{ color: genre === selectedGenre ? 'red' : 'white' }}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}
