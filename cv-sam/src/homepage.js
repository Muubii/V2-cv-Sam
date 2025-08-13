import Navbar from './parts/navbar.js'

const Home = () => {
  return (
    <div> 
        <Navbar/>
    <div>    
        <div>
            <h2>Sam Siu</h2>
            <h4>Software Developer</h4>
            <p>My name is Sam, I am 18 years old, I study software development, and I am looking for an internship!</p>
            <button>Contact me</button>
        </div>

            <div>
                <img src="random" alt="random" />
            </div>
        </div>
        
        <div className='work-container'>
            <h3>A selection of my work.</h3>
        </div>

        <div className='selection-container'>
            <h3>My characteristics are</h3>
        </div>


        <div className='resume-container'>
            <h3>My résumé </h3>
        </div>

    <footer>
        <p>© 2024 Sam Siu. All rights reserved.</p>
        <ul className='footer-links'>
            <li><a href="/">Linkedin</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Github</a></li>
       </ul>
    </footer>
    </div>
  );
};

export default Home;
