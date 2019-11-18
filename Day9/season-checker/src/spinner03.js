import React from 'react';

// text-> message > props로 받아서 동적으로 바꿀 수 있도록 수정
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text  
            loader">위치 정보 확인 중...
            {props.message}
            </div>
        </div>
    );
};

// default
Spinner.defaultProps = {
    message: '사용자 위치 정보를 확인 중입니다...'
}

export default Spinner;