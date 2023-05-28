import { LinkStyled, Wrapper, PreviewImg, Details, SvgAdult, Title, Date } from "./Item.styled";

const Item  = ({ location, item }) => {

    return (
        <LinkStyled 
            to={`movies/${item.id}`} 
            state={{ from: location}}
        >
            <Wrapper>
                <PreviewImg 
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                    alt={`Poster ${item.title}`} />
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