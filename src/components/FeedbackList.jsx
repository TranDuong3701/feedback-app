import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
    const { feedbacks } = useContext(FeedbackContext);
    console.log(feedbacks);

    if (!feedbacks) return <p> No feedback yet!</p>;

    return (
        <div className="feedback-list">
            {feedbacks.map((feedback) => {
                return <FeedbackItem key={feedback.id} feedback={feedback} />;
            })}
        </div>
    );
};

export default FeedbackList;
