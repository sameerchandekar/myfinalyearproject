window.fbAsyncInit = function () {
    FB.init({
        appId: '329189640488002',
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true // parse XFBML
    });

    FB.getLoginStatus(function (response) {
        if (document.getElementById('fbloginli')) {
            if (response.status == 'connected') {
                document.getElementById('fbloginli').innerHTML = '<a href="http://www.indiaplaza.com/FBCallback.aspx"><img src="https://indiaplaza.blob.core.windows.net/indiaplazaimages/facebookbutton11.png" style="border: none; display: block;"></a>';
            } else {
                document.getElementById('fbloginli').innerHTML = '<a href="#" onclick="fblogin();return false;"><img src="https://indiaplaza.blob.core.windows.net/indiaplazaimages/facebookbutton11.png" style="border: none; display: block;"></a>';
                FB.XFBML.parse(document.getElementById('fbloginli'));
            }
        }
    });
};
//your fb login function
function fblogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            window.location = "http://www.indiaplaza.com/FBCallback.aspx";
        }
    }, { scope: 'email' });
}
