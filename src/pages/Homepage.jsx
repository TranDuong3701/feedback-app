import React from "react";
import FeedbackList from "../components/FeedbackList";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";

const Homepage = () => {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  );
};

export default Homepage;
