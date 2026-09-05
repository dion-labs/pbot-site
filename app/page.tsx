import { ThemeToggle } from './theme-toggle';
import { Walkthrough, Setup } from './walkthrough';
const repo = 'https://github.com/dion-labs/pbot';
export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav wrap">
        <a className="wordmark" href="#main" aria-label="pbot home">
          pbot<span>↳</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how">How it works</a>
          <a href="#setup">Get started</a>
          <ThemeToggle />
          <a className="github" href={repo}>
            GitHub ↗
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> A DIONLABS EXPERIMENT · OPEN SOURCE
            </p>
            <h1>
              A little bot.
              <br />A persistent
              <br />
              <em>player.</em>
            </h1>
            <p className="intro">
              Meet pbot. Your local automation companion for Pokémon TCG Pocket
              Step-Up Battles. It sees the screen, makes its move, and remembers
              where it left off.
            </p>
            <div className="actions">
              <a className="button" href="#setup">
                Meet your pocket bot <span>↗</span>
              </a>
              <a className="text-link" href={repo}>
                Explore the source ↗
              </a>
            </div>
            <p className="hero-note">Your device. Your cards. Your progress.</p>
          </div>
          <div className="hero-art">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <div className="art-label">POCKET BOT / FIELD UNIT 001</div>
            <img
              src="/pbot-mascot.png"
              alt="pbot, a friendly ivory utility robot carrying a card, with a red p antenna"
              width="1254"
              height="1254"
            />
            <div className="checkpoint">
              <span className="status-dot" />
              <div>
                <strong>Small bot. Long memory.</strong>
                <span>Durable checkpoints, built in.</span>
              </div>
              <span className="checkpoint-icon">↳</span>
            </div>
            <span className="coordinate">LOCAL FIRST. ALWAYS.</span>
          </div>
        </section>
        <div className="spec-strip">
          <div className="wrap specs">
            <span>
              <b>01</b> Runs on your Mac
            </span>
            <span>
              <b>02</b> Connects over USB
            </span>
            <span>
              <b>03</b> Keeps progress locally
            </span>
            <span>
              <b>04</b> Open source · MIT
            </span>
          </div>
        </div>
        <section id="how" className="wrap section">
          <p className="eyebrow">A SIMPLE LOOP. A LITTLE PATIENCE.</p>
          <h2>See. Play. Remember.</h2>
          <p className="section-intro">
            A workbench that turns visible game state into careful, repeatable
            actions.
          </p>
          <Walkthrough />
        </section>
        <section className="boundaries">
          <div className="wrap boundary-grid">
            <div>
              <p className="eyebrow">INDEPENDENT. INSPECTABLE. LOCAL.</p>
              <h2>
                A useful bot knows
                <br />
                its boundaries.
              </h2>
              <p>
                Experimental software for one real reference setup. The current
                autonomous workflow focuses on first wins; complete mission
                planning and manual battle play are future work.
              </p>
            </div>
            <div className="boundary-list">
              <article>
                <b>01</b>
                <div>
                  <h3>Your machine is home.</h3>
                  <p>
                    The dashboard, screenshots, and progress stay local. The
                    control API binds to localhost.
                  </p>
                </div>
              </article>
              <article>
                <b>02</b>
                <div>
                  <h3>No spending by design.</h3>
                  <p>
                    Owned cards and decks, with policy guards against purchases,
                    crafting, and resource spending.
                  </p>
                </div>
              </article>
              <article>
                <b>03</b>
                <div>
                  <h3>Uncertain? Hand it back.</h3>
                  <p>
                    Unknown screens stop with evidence. Login and secure unlock
                    stay in human hands.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="setup" className="wrap section">
          <p className="eyebrow">BRING YOUR OWN ANDROID</p>
          <h2>
            A small project.
            <br />
            An open invitation.
          </h2>
          <Setup />
        </section>
        <aside className="wrap project-note">
          <span>BEFORE YOU RUN</span>
          <p>
            pbot is an unofficial fan project, unaffiliated with The Pokémon
            Company, Creatures Inc., DeNA, Nintendo, or their affiliates.
            Pokémon and related marks belong to their owners. Automation may
            violate game rules and put an account at risk. Review the applicable
            rules and use only accounts and devices you control. Keep the
            dashboard and API on localhost.{' '}
            <a href="https://github.com/dion-labs/pbot/blob/main/SECURITY.md">
              Read the security policy ↗
            </a>
          </p>
        </aside>
      </main>
      <footer className="wrap">
        <a className="wordmark" href="#main">
          pbot
        </a>
        <p>
          An experiment by <a href="https://dionlabs.ai">DionLabs ↗</a>
        </p>
        <a href={repo}>Source on GitHub ↗</a>
      </footer>
    </>
  );
}
