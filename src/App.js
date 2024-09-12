import logo from './logo.svg';
import './App.css';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
     <h1>Functional components</h1>
     <h1>Components must be in src folder</h1>
     <h2>And also we are using props, props used for add content</h2>

    <Player  
       name="Virat" 
       role="Virat Kohli is an Indian international cricketer who plays Test and One Day International cricket for the Indian national team. A former captain in all formats, Kohli retired from Twenty20 International following India's win at the 2024 T20 World Cup."
       pic="./images/virat.webp"
       ></Player>
    <Player
       name="bumrah"
      pic="./images/bumrah.webp"
       role="Jasprit Jasbirsingh Bumrah is an Indian international cricketer who plays for the Indian cricket team in all formats of the game. A right-arm fast bowler with a unique bowling action, Bumrah is widely regarded as one of the best bowlers in the world and one of the greatest fast bowlers India has ever produced."
    ></Player>
    <Player
        name="rohitsharma"
         pic="./images/rohitsharma.webp"
        role="Rohit Gurunath Sharma is an Indian international cricketer who currently plays for and captains the India national cricket team in Test and One Day International matches."
    ></Player>
    <Player
        name="Shubman Gill"
         pic="./images/Shubman Gill.webp"
        role="Shubman Gill is an Indian international cricketer who represents the Indian cricket team across all three formats. He is the vice-captain of India in T20 Internationals and One Day Internationals. He is the captain of the Gujarat Titans in the Indian Premier League and plays for Punjab in domestic cricket."
    ></Player>
    <Player
        name="suryakumar"
         pic="./images/suryakumar.webp"
        role="Suryakumar Ashok Yadav, also known by the initialism SKY, is an Indian international cricketer who is the current T20I captain of Indian cricket team. He plays as a right-handed middle-order batter and is an occasional right-arm off break bowler"
    ></Player>
    </div>
  );
}

export default App;
