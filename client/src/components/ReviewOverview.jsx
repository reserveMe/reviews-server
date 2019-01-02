import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import * as Styled from './styles/ReviewOverviewStyles.jsx';

const ReviewOverview = (props) => {
  const { reviews } = props;
  const overall = reviews.reduce((sum, element) => {
    sum += element.review.ratings.overall;
    return sum;
  }, 0);

  const food = reviews.reduce((sum, element) => {
    sum += element.review.ratings.food;
    return sum;
  }, 0);

  const service = reviews.reduce((sum, element) => {
    sum += element.review.ratings.service;
    return sum;
  }, 0);

  const ambience = reviews.reduce((sum, element) => {
    sum += element.review.ratings.ambience;
    return sum;
  }, 0);

  const value = reviews.reduce((sum, element) => {
    sum += element.review.ratings.value;
    return sum;
  }, 0);

  const noiseLevels = [];

  const findNoise = reviews.filter(element => element.review.ratings.noise_level !== 'do not recall')
    .map(element => noiseLevels.push(element.review.ratings.noise_level));

  const findNoiseFreq = _.reduce(noiseLevels, (cache, count) => {
    cache.freq[count] = (cache.freq[count] || 0) + 1;
    if (!cache.freq[cache.highest] || cache.freq[count] > cache.freq[cache.highest]) {
      cache.highest = count;
    }
    return cache;
  }, { freq: {}, highest: '' });

  const recs = reviews.filter(element => element.review.recommend_to_friend === true);

  return (
    <Styled.ReviewsTotal>
      <Styled.ReviewsAddendum>
        Reviews can only be made by diners who have eaten at this restaurant.
      </Styled.ReviewsAddendum>
      <Styled.StarOverviewSection>
        <Styled.StarOverviewRatingContainer>
          <Styled.StarOverviewRatingItemBack>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </Styled.StarOverviewRatingItemBack>
          <Styled.StarOverviewRatingItemFront starWidth={((overall / reviews.length).toFixed(1)) * 20}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </Styled.StarOverviewRatingItemFront>
        </Styled.StarOverviewRatingContainer>
        <Styled.StarOverviewRatingDesc>
          {(overall / reviews.length).toFixed(1)}
          {' '}
          based on recent ratings
        </Styled.StarOverviewRatingDesc>
      </Styled.StarOverviewSection>
      <Styled.RatingsBreakdownTable>
        <Styled.RatingsBreakdownItem>
          <Styled.RatingsBreakdownItemScore>
            {(food / reviews.length).toFixed(1)}
          </Styled.RatingsBreakdownItemScore>
          <Styled.RatingsBreakdownItemDesc>
            Food
          </Styled.RatingsBreakdownItemDesc>
        </Styled.RatingsBreakdownItem>
        <Styled.RatingsBreakdownItem>
          <Styled.RatingsBreakdownItemScore>
            {(service / reviews.length).toFixed(1)}
          </Styled.RatingsBreakdownItemScore>
          <Styled.RatingsBreakdownItemDesc>
            Service
          </Styled.RatingsBreakdownItemDesc>
        </Styled.RatingsBreakdownItem>
        <Styled.RatingsBreakdownItem>
          <Styled.RatingsBreakdownItemScore>
            {(ambience / reviews.length).toFixed(1)}
          </Styled.RatingsBreakdownItemScore>
          <Styled.RatingsBreakdownItemDesc>
            Ambience
          </Styled.RatingsBreakdownItemDesc>
        </Styled.RatingsBreakdownItem>
        <Styled.RatingsBreakdownItem>
          <Styled.RatingsBreakdownItemScore>
            {(value / reviews.length).toFixed(1)}
          </Styled.RatingsBreakdownItemScore>
          <Styled.RatingsBreakdownItemDesc>
            Value
          </Styled.RatingsBreakdownItemDesc>
        </Styled.RatingsBreakdownItem>
      </Styled.RatingsBreakdownTable>
      <Styled.AdditionalOverviewSection>
        <Styled.AdditionalOverviewItems>
          <Styled.AdditionalOverviewItemsLabel>
            Noise ·
            {' '}
            <Styled.AdditionalOverviewItemsDesc>
              {findNoiseFreq.highest.slice(0, 1).toUpperCase() + findNoiseFreq.highest.slice(1)}
            </Styled.AdditionalOverviewItemsDesc>
          </Styled.AdditionalOverviewItemsLabel>
        </Styled.AdditionalOverviewItems>
        <Styled.AdditionalOverviewItems>
          <Styled.AdditionalOverviewItemsLabel>
            {((recs.length * 100) / reviews.length).toFixed(0)}
            % of people
            {' '}
            <Styled.AdditionalOverviewItemsDesc>
              would recommend it to a friend
            </Styled.AdditionalOverviewItemsDesc>
          </Styled.AdditionalOverviewItemsLabel>
        </Styled.AdditionalOverviewItems>
      </Styled.AdditionalOverviewSection>
    </Styled.ReviewsTotal>
  );
};

ReviewOverview.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewOverview;
