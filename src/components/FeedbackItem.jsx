import React, { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ feedback }) => {
    const { deleteFeedback } = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button
                onClick={() => deleteFeedback(feedback.id)}
                className="close"
            >
                <FaTimes color="purple" />
            </button>
            <button className="edit">
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    );
};

export default FeedbackItem;
