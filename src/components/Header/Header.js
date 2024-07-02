import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { StyledLink, Navigation, MainWrapper } from "./Header.styled"
import { Loader } from "components/Loader";

export default function Header () {
    return (
        <header>
            <Navigation>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/register">Register</StyledLink>
                <StyledLink to="/login">Login</StyledLink>
            </Navigation>
            <MainWrapper>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </MainWrapper>
        </header>
    )
};