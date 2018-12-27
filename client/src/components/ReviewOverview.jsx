import React from 'react';

const ReviewOverview = (props) => {

    // ratingAggregate(array, category) {
    //     let sum = () => {
    //         array.reduce((sum, element) => {
    //             sum + element.review.ratings[category]
    //         }, 0);
    //     }
    //     return sum()/array.length;
    // }

    const overall = props.reviews.reduce((sum, element) => {
        sum = sum + element.review.ratings.overall;
        return sum;
    }, 0);

    const food = props.reviews.reduce((sum, element) => {
        sum = sum + element.review.ratings.food;
        return sum;
    }, 0);

    const service = props.reviews.reduce((sum, element) => {
        sum = sum + element.review.ratings.service;
        return sum;
    }, 0);

    const ambience = props.reviews.reduce((sum, element) => {
        sum = sum + element.review.ratings.ambience;
        return sum;
    }, 0);

    const value = props.reviews.reduce((sum, element) => {
        sum = sum + element.review.ratings.value;
        return sum;
    }, 0);

    return (
        <div className="reviewOverview">
            <h2>What {props.reviews.length} People are Saying</h2>
            Overall ratings and reviews<br />
            Reviews can only be made by diners who have eaten at this restaurant.<br />
            {(overall / props.reviews.length).toFixed(1)}<br />
            {(food / props.reviews.length).toFixed(1)}<br />
            {(service / props.reviews.length).toFixed(1)}<br />
            {(ambience / props.reviews.length).toFixed(1)}<br />
            {(value / props.reviews.length).toFixed(1)}<br />
        </div>
    )
}

export default ReviewOverview;
