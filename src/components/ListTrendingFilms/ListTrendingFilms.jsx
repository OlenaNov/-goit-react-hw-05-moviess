import { useLocation, } from "react-router-dom";
import { List } from "./ListTrendingFilms.styled";
import Item from "components/Item/Item";

const ListTrendingFilms = ({ items }) => {
    const location = useLocation();

    return (
        <List>
        {items.map(item => (
            <Item 
                key={item.id} 
                location={location}
                item={item}
                />
        ))}
        </List> 
    )
};

export default ListTrendingFilms;