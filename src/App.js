import React from "react";
import "./App.scss";
import {renderRoutes} from "react-router-config";

const App = ({route}) => {
    return(
      <div>
        {renderRoutes(route.routes)}
      </div>
    )
};

App.defaultProps = {
    route: null,
};

export default App