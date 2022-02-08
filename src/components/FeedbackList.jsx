import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
  const { feedbacks, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedbacks.map((feedback) => {
        return <FeedbackItem  key={feedback._id} feedback={feedback} />;
      })}
    </div>
  );
};

export default FeedbackList;
