var api = {

  getUser(userId){
    var userId = userId;
    var url = `https://simulnos.herokuapp.com/api/users/${userId}`;
    console.log(url)
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  getUserMessages(userId){
    var username = "Username".toLowerCase().trim();
    var userId = userId
    var url = `https://simulnos.herokuapp.com/api/users/${userId}/messages`;
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  getStories(){
    var url = 'https://simulnos.herokuapp.com/api'
    var content_array = [];
    fetch(url)
      .then(function(res){
        return res.json();
      })
      .then(function(jsonRes){
        return jsonRes.stories
      })
      .then(function(stories_array){
        for (var i = 0; i<stories_array.length; i++){
          content_array.push(stories_array[i].content)
        }
      })
      .done();
      return content_array;
  },
  getStories3(){
    var url = 'https://simulnos.herokuapp.com/api'
    var content_array = [];
    fetch(url)
      .then(function(res){
        return res.json();
      })
      .then(function(jsonRes){
        return jsonRes.stories
      })
      .then(function(stories_array){
        for (var i = 0; i<stories_array.length; i++){
          content_array.push(stories_array[i].content)
        }
      })
      .done();
      console.log(content_array);
      return content_array;
  },
  getStoriesContent(){
    var stories_array = getStories();
    var content_array = [];
    for (var i = 0; i<stories_array.length; i++){
      content_array.push(stories_array[i].content);
    }
    return content_array;
  },
  getStories2(){
    var url = 'https://simulnos.herokuapp.com/api'
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  getUserStories(userId){
    var userId = userId;
    var url = `https://simulnos.herokuapp.com/api/users/${userId}/stories`;
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
  createMessage(username, message){
    username = username.toLowerCase().trim();
    var url = `https://simulnos.herokuapp.com/api/users/${user.id}.json`;
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
  //NOTE: NOT tested
  createStory(user_id, title, content){
    var url = `https://simulnos.herokuapp.com/api/users/${user.id}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify({
        user_id: user_id,
        title: title,
        content: content,
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
  getStory(){
    var user = {id: 5}
    var story = {id: 1}
    var url = `https://simulnos.herokuapp.com/api/users/5/stories/1`;
    console.log(url);
    return fetch(url).then((res) => res.json()).catch(error => {
    console.log(error);
    alert(error.message);
    });
  },
};


module.exports = api;
