import { useLocation, } from "react-router-dom";
import { List, Title } from "./ListTrendingMovies.styled";
import Item from "components/Item";

const ListTrendingMovies = ({ items }) => {
    const location = useLocation();

    return (
            <>
            <Title>List Trending Movies</Title>
                <List>
                    {items.map(item => (
                        <Item 
                            key={item.id} 
                            location={location}
                            item={item}
                            path='movies/'
                            />
                ))}
                </List> 
            </>
    )
};

export default ListTrendingMovies;