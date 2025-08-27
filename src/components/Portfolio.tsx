import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram } from "lucide-react";
import { 
  Cloud, 
  Terminal, 
  ExternalLink, 
  Award, 
  Code, 
  Server, 
  Database,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  Play,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentStackIndex, setCurrentStackIndex] = useState(0);
  const terminalRef = useRef(null);
  
  const terminalCommands = [
    'kubectl get pods --all-namespaces',
    'terraform apply -auto-approve',
    'docker build -t myapp:latest .',
    'aws s3 sync ./build s3://my-bucket',
    'ansible-playbook deploy.yml',
    'helm upgrade myapp ./charts/myapp'
  ];

  // Terminal typing animation
  useEffect(() => {
    let currentCommandIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    const typewriter = () => {
      const currentCommand = terminalCommands[currentCommandIndex];
      
      if (!isDeleting && currentCharIndex < currentCommand.length) {
        setTerminalText(currentCommand.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        setTimeout(typewriter, 100);
      } else if (isDeleting && currentCharIndex > 0) {
        setTerminalText(currentCommand.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        setTimeout(typewriter, 50);
      } else if (!isDeleting && currentCharIndex === currentCommand.length) {
        setTimeout(() => {
          isDeleting = true;
          typewriter();
        }, 2000);
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentCommandIndex = (currentCommandIndex + 1) % terminalCommands.length;
        setTimeout(typewriter, 500);
      }
    };
    
    typewriter();
  }, []);

  // Tech stack carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStackIndex(prev => (prev + 1) % techStack.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'AWS', level: 95, color: 'bg-orange-500' },
    { name: 'Azure', level: 85, color: 'bg-blue-500' },
    { name: 'Docker', level: 90, color: 'bg-blue-400' },
    { name: 'Kubernetes', level: 88, color: 'bg-blue-600' },
    { name: 'Terraform', level: 92, color: 'bg-purple-500' },
    { name: 'Jenkins', level: 85, color: 'bg-red-500' },
    { name: 'Python', level: 87, color: 'bg-yellow-500' },
    { name: 'Linux', level: 93, color: 'bg-gray-600' }
  ];

  const projects = [
    {
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Deployed scalable Kubernetes clusters across AWS, Azure, and GCP with automated CI/CD pipelines',
      tech: ['Kubernetes', 'Terraform', 'Jenkins', 'Helm'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/MJKB02/',
      demo: 'https://github.com/MJKB02/'
    },
    {
      title: 'Infrastructure as Code Pipeline',
      description: 'Automated infrastructure provisioning using Terraform with GitOps workflow',
      tech: ['Terraform', 'AWS', 'GitLab CI', 'Ansible'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/username/iac-pipeline',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Microservices Monitoring Stack',
      description: 'Complete observability solution with Prometheus, Grafana, and ELK stack',
      tech: ['Prometheus', 'Grafana', 'ELK', 'Docker'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/username/monitoring-stack',
      demo: 'https://demo.example.com'
    }
  ];

  const certifications = [
    { name: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2023' },
    { name: 'Azure DevOps Engineer Expert', issuer: 'Microsoft', year: '2023' },
    { name: 'HashiCorp Terraform Associate', issuer: 'HashiCorp', year: '2024' }
  ];

  const techStack = [
    { name: 'AWS', icon: '☁️', color: 'text-orange-400' },
    { name: 'Docker', icon: '🐳', color: 'text-blue-400' },
    { name: 'Kubernetes', icon: '⚙️', color: 'text-blue-600' },
    { name: 'Terraform', icon: '🏗️', color: 'text-purple-400' },
    { name: 'Jenkins', icon: '🔧', color: 'text-red-400' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-400' },
    { name: 'Linux', icon: '🐧', color: 'text-gray-400' },
    { name: 'Git', icon: '📝', color: 'text-orange-600' }
  ];

  const experience = [
    {
      title: 'Senior DevOps Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Led cloud migration initiatives and implemented CI/CD pipelines for 50+ microservices'
    },
    {
      title: 'Cloud Engineer',
      company: 'CloudFirst Inc',
      period: '2020 - 2022',
      description: 'Designed and managed AWS infrastructure for high-traffic applications'
    },
    {
      title: 'Systems Administrator',
      company: 'StartupXYZ',
      period: '2018 - 2020',
      description: 'Maintained Linux servers and implemented monitoring solutions'
    }
  ];

  const CloudBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute opacity-10 ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            fontSize: '2rem'
          }}
        >
          <Cloud className="animate-bounce" />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">
              <span className="text-blue-500">जयदीप</span> 𝐁𝐀𝐃𝐆𝐔𝐉𝐀𝐑
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${
            darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="px-4 py-2 space-y-2">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 hover:text-blue-500 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
     <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <CloudBackground />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <div className="mb-8">
      <h5 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="text-blue-500">Cloud</span> & <span className="text-green-500">Devops</span>
        <br />
        Engineer 
      </h5>
      <p className="text-xl md:text-2xl text-gray-400 mb-8">
        Building scalable infrastructure and automating the future
      </p>
    </div>

    {/* Terminal Animation */}
    <div className={`max-w-2xl mx-auto p-6 rounded-lg shadow-2xl backdrop-blur-sm ${
      darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-300'
    }`}>
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-sm text-gray-400">terminal</div>
      </div>
      <div className="font-mono text-left">
        <span className="text-green-500">user@cloudserver:~$ </span>
        <span className="text-blue-400">{terminalText}</span>
        <span className="animate-pulse">|</span>
      </div>
    </div>

    {/* Explore Button */}
    <div className="mt-12">
      <a
        href="#about"
        className="inline-flex items-center px-8 py-3 bg-green-800 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
      >
        Explore My Work
        <ChevronRight className="ml-2" size={20} />
      </a>
    </div>

    {/* Social Media Row - with icons */}
<div className="mt-8 flex justify-center gap-4 flex-wrap">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/jaydip-badgujar/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-transform duration-200 hover:scale-105"
  >
    <Linkedin size={18} />
    LinkedIn
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/MJKB02"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-transform duration-200 hover:scale-105"
  >
    <Github size={18} />
    GitHub
  </a>
  </div>
  </div>
</section>


    
    {/* About Section */}

     <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div
            onClick={() => setShowFullImage(true)}
            className="cursor-pointer group relative mx-auto w-full max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 bg-white dark:bg-gray-800"
          >
            <img
              src="DSC_0078-transformed.png" // 🔁 Replace with actual image
              alt="Jaydip Badgujar"
              className="w-full h-auto object-cover"
            />
          </div>


      {/* Right: Text Content */}
      <div>
        <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300" >
          Aspiring Cloud and DevOps Engineer with a strong foundation in cloud platforms, containerization, and infrastructure as code. I am passionate about building scalable systems, automating deployment pipelines, and learning industry-standard tools like AWS, Azure, Docker, Kubernetes, and CI/CD practices. As a quick learner with hands-on experience from academic projects and training, I am eager to apply best practices in performance optimization, monitoring, and cloud security to real-world environments. I’m committed to continuous improvement and delivering efficient, reliable solutions in cloud and DevOps ecosystems.
        </p>
      </div>
    </div>
  </div>
</section>
  

    

      {/* Tech Stack Carousel */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`flex flex-col items-center transition-all duration-500 transform ${
                  index === currentStackIndex 
                    ? 'scale-125 opacity-100' 
                    : 'scale-100 opacity-60'
                }`}
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className={`text-sm font-medium ${tech.color}`}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
   {/*}   <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Server size={64} className="text-white opacity-80" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-green-500 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
   {/*   <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-600"></div>
                
                <div className={`p-6 rounded-lg backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-blue-500 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-gray-400 mb-3">{exp.company}</h4>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       */}

      {/* Certifications Section */}
     {/*   <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-blue-500">Certifications</span> & Badges
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <Award className="text-yellow-500 mr-4" size={32} />
                  <div>
                    <h3 className="text-lg font-bold">{cert.name}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <p className="text-sm text-blue-500">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
<section id="contact" className="py-20 relative overflow-hidden">
  <CloudBackground />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h2 className="text-4xl font-bold text-center mb-16">
      Get In <span className="text-blue-500">Touch</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Left Side */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
        <p className="text-lg text-gray-400 mb-8">
          I'm always interested in discussing new opportunities, innovative projects, 
          or just having a chat about cloud technologies and DevOps practices.
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="text-blue-500 mr-4" size={20} />
            <span>jkb20002@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="text-blue-500 mr-4" size={20} />
            <span>+91 9607340280</span>
          </div>
          <div className="flex items-center">
            <MapPin className="text-blue-500 mr-4" size={20} />
            <span>Pune, Maharastra</span>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className={`p-8 rounded-lg backdrop-blur-sm ${
        darkMode
          ? 'bg-gray-800/50 border border-gray-700'
          : 'bg-white/50 border border-gray-200'
      }`}>
        <form
          action="https://formspree.io/f/xovwrzbq"  // 🔁 Replace this!
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          {/* Optional: Add redirect after submit */}
          <input type="hidden" name="_redirect" value="portfolio message" />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className={`py-8 border-t ${
        darkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 𝗝𝗔𝗬𝗗𝗜𝗣 𝗕𝗔𝗗𝗚𝗨𝗝𝗔𝗥 ❤️.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;