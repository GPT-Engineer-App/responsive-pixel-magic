import React from 'react';
import EpisodeCard from './EpisodeCard';

const episodes = [
  {
    date: 'August 12, 2024',
    title: '1: Shadow Government Exposed',
    description: 'Uncovering the truth behind global conspiracy theories',
    plays: 9,
    likes: 0,
  },
  {
    date: 'August 12, 2024',
    title: '2: Vaccine Wars',
    description: 'The controversy surrounding vaccination in modern society',
    plays: 5,
    likes: 1,
  },
  {
    date: 'August 12, 2024',
    title: '3: DIY or Die Trying',
    description: 'Hilarious DIY disaster stories and how to avoid them',
    plays: 7,
    likes: 1,
  },
];

const EpisodeList = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Episodes</h2>
      <div className="space-y-4">
        {episodes.map((episode, index) => (
          <EpisodeCard key={index} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;