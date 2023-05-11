import { useLocation, } from "react-router-dom";
import { List, Item, LinkStyled } from "./ListTrendingFilms.styled";

const ListTrendingFilms = ({ items }) => {
    const location = useLocation();

    return (
        <List>
        {items.map(item => (
            <Item key={item.id}>
                <LinkStyled 
                    to={`movies/${item.id}`} 
                    state={{ from: location}}
                    >
                    {item.title}
                </LinkStyled>
            </Item>
        ))}
        </List> 
    )
};

export default ListTrendingFilms;