import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import Segment from './components/Segment';
import Message from './components/Message';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

// <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/visibility.min.js" integrity="sha256-Th3QlAMxD5M2RJ9nNOvuxJZCgZIlavx5+51jABKTs2A=" crossorigin="anonymous"></script>
// index.html으로 파일을 만든다.

// . 현재 디렉토리

class App extends React.Component {
    // constructor
    // babel
    state = {
        comment: [],
        number: 0,
        infomation: faker.lorem.paragraph()
        // 스트링 처리
        // 값이 default로 들어가게 된다.
    };

handleAddComment = () => {
    const newComment = {
        author: faker.name.firstName(),
        time: faker.database.recent().toLocalString(),
        body: faker.lorem.sentence(),
        avatar: faker.image.avatar()
    };
    this.setState({ comments: [newComment,
    ...this.state.comment]});
};

handlePlus = () => {
    this.setState({number: this.state.number + 1});
};

handleMinus = () => {
    this.setState({number: this.state.number - 1});
};

// handleReset
handleRest = () => {
    // const number = this.setState
    this.setState({number : 0});
};

// setState render를 진행해준다.

    render() {
        return(
            <>
                <span>{this.state.number}</span>
                <button onClick={this.handlePlus}>
                    Plus
                </button>

                <Segment>
                    <div className="ui icon header">
                        <i className="pdf file outline icon">
                            No document
                        </i>
                    </div>
                    <div className="ui primary button">Add document</div>
                </Segment>

                <Segment>
                    <h4 className="ui header">For your infomation</h4>
                    <p>{this.state.infomation}</p>
                </Segment>

                <Message header="회원 약관 변경" body="약관이 변경되었습니다." />

                <div className="ui container comments">
                    <button className="ui primary button" onClick=
                    {this.handleAddComment}> 댓글 작성 </button>
                    <ApprovalCard>
                        <h4>저는 바로 퇴근하겠습니다. 일이 있습니다.</h4>
                    </ApprovalCard>
                    {this.state.comments.map((comment, i) => {
                        // index -> i
                      return (
                        <ApprovalCard key={i}>
                            <CommentDetail {...comment} />
                        </ApprovalCard>
                      );
                    })}
                </div>
            </>
        );
    };
};

ReactDOM.render(<App />, 
    document.querySelector("#root"));
// 페이지를 render한다.