export function initialize(container, application) {
  application.deferReadiness();

  var fbAsyncInit = function() {
    initFacebook(window.FB);
    application.advanceReadiness();
  };

  loadFacebookSDK();

  window.fbAsyncInit = fbAsyncInit;
}

function loadFacebookSDK() {
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

function initFacebook(FB) {
  FB.init({
    appId      : '777474312306257',
    xfbml      : true,
    version    : 'v2.2',
    status: true,
    cookie: true,
  });
}

export default {
  name: 'facebook',
  initialize: initialize
};
