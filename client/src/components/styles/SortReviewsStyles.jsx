import styled from 'styled-components';

export const SortLabel = styled.div`
    font-size:1rem;
    line-height:1.5;
    font-weight:bold;
    display:flex;
`;

export const SortSelector = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 0px;
    outline: none;
    width:18rem;
    margin:0.5rem 0;
    padding:0;
    font-size:0.875rem;
    border:1px solid #d8d9db;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:6px 0.25rem;

    :hover {
        border:2px solid #da3743
    }
`;
