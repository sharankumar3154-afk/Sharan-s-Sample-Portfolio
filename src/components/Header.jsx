const navigationLinks = ['about', 'projects', 'skills', 'resume', 'contact'];

function Header({ isMenuOpen, setIsMenuOpen }) {
  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header>
      <a className="brand" href="#home">
        SK<span>.</span>
      </a>
      <button
        className="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        {navigationLinks.map((link) => (
          <a key={link} href={`#${link}`} onClick={closeMenu}>
            {link[0].toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
