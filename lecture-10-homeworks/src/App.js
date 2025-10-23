import my_photo from "./images/myPhoto.jpg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1>Davit Darjania</h1>

        <img src={my_photo} className="my_photo" alt="portfolio_photo" />
        <p className="my_info">
          Hi, I’m Davit Darjania — a Computer Science student at Ilia State
          University and an enthusiastic web developer with a strong passion for
          learning and building modern web applications. I began my journey with
          HTML, CSS, and JavaScript at Mziuri Computer School, then advanced my
          JavaScript skills through the JavaScript Acceleration program at
          Unilab. Currently, I am deepening my front-end expertise by studying
          React at SkillWill, focusing on creating dynamic, interactive, and
          responsive user interfaces. I’m driven by the process of learning new
          technologies and applying them to solve real-world problems. I enjoy
          working on challenges that allow me to combine logic, creativity, and
          clean design.
        </p>
      </main>
    </div>
  );
}

export default App;
