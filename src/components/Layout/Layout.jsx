import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Main } from "./Layout.styled";
import Header from "components/Header/Header";

const Layout = () => {
    return (
        <>
        <Header />
            <Main>
                <Suspense fallback={<SyncLoader color="rgb(204, 0, 0, .7)" />}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    )
};

export default Layout;