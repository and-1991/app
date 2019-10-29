import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {setHello} from "../store/actions";

// eslint-disable-next-line no-shadow
const About = ({hello, setHello}) => {
    return(
      <div>
        About
        <Link to="/">Home</Link>
        <br />
        {hello}
        <br />
        <button type='button' onClick={()=> setHello("Hello!")}>Hello</button>
      </div>
    )
};

const mapStateToProps = state => ({
    hello: state.hello
});

const mapDispatchToProps = {setHello};

export default {
    component: connect(
        mapStateToProps, mapDispatchToProps
    )(About)
}
