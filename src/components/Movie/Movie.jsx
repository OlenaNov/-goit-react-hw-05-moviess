import { Genre, Genres, Poster, Title, Text, Wrapper, LinkBack, Box } from "./Movie.styled";

const ItemMovie = ({ item, link }) => {
    return (
            <Wrapper>
                <Box>
                <Poster 
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                    alt={`Poster ${item.title}`} />
                <LinkBack to={link}>Go Back</LinkBack>
                <Genres>
                        {item.genres.map(genre => (<Genre key={genre.id}>{genre.name}</Genre>) )}
                </Genres>
                </Box>
                <div>
                    <Title>{item.title} {item.release_date.slice(0, 4)}</Title>
                    <Text>User Score: {Math.round(item.vote_average * 10)}%</Text>
                    <Text>{item.overview}</Text>
                </div>
            </Wrapper>
    );
};

export default ItemMovie;