import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import EpisodeList from '../components/EpisodeList';
import AudioPlayer from '../components/AudioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        <Sidebar />
        <main className="lg:flex-1 lg:ml-8">
          <EpisodeList />
        </main>
      </div>
      <AudioPlayer />
    </div>
  );
};

export default Index;