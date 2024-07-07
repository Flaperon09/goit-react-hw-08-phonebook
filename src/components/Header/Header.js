import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation, MainWrapper } from "./Header.styled"
import { Loader } from "components/Loader";
import UserMenu from "../../components/UserMenu/UserMenu";

export default function Header() {

    return (
        <header>
            <Navigation>
                <UserMenu />
            </Navigation>
            <MainWrapper>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </MainWrapper>
        </header>
    )
};