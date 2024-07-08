import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Form = styled.form`
    width: 320px;
    padding: 16px;
    border: 1px solid grey;
    border-radius: 8px;
    background-color: white;

    -webkit-box-shadow: 0px 6px 7px 1px rgba(34, 60, 80, 0.4);
    -moz-box-shadow: 0px 6px 7px 1px rgba(34, 60, 80, 0.4);
    box-shadow: 0px 6px 7px 1px rgba(34, 60, 80, 0.4);
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const TitleLabel = styled.p`
    margin-bottom: 5px;
    font-weight: 500;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
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

export const Input = styled.input`
    outline: none;
    border: 1px solid grey;
    border-radius: 4px;
    background-color: #E7F2FF;
        &:hover {
            background-color: #b9ddf0;
        };
        &:focus {
            background-color: white;
        };

`;