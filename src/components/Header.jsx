import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, bgColor, titleColor }) => {
    const style = {
        background: bgColor,
        color: titleColor,
    };
    return (
        <header style={style}>
            <div className="container">
                <h2>{title}</h2>
            </div>
        </header>
    );
};

Header.defaultProps = {
    title: "Duo Feedback",
    bgColor: "rgba(0,0,0,0.4)",
    titleColor: "#ff6a95",
};

Header.prototype = {
    title: PropTypes.string,
    bgColor: PropTypes.string,
    titleColor: PropTypes.string,
};
export default Header;
