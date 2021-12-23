import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [feedbackEdit, setFeedbackEdit] = useState({
        feedback: {},
        edit: false,
    });

    const fetchFeedbacks = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/feedbacks`
        );
        const data = await response.json();
        setFeedbacks(data);
        setIsLoading(false);
    };

    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await fetch(`${process.env.REACT_APP_BASE_URL}/feedbacks/${id}`, {
                method: "DELETE",
            });
            setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
        }
    };

    const addFeedback = async (feedback) => {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/feedbacks`,
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
            `${process.env.REACT_APP_BASE_URL}/feedbacks/${id}`,
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
            feedbacks.map((fb) => (fb.id === id ? { ...fb, ...data } : fb))
        );
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
