import React from 'react';
import { Button } from './ui/button';

const EpisodeCard = ({ episode }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-gray-500 text-sm">{episode.date}</p>
      <h3 className="text-xl font-semibold mt-1">{episode.title}</h3>
      <p className="text-gray-600 mt-2">{episode.description}</p>
      <p className="text-gray-500 text-sm mt-2">
        {episode.plays} Plays & {episode.likes} Likes
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <Button variant="outline" className="text-pink-500">Listen</Button>
        <Button variant="outline" className="text-pink-500">{episode.likes > 0 ? 'Unlike' : 'Like'}</Button>
        <Button variant="outline" className="text-pink-500">Bookmark</Button>
        <Button variant="outline" className="text-pink-500">Share</Button>
        <Button variant="outline" className="text-pink-500">Remix</Button>
      </div>
    </div>
  );
};

export default EpisodeCard;