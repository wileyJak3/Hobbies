import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Hobbies'









function App() {
  return (
    <div>
     
      <Card
      hobby = "Rocket League"
      img = "https://steamcdn-a.akamaihd.net/steam/apps/252950/header_alt_assets_11.jpg?t=1585155609.url" 
      details = "Rocket League, the sequel to Supersonic Acrobatic Rocket-Powered Battle-Cars, is a popular videogame that combines soccer and cars into its gameplay. For those who enjoy high-octane reckless driving and the world's most popular sport, Rocket League is the game for you. This cross-genre arena battler is the latest craze on Steam, PS4, Xbox One and Nintendo Switch. Fun for all players and abilities, the game offers both a casual and competitive atmosphere, as well as a ton of laughs. "
      />

      <Card
      hobby = "Programming"
      img = "https://preview.redd.it/ys99ydxu93141.png?auto=webp&s=af33bda797ab42dd91bc25a891c0187497c958ca"
      details = "giving computer instructions "
      />
      <Card
      hobby = "Gardening"
      img = "https://i.pinimg.com/originals/11/78/3c/11783cde5c9880226465b94866e8f0a2.png"
      details = "Growing plants"
      />

    </div>
    

  );
}

export default App;
