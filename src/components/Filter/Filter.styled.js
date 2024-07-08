import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`;

export const FilterWrapper = styled.div`
    width: 320px;
    padding: 16px;
    border: 1px solid grey;
    border-radius: 8px;
    background-color: white;

    -webkit-box-shadow: 0px 6px 7px 1px rgba(34, 60, 80, 0.4);
    -moz-box-shadow: 0px 6px 7px 1px rgba(34, 60, 80, 0.4);
    box-shadow: 0px 6px 7px 1px rgba(34, 60, 80, 0.4);
`;

export const FilterTitle = styled.p`
    margin-bottom: 5px;
    font-weight: 500;
`;

export const FilterInput = styled.input`
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