import React from 'react';
import ReactDOM from 'react-dom';

// 함수형 컴포넌트
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => { console.log(position) },
//         (error) => { console.log(error) }
//     );

//     return (
//         <div>
//             계절 확인
//         </div>
//     );
// };

// 위도를 넘겨준다.

// SeasonDisplay를 사용하여 위도 출력
const SeasonDisplay = (props) => {
    return (
        // JSX template이 반환되어져야 한다.
    );
};

class App extends React.Component {

    // constructor에서 하는 일이 state 설정뿐일 때, 생략이 가능하다.
    // constructor(props) {
    // super()
    // };

    constructor(props) {
        super(props); // super에서 props로 받는다.

        // state는 컴포넌트 안에서만 사용 가능
        // Object 형태
        // 컴포넌트가 생성될 때, 단 1번만 사용이 된다.
        // setState로만 데이터가 수정이 가능하다.
        // props와 다르다.

        // 구분을 해서 사용한다.
        this.state = {
            lat : null,  // latitude, object를 나타내주어야 한다.
            errorMessage: ''
        };
    };

// setState() 함수를 통해서 정리를 한다.

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude})
            (error) => this.setState({lat: position.coords.latitude})
            // (position) => { console.log(position) 
                // this.state.lat = this.setState({lat: position.coords.latitude});
            };
            
            // 조건부 렌더링

            // 허용
            if (this.state.lat && !this.state.errorMessage) {
                return(
                    this.state.lat && !this.state.errorMessage) {
                    <div>
                        
                    </div>
                    <div>
                        {this.state.errorMessage}
                        사용자의 위치 정보가 필요합니다.
                    </div>
                };
            }

            // 거절
            if (!this.state.lat && this.state.) {
                return
            }

            // 허용/ 거절 대기 상태
            if (!this.state.lat && this.state.errorMessage) {
                return (
                    <div> 
                        {this.state.errorMessage} <br />
                        사용자 위치 정보가 필요합니다.    
                    </div>)
        };
            // (error) => console.log(error)
        );
        return (               
            <div>
                위도 :
            </div>,
        );
    }
};

// 클래스형 컴포넌트
// 1. JS class를 사용
// 2. extends React.Component
// 3. render() {return (JSX template)}

class App extends React.Component {
    constructor (props) {
        this.componentDidMount() {
            console.log('컴포넌트가 화면에 렌더링이 끝난다.')
            window.navigator.geolocation.getCurrentPosition(
                (position) => this.setState({lat: position})
                (error) => this.setState({error})
            )
        }
    }
}

// ReactDOM.render(<App />, document.querySelector('#root'));

ReactDOM.render(<App />, 
    document.querySelector('#root'));
    // querySelector 
    // 작동하는 방식이 다르다. 쿼리 종류를 선택할 수 있다.

    // document.queryElementById('root'));

    // life cycle method

    // constructor(단 1번 실행되면 좋은 코드들)
    // render() { return JSX template }
    // componentDidMount() { 컴포넌트가 화면에 렌더링이 끝나면 }
    // componentDidUpdate() { 컴포넌트가 업데이트되고, 리렌더링이 끝나면 }
    // componentWillUnmount() { React }
    // ...