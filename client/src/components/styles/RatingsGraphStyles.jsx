import styled from 'styled-components';

export const RatingsGraphSection = styled.div`
    padding-top:0;
    padding-bottom:0;
    margin:0;
    width:16rem;
    width:100%;
`;

export const RatingsGraphSectionInner = styled.div`
    display:flex;
    flex-direction: column;
    padding-bottom:0.5rem;
    align-items:center;
`;

export const RatingsItem = styled.div`
    display:flex;
    flex-direction: row;
    padding-bottom:0.5rem;
    align-items:center;

    :hover {
      span:first-child {
        text-decoration:underline
      }
    }

    :hover {
        .reviewbaritem {
            border:2px solid #da3743
        }
    }
`;

export const RatingsLabel = styled.span`
    display: flex;
    margin-right:0.5rem;
    width:1rem;
    text-align:center;
    text-align:left;
    width:16rem;
    margin-left:0;
    font-weight:bold;
`;

export const RatingsBarGraph = styled.div`
    display: flex;
    text-align:right;
    width: 16rem;
    margin-left:0.5rem;
    color:#6f737b;
    display:block;
    height:1rem;
    border:1px solid #d8d9db;
    box-sizing:border-box;
    overflow:hidden;
`;

export const RatingBar = styled.div`
    background:#da3743;
    height:100%;
    display:block;
    width: ${props => `${props.barWidth}%`};
`;
