function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">HELLO, I&apos;M</p>
        <h1>
          Sharan <span>Kumar</span>
        </h1>
        <h2>React Developer &amp; Python Enthusiast</h2>
        <p>
          Creating responsive interfaces and business applications with modern
          web technologies.
        </p>
        <div className="actions">
          <a className="btn primary" href="#projects">
            View Projects
          </a>
          <a className="btn ghost" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-code">
        <div className="window">
          <div className="dots">● ● ●</div>
          <pre>{`const developer = {
  name: "Sharan",
  stack: ["React", "Python"],
  focus: "Performance",
  mindset: "Keep learning"
};`}</pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;
