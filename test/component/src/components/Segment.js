import React from 'react';

export default function Segment(props) {
    
    const [header, button] = props.children;
    return (
        <div className="ui placeholder segment">
            {header}
            {button}
        </div>
    );
};

// <>
// </>
// 괄호로 묶어주어야 한다.
// const [] = props.

// 내보내는 형성자
