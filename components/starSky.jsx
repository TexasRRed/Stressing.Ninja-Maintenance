import { useEffect, useState } from 'react';
import anime from "animejs";

export default function StarrySky() {
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);

  const starryNight = () => {
    anime({
      targets: '#sky .star',
      opacity: [
        {
          duration: 700,
          value: '0',
        },
        {
          duration: 700,
          value: '1',
        },
      ],
      easing: 'linear',
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };

  const shootingStars = () => {
    anime({
      targets: '#shootingstars .wish',
      easing: 'linear',
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: '1',
        },
      ],
      width: [
        {
          value: '150px',
        },
        {
          value: '0px',
        },
      ],
      translateX: 350,
    });
  };

  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };

  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };

  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(vh)).toString();
  };

  useEffect(() => {
    setVw(
      Math.max(
        document.documentElement.clientWidth,
        typeof window !== 'undefined' ? window.innerWidth : 0
      )
    );
    setVh(
      Math.max(
        document.documentElement.clientHeight,
        typeof window !== 'undefined' ? window.innerHeight : 0
      )
    );

    starryNight();
    shootingStars();
  }, []);

  const num = 60;

  const starElements = [...Array(num)].map((_, y) => (
    <circle
      key={y}
      cx={getRandomX()}
      cy={getRandomY()}
      r={randomRadius()}
      stroke="none"
      strokeWidth="0"
      fill="white"
      className="star"
    />
  ));

  const shootingStarElements = [...Array(60)].map((_, y) => (
    <div
      key={y}
      className="wish"
      style={{
        left: `${getRandomY()}px`,
        top: `${getRandomX()}px`,
      }}
    />
  ));

  return (
    <div id="App">
      <svg id="sky">{starElements}</svg>
      <div id="shootingstars">{shootingStarElements}</div>
    </div>
  );
}