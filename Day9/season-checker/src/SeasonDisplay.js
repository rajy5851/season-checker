import './SeasonDisplay.css';
import React from 'react';

// object
const seasonConfig = {
    summer: {
        text: '더위를 조심하세요. ^^',
        iconName: 'sun',
    },

    winter: {
        text: '따뜻하게 입으세요. ^^',
        iconName: 'snowflake',
    }
};

const getSeason = (lat, month) => {
    if (month > 3 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat > 0 ? 'winter': 'summer';
    };
};

const SeasonDisplay = (props) => {
    const month = new Date().getMonth();
    const season = getSeason(props.lat, month);
    const { text, iconName } = seasonConfig[season];

    return (
        <div className = {`season-display ${season}`}>
            <i className = {`icon ${iconName} huge`} />
            <div>
                {season} : {text}
            </div>
            <i className = {`icon ${iconName} huge`} />
        </div>
    );
};

export default SeasonDisplay;