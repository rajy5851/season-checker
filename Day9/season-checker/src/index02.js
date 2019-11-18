import React from 'react';
import ReactDOM from 'react-dom';

// render 내부에 있는 조건문을 다른 함수로 분리하는 실습
conditionalRender() {

};

render() {
    // conditionalRender를 호출, 리턴하는 형태로 refactoring
    if (this.state.lat && !this.)
}

// js 파일로 분리해보는 실습을 한다.
const SeasonDisplay = (props) => {
    return (
        // conditionalRender를 호출, 리턴하는 형태로 refactoring
        <div>위도 : {props.lat}</div>
    );
};

class App extends React.Component {
    // constructor에서 하는 일이 state 설정 뿐일 때, 생략 가능
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMont() {
        console.log('컴포넌트가 화면에 렌더링이 끝났다.');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message})
        );
    };

    componentDidUpdate() {
        console.log('컴포넌트가 업데이트가 되고, 리렌더링이 끝났다.');
    };

    // render내부에 있는 조건문을 다른 함수로 분리하는 실습
    conditionalRender() {
        if (this.state.lat && !this.state.errorMessage) {
            return {

            }
        }
    };

    render() {
        // 조건부 렌더링

        // 허용
        if (this.state.lat && !this.state.errorMessage) {
            return (
                <div>위도 : {this.state.lat}</div>
            );
        };

        // 거절
        if (!this.state.lat && this.state.errorMessage) {
            return (
                <div>
                    {this.state.errorMessage} <br />
                    사용자 위치 정보가 필요합니다.
                </div>
            );
        };

        // 허용, 거절 대기 상태
        return (<div>사용자 위치 정보 동의해주세요.</div>);
    };
};

return (
    <div>
        <Spinner />
    </div>
);

render () {
return () {
    <div>
        
    </div>
};
};


ReactDOM.render(<App />, document.querySelector('#root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// life cycle method

// constructor() {단 1번만 실행되면 좋은 코드들}
// render() {return JSX template}
// componentDidMont() {컴포넌트가 화면에 렌더링이 끝나면}
// componentDidUpdate() {컴포넌트가 업데이트가 되고, 리렌더링이 끝나면}
// ... etc