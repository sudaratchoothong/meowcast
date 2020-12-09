$(function() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            //User is signed in.
            var email = user.email;
            $("username").text(email)

        } else {
            window.location.href = 'structure/browse.html'
        }
    });

})

$("#signout").click(function() {
    firebase.auth().signOut()
        .then(function() {}).catch(function(error) {});
})