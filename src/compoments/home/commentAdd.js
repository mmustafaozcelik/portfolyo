import React from "react";
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'YORUM' : 'YORUM'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} /> 

    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Yorum Yap
      </Button>
    </Form.Item>
  </>
);

class AppCommentAdd extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };
  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: 'Ziyaretçi',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: 
            
            <p>
                {this.state.value}  
                  <Button type="primary" danger onClick={this.deleteRow}>
                    sil
                  </Button>
               
            </p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { comments, submitting, value } = this.state;
    
    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Ziyaretçi" />}
          
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}            
              value={value}
            />
          }
        />
      </>
    );
  }
}
export default AppCommentAdd;