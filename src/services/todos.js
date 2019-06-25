import axios from 'axios';

export async function fetchList() {
    return axios.get('/api/todos');
}

export async function add(text) {
    return axios.post('/api/todos', {text});
}

export async function edit(id, text) {
    return axios.post(`/api/todos/${id}`, {text});
}

export async function del(id) {
    return axios.delete(`/api/todos/${id}`);
}

export async function complete(id) {
    return axios.post(`/api/todos/complete/${id}`);
}

export async function completeAll() {
    return axios.post('/api/todos/complete-all');
}

export async function clearCompleted() {
    return axios.delete('/api/todos/completed');
}