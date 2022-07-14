import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import { Routes, Route } from "react-router-dom";
import img1 from "./imges/img1.jpg";
import img2 from "./imges/img2.jpg";
import img3 from "./imges/img3.jpg";
import img4 from "./imges/img4.jpg";
import img5 from "./imges/img5.jpg";
import img6 from "./imges/img6.jpg";
import img7 from "./imges/img7.jpg";
import MovieList from "./Component/MovieListe";
import Filter from "./Component/Filter/Filter";
import Modal1 from "./Component/Modal/Modal";
import AddNewMovie from "./Component/AddNewMovie/AddNewMovie";
import { useState } from "react";

var moviedata1 = [
  {
    id: Math.random(),
    name: " ACTION MOVIES batman",
    rating: 3,
    imgsrc: img1,
    description:
      "A Dark Knight, the Caped Crusader, ol’ Boogaloo Bats. There is a Batman for all seasons. But whatever you call him, he’s known far and wide as a comic book hero who’s managed to keep relevant in entertainment for decades, re-invented time and time again to answer a nation’s distress Bat-signal all. It was camp colors and biff–bang–pow for the 1960s (the Batman TV show). The ’80s found a taste for blockbuster art deco madness (Tim Burton’s Batman). The ’90s got the best of it (Mask of the Phantasm) and the worst (Batman & Robin). The world of the 2000s demanded realism and it got Christopher Nolan’s The Dark Knight trilogy. Recently, he played nice with the Justice League. But now, Robert Pattinson dons the cowl in 2022’s long-awaited The Batman.",
    trailer: "https://www.youtube.com/embed/Rv0N8yukoxg",
  },
  {
    id: Math.random(),
    name: "the Super heroes",
    rating: 1,
    imgsrc: img2,
    description:
      "A group of astronauts gain superpowers after a cosmic radiation exposure and must use them to oppose the plans of their enemy, Doctor Victor Von Doom.",
    trailer: "https://www.youtube.com/embed/Qn9S97qN8XM",
  },
  {
    id: Math.random(),
    name: "HITMAN",
    rating: 3,
    imgsrc: img3,
    description:
      "A gun-for-hire known only as Agent 47 hired by a group known only as 'The Organization' is ensnared in a political conspiracy, which finds him pursued by both Interpol and the Russian military as he treks across Russia and Eastern Europe.",
    trailer: "https://www.youtube.com/embed/-wb3_T9LMZM",
  },
  {
    id: Math.random(),
    name: "BRUCE LEE",
    rating: 5,
    imgsrc: img4,
    description:
      "Bruce Lee remains the greatest icon of martial arts cinema and a key figure of modern popular media. Had it not been for Bruce Lee and his movies in the early 1970s, it's arguable whether or not the martial arts film genre would have ever penetrated and influenced mainstream North American and European cinema and audiences the way it has over the past four decades. The influence of East Asian martial arts cinema can be seen today in so many other film genres including comedies, action, drama, science fiction, horror and animation... and they all have their roots in the phenomenon that was Bruce Lee.",
    trailer: "https://www.youtube.com/embed/Wcl5633YPIc",
  },
  {
    id: Math.random(),
    name: "HOBBIT",
    rating: 5,
    imgsrc: img5,
    description:
      "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
    trailer: "https://www.youtube.com/embed/C_rjprwxNKo",
  },
  {
    id: Math.random(),
    name: "INDIAN SOLDIER",
    rating: 2,
    imgsrc: img6,
    description:
      "The movie story deals with Jagdish, an army captain, is back in Mumbai for a holiday to be with his parents and two sisters. They want him to get married and finds a bride Nisha for him. After the usual bickerings the couple fall in love. Meanwhile Jagadish an intelligence officer in the military, has a mission to crack down on terrorist sleeper cells in Mumbai. How Jagadish moving around as an ordinary person using his brain and brawn in the correct measure, tracks down the terrorist in his own unique way forms the rest of this escapist entertainer.",
    trailer: "https://www.youtube.com/embed/TgTibdqWHTg",
  },
  {
    id: Math.random(),
    name: "VENOM",
    rating: 4,
    imgsrc: img7,
    description:
      "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
    trailer: "https://www.youtube.com/embed/5c982f2rPYM",
  },
];
function App() {
  const [moviedata, setMoviedata] = useState(moviedata1);

  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  return (
    <div className="App">
      <div className="hed">
        <Filter name={name} setName={setName} rate={rate} setRate={setRate} />
        <Modal1 moviedata={moviedata} setMoviedata={setMoviedata} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<MovieList name={name} rate={rate} moviedata={moviedata} />}
        />
        <Route path="movie/:id" element={<AddNewMovie />} />
      </Routes>
    </div>
  );
}

export default App;
