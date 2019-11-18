import './SeasonDisplay.css';
import React from 'react';

// object
const seasonConfig = {
    summer: {
        text: '더위 조심하세요~',
        iconName: 'sun,'
    },
    winter: {
        text: '따뜻하게 입으세요!',
        iconName: 'snowflake',
    }
};

const getSeason = (lat, month) => {
    if (month > 3 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat > 0 ? 'winter': 'snowflake'
    }
};

const getSeason