import { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ChevronRight, ExternalLink, Code } from 'lucide-react';

// CSS will be imported from a separate file
import './App.css';

// TypeScript component definition
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
      
      // Determine active section
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className="container">
      {/* Scroll Progress Bar */}
      <div 
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    
      
      {/* Navigation */}
      <nav className="main-nav">
        <a href="#home" className="logo">
          <span className="logo-accent">YY</span>Chen
        </a>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
        
        {/* Mobile Navigation Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <button className="close-btn" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="background-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="intro-text">
              <div className="intro-line"></div>
              Hello, my name is
            </div>
            <h1>Yan-Yin Chen</h1>
            <h2>Full Stack Developer</h2>
            <p>
              Former IT Engineer in manufacturing industry transitioning to Full Stack Development. 
              Passionate about creating elegant solutions that bridge technology with human needs.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View my work
                <ChevronRight className="chevron-icon" size={18} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-circle">
              <div className="gradient-overlay"></div>
              <div className="circle-decoration circle-1"></div>
              <div className="circle-decoration circle-2"></div>
              <img src="/api/placeholder/600/600" alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <a href="#about">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5"></path>
              <path d="M7 6l5 5 5-5"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* About Section - Updated without image */}
      <section id="about" className="about-section">
        <div className="bg-circle circle-top-left"></div>
        <div className="bg-circle circle-bottom-right"></div>
        <div className="section-content">
          <div className="section-header">
            <span className="section-number">01.</span>
            <h2>About Me</h2>
            <div className="header-line"></div>
          </div>
          <div className="about-content">
            <p>
              With a solid background in IT from the manufacturing industry, I've developed a deep understanding of how technology can streamline business processes and enhance productivity.
            </p>
            <p>
              Currently pursuing my master's degree, I'm focusing on expanding my skills in modern web development frameworks and methodologies, with the goal of transitioning into a full stack development role.
            </p>
            <p>
              I have a particular interest in cloud technologies and AI applications, and I'm excited about exploring how these cutting-edge technologies can be integrated into web applications to create more intelligent and responsive user experiences.
            </p>
            <p>
              My approach combines technical knowledge with creative problem-solving, always keeping the end user in mind when designing and implementing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-number">02.</span>
            <h2>My Projects</h2>
            <div className="header-line"></div>
          </div>
          
          {/* Project 1 */}
          <div className="project project-right">
            <div className="project-grid">
              <div className="project-image">
                <div className="image-border"></div>
                <img 
                  src="./p1.png" 
                  alt="Fresh Veggies Store" 
                  className="project-img" 
                />
              </div>
              <div className="project-info project-info-right">
                <div className="project-badge">Featured Project</div>
                <h3>Fresh Veggies Store</h3>
                <div className="project-description">
                  <p>
                    A comprehensive e-commerce platform for fresh vegetables with user authentication, product management, shopping cart functionality, and a secure checkout process.
                  </p>
                </div>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>MySQL</span>
                  <span>HTML/CSS</span>
                  <span>JavaScript</span>
                </div>
                <div className="project-links">
                  {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <Github size={22} />
                  </a> */}
                  <a href="https://annchen1156325.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="project project-left">
            <div className="project-grid">
              <div className="project-info project-info-left">
                <div className="project-badge">Featured Project</div>
                <h3>LLC Issue Tracker</h3>
                <div className="project-description">
                  <p>
                    A collaborative issue tracking platform with user authentication, message board functionality, and a response system designed to streamline team communication and problem resolution.
                  </p>
                </div>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>MySQL</span>
                  <span>HTML/CSS</span>
                  <span>JavaScript</span>
                </div>
                <div className="project-links">
                  {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <Github size={22} />
                  </a> */}
                  <a href="https://yanyinchen1156325.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              <div className="project-image">
                <div className="image-border"></div>
                <img 
                  src="./p2.png" 
                  alt="LLC Issue Tracker" 
                  className="project-img" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="bg-circle circle-top-right"></div>
        <div className="bg-circle circle-bottom-left"></div>
        <div className="section-content">
          <div className="section-header">
            <span className="section-number">03.</span>
            <h2>Skills & Expertise</h2>
            <div className="header-line"></div>
          </div>
          
          <div className="skills-grid">
            {/* Backend */}
            <div className="skill-card">
              <div className="card-corner"></div>
              <h3>
                <Code className="card-icon" size={24} />
                Backend Development
              </h3>
              <ul className="skill-list">
                <li>Python</li>
                <li>Flask Framework</li>
                <li>MySQL & SQL Server</li>
                <li>C#</li>
              </ul>
            </div>
            
            {/* Frontend */}
            <div className="skill-card">
              <div className="card-corner"></div>
              <h3>
                <Code className="card-icon" size={24} />
                Frontend Development
              </h3>
              <ul className="skill-list">
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            {/* Tools & Others */}
            <div className="skill-card">
              <div className="card-corner"></div>
              <h3>
                <Code className="card-icon" size={24} />
                Tools & Technologies
              </h3>
              <ul className="skill-list">
                <li>Git & Version Control</li>
                <li>IT Infrastructure</li>
                <li>System Administration</li>
                <li>Cloud Services</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="bg-circle circle-bottom-right"></div>
        <div className="section-content">
          <div className="contact-header">
            <span className="section-number">04.</span>
            <h2>Get In Touch</h2>
          </div>
          
          <div className="mobile-social-links">
            <a href="https://github.com/Yanyin-Chen-1156325/" target="_blank" rel="noopener noreferrer">
              <Github size={30} />
            </a>
            <a href="https://www.linkedin.com/in/ann-chen-ab306b321" target="_blank" rel="noopener noreferrer">
              <Linkedin size={30} />
            </a>
            <a href="mailto:yyc24nn@gmail.com">
              <Mail size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Designed & Built with <span className="heart-icon">♥</span> by Yan-Yin Chen</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;