import './App.css';
import MyButton from './MyButton';
import ironHackLogo2 from './images/landingPage.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
const ironHackLogo =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png';

function App() {
  return (
    <body>
      <div className="App">
        <div className="imgHead">
          <img src={ironHackLogo} alt="" />
          <a href="/">
            {' '}
            <img src={ironHackLogo2} className="imglanding" alt="" />
          </a>
        </div>

        <h2>Say Hello To ReactJS</h2>
        <p className="words">
          You will learn how to use the most popular frontend library, and
          become a super Ninja Developer.
        </p>
        <div></div>

        <MyButton />
      </div>
      <div className="icons">
        <div>
          {' '}
          <img src={icon1} alt="" /> <h3>Declarative</h3>{' '}
          <p className="iconWords">
            React makes it painless to create interative UIs.
          </p>
        </div>
        <div>
          <img src={icon2} alt="" />
          <h3>Components</h3>
          <p className="iconWords">
            Build encapsulated Components that manage their state.
          </p>
        </div>
        <div>
          {' '}
          <img src={icon3} alt="" /> <h3>Single-Way</h3>{' '}
          <p className="iconWords">
            A set of immutablevalues are passed to the component's.
          </p>
        </div>
        <div>
          {' '}
          <img src={icon4} alt="" />
          <h3>JSX</h3>{' '}
          <p className="iconWords">
            Statically-typed designed to run on modern browsers.
          </p>
        </div>
      </div>
    </body>
  );
}

export default App;
