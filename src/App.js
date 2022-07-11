import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
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
import { useState } from "react";

var moviedata1 = [
  { id: Math.random(), name: " ACTION MOVIES batman", rating: 3, imgsrc: img1 },
  { id: Math.random(), name: "the Super heroes", rating: 1, imgsrc: img2 },
  { id: Math.random(), name: "HITMAN", rating: 3, imgsrc: img3 },
  { id: Math.random(), name: "BRUCE LEE", rating: 5, imgsrc: img4 },
  { id: Math.random(), name: "HOBBIT", rating: 5, imgsrc: img5 },
  {
    id: Math.random(),
    name: "INDIAN SOLDIER",
    rating: 2,
    imgsrc: img6,
  },
  { id: Math.random(), name: "VENOM", rating: 4, imgsrc: img7 },
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
      <MovieList name={name} rate={rate} moviedata={moviedata} />
    </div>
  );
}

export default App;
