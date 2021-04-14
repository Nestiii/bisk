import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';
import './index.css';

const App = () => {
  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: '#262626', display: 'grid', placeContent: 'center'}}>
      <Button label={"Test"} loadingClassName={'asd'} loading/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
