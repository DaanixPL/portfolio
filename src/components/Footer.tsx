import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#" className="footer__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          v<span>Danix</span>
        </a>
        <p className="footer__copy">© 2026 vDanix. All rights reserved.</p>
        <div className="footer__links">
          <a href="https://github.com/DaanixPL" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
          <a href="https://www.fiverr.com/daanix" target="_blank" rel="noopener noreferrer" className="footer__link">Fiverr</a>
          <a href="mailto:vdanix.contact@gmail.com" className="footer__link">Email</a>
        </div>
      </div>
    </footer>
  );
}
