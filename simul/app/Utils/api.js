var api = {

  getUser(userId){
    var userId = userId;
    var url = `http://simulnos.herokuapp.com/api/users/${userId}`;
    console.log(url)
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  getUserMessages(userId){
    var username = "Username".toLowerCase().trim();
    var userId = userId
    var url = `http://simulnos.herokuapp.com/api/users/${userId}/messages`;
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  getStories(){
    var url = 'https://simulnos.herokuapp.com/api'
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  getUserStories(userId){
    var userId = userId;
    var url = `http://simulnos.herokuapp.com/api/${userId}/stories`;
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  createMessage(username, message){
    username = username.toLowerCase().trim();
    var url = `http://simulnos.herokuapp.com/api/${user.id}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify({
        username: '',
        name: '',
        location: '',
        bio: '',
        resource_request: '',
        skills: '',
        seeking: '',
        preferred_contact
      })
    }).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  getUsers() {
    var url = 'https://simulnos.herokuapp.com/api/users'
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  getStory(user, story){
    var user = {id: 5}
    var story = {id: 1}
    var url = 'https://simulnos.herokuapp.com/api/users/$(user.id)/stories/$(story.id)'
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
};


module.exports = api;
