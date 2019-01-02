import styled from 'styled-components';

export const FilterTitle = styled.div`
    font-size:1rem;
    line-height:1.5;
    font-weight:bold;
    display:flex;
`;

export const FilterButton = styled.button`
    -webkit-appearance: none;
    -moz-appearance: none;
    outline:none;
    display:inline-flex;
    align-items:center;
    margin-right:1rem;
    margin-bottom:1rem;
    line-height:1.5;
    border:1px solid #d8d9db;
    box-sizing:border-box;
    font-size:.9rem;
    justify-content:space-between;
    padding:6px 0.25rem;

    :hover {
        border:2px solid #da3743
    }
`;
