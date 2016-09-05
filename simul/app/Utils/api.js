var api = {
  getUsers() {
    var url = 'https://simulnos.herokuapp.com/api/users'
    return fetch(url).then((res) => res.json())
  }
}

module.exports = api;
