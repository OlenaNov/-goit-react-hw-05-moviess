import { useLocation } from "react-router-dom";
import { List, Title } from "./ListSearchMovies.styled";
import Item from "components/Item";

const ListSearchMovies = ({ items }) => {
    const location = useLocation();

    return (
       <>
        <Title>List Movies</Title>
         <List>
            {items.map(item => (
                <Item 
                    key={item.id} 
                    location={location}
                    item={item}
                    />
            ))}
         </List> 
       </> 
    )
};

export default ListSearchMovies;