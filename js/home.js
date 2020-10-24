function onGoogleSignIn(googleUser) {
  alert("Welcome!!!" + googleUser.getBasicProfile().getName());
}

function renderGoogleButton() {
  gapi.signin2.render("googleSigIn", {
    scope: "profile email",
    longtitle: true,
    width: 240,
    height: 50,
    theme: "dark",
  });

  gapi.signin2.render("g-link", {
    scope: "profile email",
    width: 20,
    height: 50,
  });
}
