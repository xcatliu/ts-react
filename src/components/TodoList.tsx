import * as React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { RootState } from '../index';

const mapStateToProps = (state: RootState) => {
    return {
        todos: state.todos
    };
};

type TodoListProps = ReturnType<typeof mapStateToProps>;

class TodoList extends React.Component<TodoListProps> {
    public render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => (
                    <TodoItem key={index} index={index} content={todo} />
                ))}
            </ul>
        );
    }
}

export default connect(mapStateToProps)(TodoList);
