let APIURL = '';

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:5005';
        break;
    case 'git.heroku.com/lista-shopping-list-client.git':
        APIURL = 'https://git.heroku.com/lista-shopping-list-client.git'
}

export default APIURL;