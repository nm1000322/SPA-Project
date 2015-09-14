var userGlobal
  function index() {
    $('div#sections section').hide()
    $('section#index').show()

  }

  function random() {
    $('div#sections section').hide();
    $('span#random_number').html(Math.random().toString());
    $('section#random').show();
  }

  function test() {
    $('div#sections section').hide();
    $('section#test').show();
  }
  function sign(){
    $('div#sections section').hide();
    $('span#welcome').html(userGlobal)
    $('section#index').show();
  }
  page('/', index);
  page('/landing', sign);
  page('/random', random);
  page('/test', test);
  page();

// The ID token you need to pass to your backend:
  function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  userGlobal=profile.getName()
  if (userGlobal != null){
  console.log(userGlobal)
}


  }
  // Useful data for your client-side scripts:



function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log(this.username);
    userGlobal = null;
  });
}
