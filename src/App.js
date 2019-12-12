import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { data } from './data/outputType.js'

function Test(props){
  return (
    <div>
      {data[0]['assists']}
    </div>
  )
}

ReactDOM.render(<Test />, document.getElementById('root'))

export default Test;
