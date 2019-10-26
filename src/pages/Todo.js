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

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = {fetchTodos};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);