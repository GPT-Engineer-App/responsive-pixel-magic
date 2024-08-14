import React from 'react';
import { Button } from './ui/button';

const Sidebar = () => {
  return (
    <aside className="lg:w-1/3 mb-8 lg:mb-0">
      <h2 className="text-xl font-semibold mb-2">Their Side</h2>
      <p className="text-gray-600 mb-4">
        Conversations with the most tragically misunderstood people of our time.
      </p>
      <h3 className="text-lg font-semibold mb-2">About</h3>
      <p className="text-gray-600 mb-4">
        In this show, Eric and Wes dig deep to get to the facts with guests who have
        been labeled villains by a society quick to judge, without actually getting
        the full story. Tune in every...
      </p>
      <h3 className="text-lg font-semibold mb-2">Listen</h3>
      <div className="space-y-2">
        <Button className="w-full justify-start" variant="outline">
          <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
          Spotify
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <span className="w-4 h-4 rounded-full bg-purple-500 mr-2"></span>
          Apple Podcasts
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;