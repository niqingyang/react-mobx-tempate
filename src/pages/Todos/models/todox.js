import {namespace, loading} from 'mobx-react-stores';
import {action, observable} from 'mobx';
import {message} from 'antd';
import {fetchList, add, del, edit, complete, completeAll, clearCompleted} from '@/services/todos';

@namespace
class Todos {

    @observable
    list = []

    findOne = (id) => {
        return this.list.find((todo) => todo.id === id);
    }

    @action
    handleResponse = async (response) => {
        if (response.code === 0) {
            this.list = await fetchList();
        } else {
            message.error(response.message);
        }
    }

    @action
    fetchList = async () => {
        this.list = await fetchList();
        return this.list;
    }

    @action
    add = async (text) => {
        const response = await add(text);
        this.handleResponse(response);
    }

    @action
    delete = async (id) => {
        const response = await del(id);
        this.handleResponse(response);
    }

    @action
    edit = async (id, text) => {
        const response = await edit(id, text);
        this.handleResponse(response);
    }

    @action
    complete = async (id) => {
        const response = await complete(id);
        this.handleResponse(response);
    }

    @action
    completeAll = async () => {
        const response = await completeAll();
        this.handleResponse(response);
    }

    @action
    clearCompleted = async () => {
        const response = await clearCompleted();
        this.handleResponse(response);
    }
}

export default new Todos();