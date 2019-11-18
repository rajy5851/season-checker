import React from 'react';

const CommentDetail = (props) => {
    return (
        <div>
            <a href="a" className="avatar" target="_blank">
                <img src={props.avatar} alt="avatar"/>
            </a>
            <div className="content">
                <a href="!#" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
            </div>
        </div>
    );
};

export default CommentDetail

// a.avatar를 하고 tap을 하면 자동완성이 된다.

// a태그 author클래스네임