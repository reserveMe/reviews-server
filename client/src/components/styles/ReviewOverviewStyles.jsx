import styled from 'styled-components';

export const ReviewsTotal = styled.div`
    padding-bottom:2rem;
    border-bottom:solid 1px #d8d9db;
`;

export const ReviewsAddendum = styled.div`
    font-size:1rem;
    font-weight:normal;
    padding-top:0.5rem;
`;

export const StarOverviewSection = styled.div`
    padding-top:0.5rem;
    padding-bottom:1rem;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    font-size:0.875rem;
    font-weight:bold;
    line-height:1.43;
    flex-wrap:nowrap;
`;

export const StarOverviewRatingContainer = styled.div`
    display: grid;
    margin-right:0.25rem;
`;

export const StarOverviewRatingItemFront = styled.div`
    color: #da3743;
    overflow:hidden;
    width: ${props => `${props.starWidth}%`};
    grid-column: 1;
    grid-row: 1;
`;

export const StarOverviewRatingItemBack = styled.div`
    color: #d9d9d9;
    grid-column: 1;
    grid-row: 1;
`;

export const StarOverviewRatingDesc = styled.div`
    margin:0 0.5rem 0 0;
    font-size:0.9rem;
    font-weight:bold;
    line-height:1.5;
    display:flex;
    align-items:center;
`;

export const AdditionalOverviewSection = styled.div`
    padding-top:1rem;
    max-width:100%;
`;

export const AdditionalOverviewItems = styled.div`
    display:flex;
    align-items:center;
    font-size:0.9rem;
`;

export const AdditionalOverviewItemsLabel = styled.div`
    font-weight:bold;
    line-height: 1.5;
`;

export const AdditionalOverviewItemsDesc = styled.span`
    font-weight: normal;
`;

export const RatingsBreakdownTable = styled.div`
    margin:0;
    padding:0;
    display:flex;
    justify-content:space-evenly;
`;

export const RatingsBreakdownItem = styled.div`
    justify-content:space-evenly;
    display:flex;
    flex-direction:column;
    list-style:none;
    padding:0 0.5rem;
    position:relative;
    text-align:center;
`;

export const RatingsBreakdownItemScore = styled.div`
    margin:0;
    padding:0;
    font-style:normal;
    font-weight:bold;
    line-height:1.33;
`;

export const RatingsBreakdownItemDesc = styled.div`
    margin:0;
    padding:0;
    font-size:0.875rem;
    font-weight:normal;
    text-transform:capitalize;
    white-space:nowrap;
`;
