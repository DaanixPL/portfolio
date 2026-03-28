import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">About Me</h2>

        <div className="about__grid">
          <div className="about__text">
            {/* TODO: Replace with real bio */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur.
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
              <span className="about__avatar-initials">vD</span>
              <div className="about__avatar-ring" />
              <div className="about__avatar-ring about__avatar-ring--2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
