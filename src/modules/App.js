import React, {Fragment} from "react";

import ToDo from './containers/todo/todo';
import Title from './components/title/title';


const App = () => (
  <Fragment>
    <Title title = "TODO"/>
    <ToDo/>
  </Fragment>
);

export default App;