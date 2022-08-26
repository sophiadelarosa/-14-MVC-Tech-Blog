const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");
    const res = await fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
    console.log(res);
      if(res.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Login failed.");
      }
      //.then(function() {
        //document.location.replace("/dashboard");
      //})
      //.catch(err => console.log(err));
  };
  
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);
  