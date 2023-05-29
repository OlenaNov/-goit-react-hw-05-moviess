import { Genre, Genres, Poster, Title, Text, Wrapper, LinkBack, Box, BasicInfo, AdditionalInfo, List, Item, StyledNavLink } from "./Movie.styled";
import defaultImage from '../../images/default-movie-poster.jpg';

const Movie = ({ item, link }) => {

    return (
            <Wrapper>
                <BasicInfo>
                <Box>
                {item.poster_path 
                ? (<Poster 
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                    alt={`Poster ${item.title}`} />)
                : (<Poster 
                src={defaultImage} 
                alt={`Poster ${item.title}`} />)
                }
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
                </BasicInfo>
                <AdditionalInfo>
                    <List>
                        <Item>
                            <StyledNavLink to='cast'>Cast</StyledNavLink>
                        </Item>
                        <Item>
                            <StyledNavLink to='reviews'>Reviews</StyledNavLink>
                        </Item>
                    </List>
                </AdditionalInfo>
            </Wrapper>
    );
};

export default Movie;