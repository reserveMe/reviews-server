import styled from 'styled-components';

export const ReviewEntry = styled.div`
    padding-top:1rem;
    padding-bottom:1rem;
    border-bottom:solid 1px #d8d9db;
    display:flex;
    flex-direction:row;
    width:100%;
`;

export const AuthorSection = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-right:1rem;
    margin-left:1rem;
    width:6rem;
    position:relative;
    flex:none;
`;

export const AuthorBubble = styled.div`
    height: 50px;
    width: 50px;
    background-color: #aec6cf;
    border-radius: 50%;
    display: inline-block;
    color: #fff;
    text-align: center;
    display: inline;
    vertical-align: middle; 
    line-height: 50px;
`;

export const AuthorName = styled.div`
    font-size:0.9rem;
    font-weight:bold;
    line-height: 1.5;
    text-align: center;
    margin-top: .5rem;
    margin-bottom: .5rem;
`;

export const AuthorLocation = styled.div`
    font-size:0.8rem;
    font-weight:bold;
    line-height: 1.5;
    text-align: center;
    margin-bottom: .5rem;
    color: #808080;
`;

export const AuthorReviewCount = styled.div`
    font-size:0.6rem;
    font-weight:bold;
    line-height: 1.5;
    text-align: center;
    color: #808080;
`;

export const ReviewDetailsSection = styled.div`
    display:flex;
    flex-direction:column;
`;

export const ReviewRatingHeader = styled.div`
    display:flex;
    align-items: center;
`;

export const ReviewRatingContainer = styled.span`
    display: grid;
`;

export const ReviewRatingItemFront = styled.span`
    color: #da3743;
    width: ${props => `${props.ratingWidth}rem`};
    grid-column: 1;
    grid-row: 1;
    overflow: hidden;
`;

export const ReviewRatingItemBack = styled.span`
    color: #d9d9d9;
    grid-column: 1;
    grid-row: 1;
`;

export const DinedDesc = styled.span`
    font-weight:bold;
    display:flex;
    font-size:0.85rem;
    line-height: 1.5;
    margin-top: .2em;
    margin-left: .2em;
`;

export const ReviewEntryRating = styled.div`
    display:flex;
    font-weight: bold;
    font-size:0.85rem;
    line-height: 1.5;
`;

export const ReviewEntryRatingCategory = styled.span`
    padding-right: .5rem;
`;

export const ReviewEntryRatingQuantity = styled.span`  
    color: #da3743;
`;

export const ReviewEntryMidDot = styled.span`
    padding-right: 1rem;
    padding-left: 1rem;
`;

export const ReviewTextReadClick = styled.div`
    color: #da3743;
`;