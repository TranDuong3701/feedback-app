import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [feedbackEdit, setFeedbackEdit] = useState({
        feedback: {},
        edit: false,
    });

    

    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await fetch(
                `${process.env.REACT_APP_BASE_URL}/api/v1/feedbacks/${id}`,
                {
                    method: "DELETE",
                }
            );
            const data = feedbacks.filter((fb) => fb._id !== id);
            setFeedbacks(data);
        }
    };

    const addFeedback = async (feedback) => {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/api/v1/feedbacks`,
            {
                headers: {
                    "Content-Type": "Application/json",
                },
                method: "POST",
                body: JSON.stringify(feedback),
            }
        );
        const data = await response.json();

        setFeedbacks([data, ...feedbacks]);
    };

    const updateFeedback = async (id, feedback) => {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/api/v1/feedbacks/${id}`,
            {
                headers: {
                    "Content-Type": "Application/json",
                },
                method: "PUT",
                body: JSON.stringify(feedback),
            }
        );

        const data = await response.json();
        setFeedbacks(
            feedbacks.map((fb) => fb._id === id ? { ...fb, ...data } : fb)
        );
    };

    const fetchFeedbacks = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/api/v1/feedbacks`
        );
        const data = await response.json();
        setFeedbacks(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const editFeedback = (feedback, edit) => {
        setFeedbackEdit({
            feedback,
            edit,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks,
                deleteFeedback,
                addFeedback,
                updateFeedback,
                editFeedback,
                feedbackEdit,
                isLoading,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
