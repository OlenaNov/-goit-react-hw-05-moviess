import { Link } from "react-router-dom";
import { Box, Logo, StyledLink, Wrapper } from "./Header.styled";

const Header = () => {

    return (
        <Wrapper>
            <Box>
                <Link to='/'>
                    <Logo />
                </Link>
                <nav>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/movies'>Movies</StyledLink>
                </nav>
            </Box>
        </Wrapper>
    );
};

export default Header;