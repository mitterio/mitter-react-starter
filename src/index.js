import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Mitter } from '@mitter-io/web'

const regex = /^\/user\/(@[a-zA-Z0-9-]+)/
const loggedUser = (new URL(document.location.href).pathname.match(regex)[1])

// Enter your own credentials below
const userAuth = {
    '@john':
        'eyJhbGciOiJIUzUxMiJ9.a ..... W8iLCJ1c2VyVG9rZW5JZCI6InplNzBSeGpGZms4',

    '@amy':
        'eyJhbGciOiJIUzUxMiJ9.ey .... XItaW8iLCJ1c2VyVG9rZW5JZCI6IlBCOFhLQm51VEJ',

    '@candice':
        'eyJhbGciOiJIUzUxMiJ9.Jt .... aXR0ZXItaW8iLCJ1c2VyVG9rZW5JZCI6IkN6T2REVnV6QXY'
}

// Enter the application id from the mitter.io panel
const mitter = Mitter.forWeb('.. your application id..')

mitter.setUserAuthorization(userAuth[loggedUser])

ReactDOM.render(
    <App
        mitter={mitter}
        loggedUser={loggedUser}
    />,
    document.getElementById('root')
);

registerServiceWorker();
