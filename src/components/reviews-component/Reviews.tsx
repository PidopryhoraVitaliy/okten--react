import './Reviews.css';
import type {FC} from "react";
import type {ReviewModel} from "../../models/ProductModel.ts";
import {Review} from "../review-component/Review.tsx";

type PropType = { reviews: ReviewModel[] };
export const Reviews: FC<PropType> = ({reviews}) => {
    return (
        <>
            {reviews.map((review, index) => <Review key={index} review={review} />)}
        </>
    );
};