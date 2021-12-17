import React from "react";

const Button = ({ isDisabled, version, type, children }) => {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: "button",
    version: "primary",
    isDisabled: false,
};

export default Button;
