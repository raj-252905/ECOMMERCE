// Shared: render nav, auth guard, cart count
function renderNav(currentPage) {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const user = getCurrentUser();
  const count = getCartCount();
  nav.innerHTML = `
    <div class="nav-inner container">
      <a href="home.html" class="logo">Shop<span>Hub</span></a>
      <div class="nav-links">
        <a href="home.html" class="${currentPage === 'home' ? 'active' : ''}">Home</a>
        <a href="cart.html" class="${currentPage === 'cart' ? 'active' : ''}">Cart ${count > 0 ? `(${count})` : ''}</a>
        ${user ? `<span class="text-muted">${user.name}</span><button type="button" class="btn-logout" id="btnLogout">Logout</button>` : `<a href="index.html">Login</a>`}
      </div>
    </div>
  `;
  const btnLogout = document.getElementById('btnLogout');
  if (btnLogout) btnLogout.addEventListener('click', function () {
    logout();
    window.location.href = 'index.html';
  });
}

function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = 'index.html';
    return false;
  }
  return true;
}
