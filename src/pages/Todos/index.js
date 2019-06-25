import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import classnames from 'classnames';
import Header from './Header';
import MainSection from './MainSection';
import './index.css';

@inject(({stores: {dispatch, todos}}) => ({
    dispatch,
    todos,
    actions: {
        addTodo: todos.add,
        deleteTodo: todos.delete,
        editTodo: todos.edit,
        completeTodo: todos.complete,
        completeAll: todos.completeAll,
        clearCompleted: todos.clearCompleted,
    }
}))
@observer
class App extends React.Component {

    propTypes = {
        // todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'todos/fetchList'
        })
    }

    render() {
        const {todos, actions} = this.props;
        return (
            <section className="todoapp">
                <Header addTodo={actions.addTodo}/>
                <MainSection todos={todos.list} actions={actions}/>
            </section>
        )
    }
}

export default App;
