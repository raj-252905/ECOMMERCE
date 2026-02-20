const USERS_KEY = 'ecom_users';
const CURRENT_USER_KEY = 'ecom_current_user';

function getUsers() {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  const data = localStorage.getItem(CURRENT_USER_KEY);
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

function register(name, email, password) {
  const users = getUsers();
  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: 'Email already registered.' };
  }
  const user = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: password,
  };
  users.push(user);
  saveUsers(users);
  setCurrentUser({ id: user.id, name: user.name, email: user.email });
  return { success: true, user: { id: user.id, name: user.name, email: user.email } };
}

function login(email, password) {
  const users = getUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) {
    return { success: false, error: 'Invalid email or password.' };
  }
  setCurrentUser({ id: user.id, name: user.name, email: user.email });
  return { success: true, user: { id: user.id, name: user.name, email: user.email } };
}

function logout() {
  setCurrentUser(null);
}

function isLoggedIn() {
  return getCurrentUser() !== null;
}
