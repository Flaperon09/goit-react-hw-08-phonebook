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

export const UserMenuWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const UserBar = styled.div`
    display: flex;
    align-items: center;
`;

export const UserEmail = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-right: 15px;
`;

export const Button = styled.button`
    padding: 5px 10px 5px 10px;
    background-color: #128ccc;
        &:hover {
            background-color: #107cb4;
        };
        &:active {
            background-color: white;
        }
    border: 1px solid #107cb4;
    border-radius: 4px;
    color: white;
        &:active {
            color: #107cb4;
        }
`;