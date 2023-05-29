import { LinkStyled, Wrapper, PreviewImg, Details, SvgAdult, Title, Date } from "./Item.styled";
import defaultImage from '../../images/default-movie-preview.jpg';

const Item  = ({ location, item, path }) => {

    const url = path ? `${path}${item.id}` : `${item.id}`;

    return (
        <LinkStyled 
            to={`${url}`} 
            state={{ from: location}}
        >
            <Wrapper>
                {item.poster_path 
                ? (<PreviewImg 
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                    alt={`Poster ${item.title}`} />)
                : (<PreviewImg 
                    src={defaultImage} 
                    alt={`Poster ${item.title}`} />)
                }
                {item.adult && <SvgAdult />}
                <Details>
                    <Title>{item.original_title}</Title>
                    <Date>{item.release_date.slice(0, 4)}</Date>
                </Details>
            </Wrapper>
        </LinkStyled>
    )
};

export default Item;