import Navbar from './parts/navbar.js';
import Img from './img/Sam.jpeg';
import Img1 from './img/Doorzettingsvermogen.jpeg';
import Img2 from './img/vasthoudent (2).jpeg';
import Img3 from './img/efficient.png';
import Img4 from './img/creatief.jpeg';
import Img5 from './img/Coding meme.jpeg';




const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="intro-section">
        <div className="intro-text">
          <h2>Sam Siu</h2>
          <h4>Software Developer</h4>
          <p>
            My name is Sam, I am 18 years old, I study software development, and I am looking for an internship!
          </p>
          <button><a href="mailto:siu7279@outlook.com" target="_blank">Contact me</a></button>
        </div>
        <div className="intro-image">
          <img src={Img} alt="Sam" />
        </div>
      </section>

      <section className="work-section" id='Work'>
        <h3>A selection of my work.</h3>
        <div className="work-grid">
          <div className="work-item">
            <a href="https://beeldhouwerwerkeilandlelystad.nl/" target="_blank" rel="noopener noreferrer">
              Project 1
            </a>
          </div>
          <div className="work-item">
                <a href="https://orgelconcertenflevoland.nl/" target="_blank" rel="noopener noreferrer">
              Project 2
            </a>
          </div>
          {/* <div className="work-item"></div>
          <div className="work-item"></div> */}
        </div>
        {/* <a href="/" className="load-more">Load more projects +</a> */}
      </section>

    <div class="second" id='Characteristics'>
        <h1 class="random">My features are</h1>
        <div class="images-second">
            <div class="image-subtext">
                <img src={Img1} alt="Doorzettingsvermogen"/>
                <p>Perseverance</p>
            </div>
            <div class="image-subtext">
                <img src={Img2} alt="Vasthoudend"/>
                <p>Persistent</p>
            </div>
            <div class="image-subtext">
                <img src={Img3} alt="Efficiënt"/>
                <p>Efficient</p>  
            </div>
            <div class="image-subtext">
                <img src={Img4} alt="Creatief"/>
                <p>Creative</p>
            </div>
            <div class="image-subtext">
                <img src={Img5} alt="Humor"/>
                <p>Humor</p>
            </div>
        </div>
    </div>

      <section className="resume-section" id='Résumé'>
        <h3>My résumé</h3>
        <div className="resume-grid">
          <div className="resume-item">
            <p><strong>Languages I can speak:</strong><br/>Dutch<br/>English<br/>Cantonese/Mandarin</p>
          </div>
          <div className="resume-item">
            <p><strong>Education:</strong><br/>
            HBO ICT, Windesheim Almere - 2025 - present<br/>
            <hr/>
            Software Development (vocational level 4), MBO College Almere - 2023-2025<br/>
            <hr/>
            VMBO Porteum, Lelystad - 2019-2023
            </p>
          </div>
          <div className="resume-item">
            <p><strong>Work experience:</strong><br/>
              - Hospitality employee at Fashion Café - 1 year and 9 months - present<br/>
            <hr/>
              - Internship Software Engineer intern Domits - 6 months<br/>
            <hr/>
              - Stock replenishment team member at Plus - 1 year and 3 months
            <hr/>
              - Hospitality employee at Patat Lin - 3 months<br/>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Sam Siu. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="https://www.linkedin.com/in/sam-siu-77b44b256/">Linkedin</a></li>
          <li><a href="mailto:siu7279@outlook.com" target="_blank">Contact</a></li>
          
          <li><a href="https://github.com/Muubii">Github</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
