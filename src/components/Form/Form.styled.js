import styled from 'styled-components';

export const FormData = styled.form`
    width: 320px;
    padding: 16px;

    border: 1px solid grey;
    border-radius: 8px;
    background-color: white;
    margin-bottom: 20px;
    margin-right: 0px;

    -webkit-box-shadow: 0px 6px 7px 1px rgba(34, 60, 80, 0.4);
    -moz-box-shadow: 0px 6px 7px 1px rgba(34, 60, 80, 0.4);
    box-shadow: 0px 6px 7px 1px rgba(34, 60, 80, 0.4);

`;

export const FormLabel = styled.label`
    display: block;
`;

export const FormLabelName = styled.p`
    margin-bottom: 5px;
    font-weight: 500;
`;

export const FormInputName = styled.input`
    width: 286px;
    margin-bottom: 16px;

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