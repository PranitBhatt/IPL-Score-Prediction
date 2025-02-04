import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import csk from "../assets/csk.jpg"
import mi from "../assets/mi.jpg"
import delhi from "../assets/delhi.jpg"
import punjab from "../assets/punjab.jpg"
import srh from "../assets/srh.jpg"
import rcb from "../assets/rcb.jpg"
import rr from "../assets/rr.jpg"
import kkr from "../assets/kkr.jpg"

const Home = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const teams = [
    { name: 'CSK', image: csk },
    { name: 'MI', image: mi },
    { name: 'Punjab', image: punjab },
    { name: 'SRH', image: srh },
    { name: 'RCB', image: rcb },
    { name: 'Delhi', image: delhi },
    { name: 'RR', image: rr },
    { name: 'KKR', image: kkr }
  ];

  useEffect(() => {
    const leftTimer = setInterval(() => {
      setLeftIndex((prevIndex) => (prevIndex + 1) % teams.length);
    }, 2500);

    const rightTimer = setInterval(() => {
      setRightIndex((prevIndex) => (prevIndex + 1) % teams.length);
    }, 2500);

    return () => {
      clearInterval(leftTimer);
      clearInterval(rightTimer);
    };
  }, [teams.length]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Left side slideshow */}
      <div className="absolute top-[10%] left-[10%] w-1/4 w-36 h-36">
        {teams.map((team, index) => {
          return (
            <img
            width="200"
            height="200"
              key={`left-${team.name}`}
              src={team.image}
              alt={team.name}
              className={`rounded-[10%] h-[60%] w-full transition-opacity duration-500 absolute ${index === leftIndex ? 'opacity-100' : 'opacity-0'
                }`}
            />
          )
        })}
      </div>

      {/* Right side slideshow */}
      <div className="absolute top-[10%] left-[70%] w-1/4  w-36 h-36">
        {teams.map((team, index) => (
          <img
            key={`right-${team.name}`}
            src={team.image}
            alt={team.name}
            className={`rounded-[10%] h-[60%] w-full transition-opacity duration-500 absolute ${index === rightIndex ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
      </div>

      {/* Center button */}
      <Link
        to="/register"
        className="absolute top-[24%] left-[47%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <button className="w-[150px] text-xl px-5 py-5 rounded-lg border-2 border-yellow-400 hover:bg-red-500 hover:text-white transition-colors duration-300">
          Join Us!
        </button>
      </Link>
    </div>
  );
};

export default Home;