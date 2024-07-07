import { StyledLink, UserBar, UserEmail, UserMenuWrapper } from "./UserMenu.styled";
import { useAuth } from "../../hooks";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "../../redux/auth/operationsAuth";
import { selectUser } from '../../redux/auth/selectors.js';

export default function UserMenu() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useAuth();
    const user = useSelector(selectUser);

    return (
        <UserMenuWrapper>
            {isLoggedIn
                ?
                <div>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/contacts">Contacts</StyledLink>
                </div>
                :
                <div><StyledLink to="/">Home</StyledLink></div>
            }

            {isLoggedIn
                ? 
                <UserBar>
                    <UserEmail>{user.email}</UserEmail>
                    <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
                </UserBar>
                :
                <div>
                    <StyledLink to="/register">Register</StyledLink>
                    <StyledLink to="/login">Login</StyledLink>
                </div>
            }
        </UserMenuWrapper>
    )
};