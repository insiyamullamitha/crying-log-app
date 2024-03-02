import { useState } from "react";
import { ExclamationTriangle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Home() {
  const cryReasons = [
    ["Monday Blues", "Work got me down. Spilled coffee on my favorite shirt."],
    ["Tech Issues", "Computer crashed. Lost all my work."],
    ["Spicy Food Regret", "My stomach is on fire."],
    ["Sad Movie", "The dog dies at the end."],
    ["Stress", "Too many things to do, not enough time."],
    ["Cat Video", "It was just so cute."],
  ];

  const [currentReasonIndex, setCurrentReasonIndex] = useState(
    Math.floor(Math.random() * cryReasons.length)
  );

  const nextCryReason = () => {
    setCurrentReasonIndex((prevIndex) => (prevIndex + 1) % cryReasons.length);
  };

  return (
    <div className="flex p-10 rounded-lg mt-12 justify-center items-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Crying Log</h1>
        <p className="text-gray-400 mb-8">
          Because emotions need a good log too...
        </p>

        <div
          className="bg-gray-700 p-8 rounded-lg flex flex-col items-center shadow-md mb-8 cursor-pointer"
          onClick={nextCryReason}
        >
          <ExclamationTriangle className="text-red-500 text-4xl mb-2" />
          <h2 className="text-xl font-bold mb-2">
            {cryReasons[currentReasonIndex][0]}
          </h2>
          <p className="text-gray-400 text-center">
            {cryReasons[currentReasonIndex][1]}
          </p>
        </div>

        <p className="text-gray-400 flex items-center justify-center">
          Remember, it's okay to cry. Let it out!
        </p>
        <Link to="/signup" className="text-brighterBlue">
          <button className="bg-brighterBlue text-white p-2 rounded mt-4">
            Make Your Next Cry Count
          </button>
        </Link>
      </div>
    </div>
  );
}
