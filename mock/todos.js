import mockjs from 'mockjs';

const model = {
    list: [
        {
            id: 1,
            text: 'React',
            completed: false
        },
        {
            id: 2,
            text: 'Mobx',
            completed: false
        },
        {
            id: 3,
            text: 'Antd',
            completed: false
        },
        {
            id: 4,
            text: 'Antd Pro',
            completed: false
        },
        {
            id: 5,
            text: 'CSS Modules',
            completed: false
        },
        {
            id: 6,
            text: 'MockJS',
            completed: false
        },
        {
            id: 7,
            text: 'Http',
            completed: false
        },
        {
            id: 8,
            text: 'Axios',
            completed: false
        }
    ]
}

function fetchList(req, res) {
    res.status(200).send(model.list);
}

function findOne(id) {
    return model.list.find((todo) => todo.id === id);
}

function add(req, res) {
    const {text} = req.body;

    model.list.push({
        id: model.list.reduce((id, todo) => {
            return Math.max(id, todo.id)
        }, 0) + 1,
        text,
        completed: false
    });

    // 返回结果
    res.status(200).send({code: 0, message: 'ok', data: model.list});
}

function del(req, res) {
    const id = Number(req.params.id);

    model.list = model.list.filter((todo) => todo.id !== id);

    // 返回结果
    res.status(200).send({code: 0, message: 'ok', data: model.list});
}

function edit(req, res) {
    const id = Number(req.params.id);
    const {text} = req.body;
    const todo = findOne(id);

    if (todo) {
        todo.text = text;

        // 返回结果
        res.status(200).send({code: 0, message: 'ok'});
    } else {
        // 返回结果
        res.status(200).send({code: 404, message: `Todo#${id}不存在！`});
    }
}

function complete(req, res) {
    const id = Number(req.params.id);
    const todo = findOne(id);

    if (todo) {
        todo.completed = !todo.completed;

        // 返回结果
        res.status(200).send({code: 0, message: 'ok'});
    } else {
        // 返回结果
        res.status(200).send({code: 404, message: `Todo#${id}不存在！`});
    }
}

function completeAll(req, res) {

    model.list = model.list.map((todo) => {
        todo.completed = true;
        return todo;
    });

    // 返回结果
    res.status(200).send({code: 0, message: 'ok'});
}

function clearCompleted(req, res) {
    model.list = model.list.filter((todo) => !todo.completed);

    // 返回结果
    res.status(200).send({code: 0, message: 'ok'});
}

export default {
    'POST /api/todos/complete/:id': complete,
    'POST /api/todos/complete-all': completeAll,
    'DELETE /api/todos/completed': clearCompleted,
    'GET /api/todos': fetchList,
    'POST /api/todos': add,
    'POST /api/todos/:id': edit,
    'DELETE /api/todos/:id': del,
};