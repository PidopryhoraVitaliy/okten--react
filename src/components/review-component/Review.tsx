import './Review.css';
import type {ReviewModel} from "../../models/ProductModel.ts";
import type {FC} from "react";

type PropType = { review: ReviewModel };
export const Review: FC<PropType> = ({review}) => {
    const {rating, comment, date, reviewerName, reviewerEmail} = {...review};
    return (
        <div className={'review-wrap'}>
            <p><strong>name: </strong>{reviewerName}</p>
            <p><strong>email: </strong>{reviewerEmail}</p>
            <p><strong>comment: </strong>{comment}</p>
            <p><strong>date: </strong>{date}</p>
            <p><strong>rating: </strong>{rating}</p>
        </div>
    );
}
