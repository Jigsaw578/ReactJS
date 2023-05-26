import axios from 'axios';

const TodoService = {
    getTodoList: async (param) => {
        console.log(22, param);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
            params: param
        })

        return res
    }
}

export default TodoService