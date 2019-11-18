import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        console.log('컴포넌트가 화면에 렌더링이 끝났다.');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message})
        );
    };

    componentDidUpdate() {
        console.log('컴포넌트가 업데이트가 되고, 리렌더링이 끝났다.');
    };

    conditionalRender() {
        if (this.state.lat && !this.state.errorMessage) {
            return (
                <SeasonDisplay lat={this.state.lat} />
            );
        };

        if (!this.state.lat && this.state.errorMessage) {
            return (
                <div>
                    {this.state.errorMessage} <br />
                    사용자 위치 정보가 필요합니다.
                </div>
            );
        };

        return ( <Spinner /> );
    };

        render() {
            return (
                <div>
                    {this.conditionalRender()}
                </div>
            );
        };
    };


    ReactDOM.render(<App />, document.querySelector('#root'));