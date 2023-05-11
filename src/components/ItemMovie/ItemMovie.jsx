import { Poster, StyledLink, Wrapper } from "./ItemMovie.styled";

const ItemMovie = ({ item, link }) => {
    return (
            <Wrapper>
                <Poster 
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                    alt={`Poster ${item.title}`} width='200px' min-height='350px' />
                <br />
                <StyledLink to={link}>Back</StyledLink>
                <div>
                    <h1>{item.title} {item.release_date.slice(0, 4)}</h1>
                    <h2>User Score: {Math.round(item.vote_average * 10)}%</h2>
                    <h3>Overview</h3>
                    <p>{item.overview}</p>
                    <h3>Genres</h3>
                    <div>
                        {item.genres.map(genere => (<span key={genere.id}>{genere.name}</span>) )}
                    </div>
                </div>
            </Wrapper>
    );
};

export default ItemMovie;