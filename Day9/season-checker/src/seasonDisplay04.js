import React from 'react';
import './SeasonDisplay.css';

// Object


if (eslink
    )

const SeasonDisplay = (props) => {

}


const getSeason = (lat, month) => {
    if (month > 3 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat > 0 ? 'winter': 'summer';
        // 정리를 하나.
    };
};

const SeasonDisplay = (props) => {
    const month = new Date().getMonth();
    const season = getSeason(props);
    // const icon = season ===  
    const { text, iconName } = seasonConfig[season];    

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon ${iconName} huge`} />
            <div>
                {season} : {text}
            </div>
            <i className={`icon ${iconName} huge`} />
        </div>
    );
};

// condition logic
// 조건문 1 (true)A : (false)B > A or B로 출력한다.

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, );
    return (
        <div>
            위도 : {props.lat}
        </div>
    );
};

export default SeasonDisplay;