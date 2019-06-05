import * as React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router';
import { RootState } from '../';

const mapStateToProps = (state: RootState) => {
    const matchResult = matchPath<{ id: string }>(state.router.location.pathname, {
        path: '/todo/:id'
    });

    if (!matchResult) {
        return {
            todo: 'matchResult 不存在'
        };
    }

    let id = Number(matchResult.params.id);

    if (isNaN(id)) {
        return {
            todo: `不存在 id 为 ${id} 的项`
        };
    }

    return {
        todo: state.todos[id]
    };
};

type TodoDetailProps = ReturnType<typeof mapStateToProps>;

class TodoDetail extends React.Component<TodoDetailProps> {
    public render() {
        return <div>{this.props.todo}</div>;
    }
}

export default connect(mapStateToProps)(TodoDetail);
