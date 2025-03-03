
import '../styles/movie-card.scss';
import { Button } from './Button';
interface GenreResponseProps {
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[];
  handleClickButton: (id: number) => any;
  selectedGenreId: number;
}

export function SideBar({ genres, handleClickButton, selectedGenreId }: GenreResponseProps): JSX.Element {
  return <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id} />
      ))}
    </div>

  </nav>;
}