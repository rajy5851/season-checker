import React from 'react';
import ReactDOM from 'react-dom';

// 클래스형 컴포넌트
// 1. JS Class를 사용한다.
// 2. extends React.Component
// 3. render() {return (JSX template)}



// const SeasonDisplay = () => {
// };

class App extends React.Component {
    constrctor(props) {
        super(props);

        // state는 컴포넌트 안에서만 사용 가능
        // Object형태
        // 컴포넌트가 생성될 때, 단 한 번만 사용한다.
        // setState로만 데이터를 수정한다.
        // props랑 다르다.

        this.state = {
            lat: null,
            errorMessage: ''
        };
    };

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message})
        );

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
        return (<div>사용자 위치 정보를 동의해주세요. </div>);
    };
};

ReactDOM.render(<App />, document.querySelector("#root"));