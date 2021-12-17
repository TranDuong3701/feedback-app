import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState(null);

    const fetchFeedbacks = async () => {
        const response = await fetch("/feedbacks");
        const data = await response.json();
        setFeedbacks(data);
    };

    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await fetch(`/feedbacks/${id}`, { method: "DELETE" });
            setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
        }
    };

    const addFeedback = async (feedback) => {
        const response = await fetch("/feedbacks", {
            headers: {
                "Content-Type": "Application/json",
            },
            method: "POST",
            body: JSON.stringify(feedback),
        });
        const data = await response.json();

        setFeedbacks([data, ...feedbacks]);
    };

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks,
                deleteFeedback,
                addFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
