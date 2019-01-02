import styled from 'styled-components';

export const PaginationRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    padding-top:1rem;
    height:2rem;
`;

export const PaginationButton = styled.button`
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 0px;
    outline: none;
    display:inline-flex;
    justify-content:space-around;
    align-items:center;
    margin-left:0.5rem;
    margin-right:0.5rem;
    height:2rem;
    min-width:2rem;
    border-radius:5000px;
    border:solid 1px #d8d9db;

    :span {
        padding-left:0.5rem;
        padding-right:0.5rem;
    }

    :hover {
        border:solid 2px #da3743;
    }
`;
