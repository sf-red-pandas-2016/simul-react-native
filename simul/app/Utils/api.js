var api = {

  getBio(username){
    username = username.toLowerCase().trim();
    var url = `http://simulnos.herokuapp.com/api/users/${user.id}`;
    return fetch(url).then((res) => res.json())
  },
  getUserMessages(username){
    username = username.toLowerCase().trim();
    var url = `http://simulnos.herokuapp.com/api/users/${user.id}/messages`;
    return fetch(url).then((res) => res.json())
  },
  getStories(username){
    username = username.toLowerCase().trim();
    var url = `http://simulnos.herokuapp.com/api/${user.id}/stories`;
    return fetch(url).then((res) => res.json())
  },
  addMessage(username, message){
    username = username.toLowerCase().trim();
    var url = `http://simulnos.herokuapp.com/api/${user.id}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
};

  getUsers() {
    var url = 'https://simulnos.herokuapp.com/api/users'
    return fetch(url).then((res) => res.json())
  }
}


module.exports = api;
