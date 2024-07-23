import { useState } from "react";
import "./App.css";

export default function App() {
  let [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setIsLiked  (!isLiked);
  };
  return (
    <>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </>
  );
}
