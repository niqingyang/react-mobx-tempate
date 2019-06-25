import React from 'react';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import Footer from './Footer';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from './TodoFilters';

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
}

@observer
class MainSection extends React.Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    state = {
        filter: SHOW_ALL
    }

    handleClearCompleted = () => {
        this.props.actions.clearCompleted();
    }

    handleShow = filter => {
        this.setState({filter});
    }

    renderToggleAll(completedCount) {
        const {todos, actions} = this.props;

        if (todos.length > 0) {
            return (
                <span key="toggle-all">
                    <input
                        className="toggle-all"
                        type="checkbox"
                        checked={completedCount === todos.length}
                    />
                    <label onClick={actions.completeAll}/>
                </span>
            )
        }
        return null;
    }

    renderFooter(completedCount) {
        const {todos} = this.props;
        const {filter} = this.state;
        const activeCount = todos.length - completedCount;

        if (todos.length) {
            return (
                <Footer
                    completedCount={completedCount}
                    activeCount={activeCount}
                    filter={filter}
                    onClearCompleted={this.handleClearCompleted}
                    onShow={this.handleShow}
                />
            )
        }
        return null;
    }

    render() {
        const {todos, actions} = this.props;
        const {filter} = this.state;

        const filteredTodos = todos.filter(TODO_FILTERS[filter])
        const completedCount = todos.reduce((count, todo) =>
            todo.completed ? count + 1 : count, 0
        )

        return (
            <section className="main">
                {this.renderToggleAll(completedCount)}
                <ul key="todo-list" className="todo-list">
                    {filteredTodos.map(todo => {
                        return (
                            <TodoItem key={todo.id} todo={todo} {...actions}/>
                        )
                    })}
                </ul>
                {this.renderFooter(completedCount)}
            </section>
        )
    }
}

export default MainSection;