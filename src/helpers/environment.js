let APIURL = '';

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:5005';
        break;
    case 'lista-shopping-client.herokuapp.com':
        APIURL = 'https://lista-shopping-list.herokuapp.com'
}

export default APIURL;