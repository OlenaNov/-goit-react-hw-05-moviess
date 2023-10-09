import { Box, Logo, StyledLink, Wrapper } from "./Header.styled";

const Header = () => {
    
    return (
        <Wrapper>
            <Box>
                <nav>
                    <StyledLink to='/'>
                        <Logo />
                        Home
                        </StyledLink>
                    <StyledLink to='/movies'>Movies</StyledLink>
                </nav>
            </Box>
        </Wrapper>
    );
};

export default Header;