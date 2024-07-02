import { Link } from "react-router-dom";
import { ButtonGoBack } from "./NotFound.styled";

export default function NotFound() {
    return (
        <div>
            <Link to='/'>
                <ButtonGoBack type="button">Go back</ButtonGoBack>
            </Link>
            <h2>This page does not exist! Try again!</h2>
        </div>
    )
};