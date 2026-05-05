function register(e) {
  e.preventDefault();
  const user = {
    username: username.value,
    password: password.value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registered!");
  location.href = "signin.html";
}

function login(e) {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));

  if (user.username === loginUser.value && user.password === loginPass.value) {
    localStorage.setItem("isLoggedIn", "true");
    location.href = "collection.html";
  } else {
    alert("Invalid!");
  }
}

function checkAuth() {
  if (!localStorage.getItem("isLoggedIn")) {
    location.href = "signin.html";
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  location.href = "signin.html";
}