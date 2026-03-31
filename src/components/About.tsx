import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">About Me</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a self-taught backend developer focused on ASP.NET Core and C#. I started programming out of curiosity — writing small automation scripts — and gradually moved into building real applications and APIs.
            </p>
            <p>
              Over the past two years I've been working with C# and ASP.NET Core, building projects ranging from SaaS applications to security analysis tools. I focus on clean architecture, maintainable code, and building backends that are reliable and easy to scale.
            </p>
            <p>
              While my main focus is backend development, I'm comfortable working across the full stack, integrating APIs with React frontends and delivering complete, production-ready solutions.
            </p>
            <p>
              Outside of client work, I'm also exploring reverse engineering, digging into how software works under the hood, which gives me a deeper understanding of security and low-level system behavior.
            </p>

            <div className="about__badges">
              <span className="about__badge">C# / .NET</span>
              <span className="about__badge">Full-Stack</span>
              <span className="about__badge">DevOps</span>
              <span className="about__badge">Freelancer</span>
            </div>
          </div>

          <div className="about__visual" aria-hidden="true">
            <div className="about__avatar">
              <span className="about__avatar-initials">vDanix</span>
              <div className="about__avatar-ring" />
              <div className="about__avatar-ring about__avatar-ring--2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
