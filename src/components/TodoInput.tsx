import * as React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/todos';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTodo }, dispatch);
};

type TodoInputProps = ReturnType<typeof mapDispatchToProps> & {
    color?: string;
};

interface TodoInputState {
    value: string;
}

class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
    public state: TodoInputState = {
        value: ''
    };
    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    style={{
                        color: this.props.color
                    }}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
    private handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
        console.log(e.target.value);
    };
    private handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.value);
    };
}

export default connect(
    null,
    mapDispatchToProps
)(TodoInput);
