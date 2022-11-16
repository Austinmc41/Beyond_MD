import http from "../http-common";


export function getAllTodos() {
    return http.get("/todos/")

}

export function getTodo(id) {
    return http.get(`/todos/${id}`)
}


export function create(data) {
    data = JSON.stringify(data)
    return http.post("/todos/", data)
}

export function update(id, data) {
    return http.put(`/todos/${id}`, data)
}

export function deleteTodo(id) {
    return http.delete(`/todos/${id}`)
}