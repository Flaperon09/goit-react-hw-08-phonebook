import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 600;
    text-decoration: none;

    color: black;
        &.active {
            color: red;
        };

    margin-right: 20px;
`;

export const Navigation = styled.div`
    display: flex;
    background-color: white;
    padding: 20px 20px 20px 40px;

    border-bottom: solid 4px #cecece;
`;

export const MainWrapper = styled.main`
    padding: 20px 40px 40px 40px;
`