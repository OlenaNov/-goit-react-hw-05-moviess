import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Header, Logo, Main, StyledLink, Box } from "./Layout.styled";

const Layout = () => {
    return (
        <>
        <Header>
            <Box>
                <Link to='/'>
                    <Logo />
                </Link>
                <nav>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/movies'>Movies</StyledLink>
                </nav>
            </Box>

            </Header>
            <Main>
                <Suspense fallback={<SyncLoader color="rgb(204, 0, 0, .7)" />}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    )
};

export default Layout;