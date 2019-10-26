import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
    return(
      <div>
        Test vol.2
        <Link to="/about">About</Link>
        <Link to="/todo">Todo</Link>
      </div>
    )
};

export default Home