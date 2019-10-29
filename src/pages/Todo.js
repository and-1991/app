import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {fetchTodos} from "../store/actions";

const Todo = ({ todos, fetchTodos }) => {

    useEffect(() => {
        fetchTodos();
    }, [])

    return(
      <div>
            TODO
        <Link to="/">Home</Link>
        <br />
        {todos.map(todo => (
          <p key={todo.id}>
                  {todo.id} {todo.title}
          </p>
          ))}
        <br />
      </div>
    )
};

const loadData = (store, param) => {
    return store.dispatch(fetchTodos(param))
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = {fetchTodos};

export default {component: connect(
    mapStateToProps, mapDispatchToProps
    )(Todo),
    loadData,
}
