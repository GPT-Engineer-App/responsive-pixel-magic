import React from 'react';
import { Button } from './ui/button';
import { SkipBack, Play, SkipForward, Repeat, Volume2 } from 'lucide-react';

const AudioPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon"><SkipBack className="h-6 w-6" /></Button>
          <Button variant="ghost" size="icon" className="mx-2"><Play className="h-6 w-6" /></Button>
          <Button variant="ghost" size="icon"><SkipForward className="h-6 w-6" /></Button>
        </div>
        <div className="flex-1 mx-4">
          <h4 className="text-lg font-semibold">1: Shadow Government Exposed</h4>
          <div className="bg-gray-200 h-1 w-full mt-2">
            <div className="bg-black h-1 w-1/3"></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>00:00</span>
            <span>00:00</span>
          </div>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" size="icon"><Repeat className="h-6 w-6" /></Button>
          <Button variant="ghost" size="icon"><Volume2 className="h-6 w-6" /></Button>
          <span className="ml-2">1x</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;