var api = {

  getUser(username){
    username = username.toLowerCase().trim();
    var url = `http://simulnos.herokuapp.com/api/users/${user.id}`;
    return fetch(url).then((res) => res.json())
  },
  getUserMessages(username){
    username = username.toLowerCase().trim();
    var url = `http://simulnos.herokuapp.com/api/users/${user.id}/messages`;
    return fetch(url).then((res) => res.json())
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
      console.log(content_array);
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
    });
  },


  getUserStories(username){
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
  },

  getUsers() {
    var url = 'https://simulnos.herokuapp.com/api/users'
    return fetch(url).then((res) => res.json())
  },
};


module.exports = api;
