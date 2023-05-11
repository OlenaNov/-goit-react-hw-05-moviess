import { useLocation } from "react-router-dom";
import { List, Item, LinkStyled } from "./ListSearchFilms.styled";

const ListSearchFilms = ({ items }) => {
    const location = useLocation();

    return (
        <List>
        {items.map(item => (
            <Item key={item.id}>
                <LinkStyled 
                    to={`${item.id}`} 
                    state={{ from: location}}
                    >
                    {item.title}
                </LinkStyled>
            </Item>
        ))}
        </List> 
    )
};

export default ListSearchFilms;