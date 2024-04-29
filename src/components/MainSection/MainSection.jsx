import "./mainSection.css";
import vdoImg from '../../assets/play.svg'
function MainSection() {
  return (
    <section className="main-section-container">
      <div className="heading">
        <h1>Design System for React JS</h1>
      </div>
      <div className="content-text">
        <h2>
          Atomize React is a UI framework that helps developers collaborate with
          designers and build consistent user interfaces effortlessly.
        </h2>
      </div>
      <div className="main-section-links">
            <a className="main-section-link-1">
                <button>Get Started Now</button>
            </a>
            <a className="main-section-link-2">
                <button>
                <frames>
                <img src={vdoImg}/>
                </frames>
                Watch Video
                </button>
            </a>
      </div>
    </section>
  );
}

export default MainSection;
