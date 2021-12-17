import React, { useState, useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isEditMode, setIsEditMode] = useState(true);

    const { addFeedback } = useContext(FeedbackContext);

    const handleTextChange = (e) => {
        if (!text) {
            setMessage(null);
            setIsDisabled(false);
        } else if (text && text.trim().length <= 15) {
            setMessage("Text must be at least 10 characters");
            setIsDisabled(true);
        } else {
            setMessage(null);
            setIsDisabled(false);
        }

        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addFeedback({ text, rating });
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Write a review"
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button type="submit" isDisabled={isDisabled}>
                        Send
                    </Button>
                </div>

                {message && <small className="message">{message}</small>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
