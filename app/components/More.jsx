"use client";
import React, {useState} from 'react';
import DanceCard from './DanceCard.jsx';

const More = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const dances = [
    {
      imageUrl: '/images/dance/bridge.png',
      title: 'Stepping Stone Bridge',
      videoUrl: 'https://www.youtube.com/watch?v=JqtrOGnfq3g',
    },
    {
      imageUrl: '/images/dance/crane.png',
      title: 'Red-Crowned Crane',
      videoUrl: 'https://www.youtube.com/watch?v=eElzseP8_Gk',
    },
    {
        imageUrl: '/images/dance/crystal-waves.png',
        title: 'Drunken On the Crystal Waves',
        videoUrl: 'https://www.youtube.com/watch?v=IuPNtdANUgI&t=12624s',
    },
    {
        imageUrl: '/images/dance/spring-breeze.png',
        title: 'Spring Breeze',
        videoUrl: 'https://www.youtube.com/watch?v=SCAZdcogfpI',
    },
    {
        imageUrl: '/images/dance/tang-figurines.png',
        title: 'Awakening of the Tang Figurines',
        videoUrl: 'https://www.youtube.com/watch?v=LRAMewySrFc',
    },
    {
        imageUrl: '/images/dance/tea.png',
        title: 'Tea Dance',
        videoUrl: 'https://youtu.be/RPBWovOekiU',
    },
    {
        imageUrl: '/images/dance/xiangyunfei.png',
        title: 'Xiang Yun Fei',
        videoUrl: 'https://www.youtube.com/watch?v=1zE2FOBybMc',
    },
  ];

  const nextDance = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dances.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevDance = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dances.length - 1 : prevIndex - 1
    );
  };

  return (
    <div><h2 className="text-4xl font-bold text-white mb-9">More About Me</h2>
    <p className="text-base lg:text-lg text-white mb-8">
        When I am not spending time learning new technologies and building new projects, I love to dance!  I have been dancing since I was 4, and often partake in competitions or performances.  Check out some of my dances by clicking on the cards below!
    </p>
    <div className="flex flex-col items-center space-y-4">
    
      <DanceCard
        imageUrl={dances[currentIndex].imageUrl}
        title={dances[currentIndex].title}
        videoUrl={dances[currentIndex].videoUrl}
      />
      <div className="flex justify-between space-x-4">
      <button onClick={prevDance} className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-[#b2a5db] to-[#faaca8] hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Prev</span>
            </button>
            <button onClick={nextDance} className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-[#b2a5db] to-[#faaca8] hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Next</span>
            </button>
      </div>
    </div>
    </div>
  );
};

export default More;