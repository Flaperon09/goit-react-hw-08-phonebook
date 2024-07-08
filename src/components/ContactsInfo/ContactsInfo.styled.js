import styled from 'styled-components';

export const ContactListItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 5px 0px 5px 0px;
    padding: 6px;
    border: 1px solid grey;
    border-radius: 8px;
    background-color: white;

    -webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.4);
    -moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.4);
    box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.4);
`;

export const ButtonDelete = styled.button`
    margin-left: 20px;
    font-size: 12px;
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