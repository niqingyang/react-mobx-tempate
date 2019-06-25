import {namespace, loading} from 'mobx-react-stores';
import {action, observable} from 'mobx';

@namespace
class Todos {

    @observable
    list = []

    findOne = (id) => {
        return this.list.find((todo) => todo.id === id);
    }

    @action
    add = async (text) => {
        this.list.push({
            id: this.list.reduce((id, todo) => {
                return Math.max(id, todo.id)
            }, 0) + 1,
            text,
            completed: false
        });
    }

    @action
    delete = async (id) => {
        this.list = this.list.filter((todo) => todo.id !== id);
    }

    @action
    edit = async (id, text) => {
        const todo = this.findOne(id);
        todo.text = text;
    }

    @action
    complete = async (id) => {
        const todo = this.findOne(id);
        todo.completed = !todo.completed;
    }

    @action
    completeAll = async () => {
        this.list.forEach(todo => {
            todo.completed = true;
        });
    }

    @action
    clearCompleted = async () => {
        this.list = this.list.filter(todo => {
            return !todo.completed;
        });
    }
}

export default new Todos();