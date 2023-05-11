import SyncLoader from "react-spinners/SyncLoader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Main, StyledLink } from "./Layout.styled";

const Layout = () => {
    return (
        <>
        <Header>
            <nav>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/movies'>Movies</StyledLink>
            </nav>
            </Header>
            <Main>
                <Suspense fallback={<SyncLoader color="#eb1736" />}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    )
};

export default Layout;