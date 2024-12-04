import React from "react";
import PropTypes from "prop-types";

const SimpleCounter = ({
    digitSix,
    digitFive,
    digitFour,
    digitThree,
    digitTwo,
    digitOne,
}) => {
    return (
        <div className="counter">
            <div className="icon">
                <i className="fa fa-clock"></i>
            </div>
            <div className="digit">{digitSix}</div>
            <div className="digit">{digitFive}</div>
            <div className="digit">{digitFour}</div>
            <div className="digit">{digitThree}</div>
            <div className="digit">{digitTwo}</div>
            <div className="digit">{digitOne}</div>
        </div>
    );
};

SimpleCounter.propTypes = {
    digitSix: PropTypes.number.isRequired,
    digitFive: PropTypes.number.isRequired,
    digitFour: PropTypes.number.isRequired,
    digitThree: PropTypes.number.isRequired,
    digitTwo: PropTypes.number.isRequired,
    digitOne: PropTypes.number.isRequired,
};

export default SimpleCounter;