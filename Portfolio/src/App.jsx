import './App.css';
import ImageSlider from './ImageSlider';

function App() {
  return (
    <div className="App">
      <Header/>
      <ImageSlider/>
      <CardGrid/>
      <Footer/>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="logo">SHRUTI GUPTA</div>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Contact Info</a>
      </nav>
    </header>
  );
}

function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function CardGrid() {
  return (
    <div className="cardGrid">
      <Card
  title="SOFTWARE DEVELOPER"
  description="Experienced software developer adept in web development technologies including Java, .NET, and MERN stack. Skilled in crafting robust and scalable solutions to address diverse business needs."
/>

<Card
  title="PUBLIC SPEAKER"
  description="Dynamic public speaker with a track record of active participation in multiple Model United Nations (MUNs) and public speaking engagements. Demonstrates exceptional confidence and articulate communication skills while effectively conveying complex ideas."
/>

<Card
  title="WRITER"
  description="Passionate writer focused on professional insights, published on reputable platforms such as Medium. Engages readers with thought-provoking content exploring various aspects of the work environment and beyond."
/>

    </div>
  );
}

function Footer(){
  return(
    <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
  );
}

export default App
