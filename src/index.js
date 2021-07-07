import React from 'react';
import ReactDOM from 'react-dom';

import JsExample from "./view/jsExample";
import CssExample from "./view/cssExample";

const App = () => {
  return (
    <div>
      <JsExample />
      <CssExample />
    </div >
  )
}

if (module.hot) { module.hot.accept() }

ReactDOM.render(<App />, document.getElementById('root'));
