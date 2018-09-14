//main.js 

// old
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());


// es6
import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter'

render(<Greeter />,document.getElementById('root'))