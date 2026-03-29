
import React, { useState, useEffect } from 'react';
import { Bird } from './types';
import { shuffle } from './gameLogic';
import { CheckCircle, RotateCcw } from 'lucide-react';

interface MatchingGameProps {
  allowedBirds: Bird[];
  onReset: () => void;
}

interface MatchingItem {
  id: string;
  name: string;
  imageUrl: string;
  type: 'image' | 'name';
  uniqueId: string;
}

const MatchingGame: React.FC<MatchingGameProps> = ({ allowedBirds, onReset }) => {
  const [items, setItems] = useState<MatchingItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MatchingItem | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [isWrong, setIsWrong] = useState(false);

  const initializeGame = () => {
    const birdsToUse: Bird[] = allowedBirds.length >= 8 ? allowedBirds : allowedBirds; // Fallback handled by slice
    const selectedBirds: Bird[] = shuffle<Bird>(birdsToUse).slice(0, 8);
    
    const images: MatchingItem[] = selectedBirds.map((bird: Bird) => ({
      id: bird.id,
      name: bird.name,
      imageUrl: bird.images[Math.floor(Math.random() * bird.images.length)],
      type: 'image',
      uniqueId: `image-${bird.id}`
    }));
    
    const names: MatchingItem[] = selectedBirds.map((bird: Bird) => ({
      id: bird.id,
      name: bird.name,
      imageUrl: '',
      type: 'name',
      uniqueId: `name-${bird.id}`
    }));
    
    setItems(shuffle([...images, ...names]));
    setMatchedIds(new Set());
    setSelectedItem(null);
    setIsWrong(false);
  };

  useEffect(() => {
    if (allowedBirds.length > 0) {
      initializeGame();
    }
  }, [allowedBirds]);

  const handleItemClick = (item: MatchingItem) => {
    if (matchedIds.has(item.id) || isWrong) return;

    if (!selectedItem) {
      setSelectedItem(item);
    } else {
      if (selectedItem.uniqueId === item.uniqueId) {
        setSelectedItem(null);
        return;
      }

      if (selectedItem.id === item.id && selectedItem.type !== item.type) {
        // Match!
        setMatchedIds(prev => new Set(prev).add(item.id));
        setSelectedItem(null);
      } else {
        // Wrong match
        setIsWrong(true);
        setSelectedItem(item);
        setTimeout(() => {
          setIsWrong(false);
          setSelectedItem(null);
        }, 1000);
      }
    }
  };

  const isGameOver = matchedIds.size === Math.min(items.length / 2, 8);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-black text-stone-800">Matching Game</h2>
          <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">
            Match the bird names with their pictures
          </p>
        </div>
        <div className="flex gap-4">
          <button onClick={initializeGame} className="p-2 hover:bg-stone-100 rounded-full transition-colors" title="Reset Game">
            <RotateCcw className="w-6 h-6 text-stone-500" />
          </button>
        </div>
      </div>

      {isGameOver ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-6 animate-in zoom-in duration-500">
          <div className="bg-emerald-500 p-8 rounded-full shadow-2xl">
            <CheckCircle className="w-24 h-24 text-white" />
          </div>
          <h3 className="text-4xl font-black text-stone-800">All Matched!</h3>
          <div className="flex gap-4">
            <button
              onClick={initializeGame}
              className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black text-xl hover:bg-emerald-500 shadow-xl transition-all"
            >
              Play Again
            </button>
            <button
              onClick={onReset}
              className="px-10 py-4 bg-stone-900 text-white rounded-2xl font-black text-xl hover:bg-stone-800 shadow-xl transition-all"
            >
              Main Menu
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item) => {
            const isMatched = matchedIds.has(item.id);
            const isSelected = selectedItem?.uniqueId === item.uniqueId;
            
            if (isMatched) return <div key={item.uniqueId} className="aspect-square sm:aspect-auto sm:h-32 opacity-0 pointer-events-none" />;

            return (
              <button
                key={item.uniqueId}
                onClick={() => handleItemClick(item)}
                className={`
                  relative aspect-square sm:aspect-auto sm:h-32 rounded-2xl border-2 transition-all duration-200 overflow-hidden flex items-center justify-center p-2
                  ${isSelected ? (isWrong ? 'border-red-500 bg-red-50 ring-2 ring-red-500 ring-opacity-20' : 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500 ring-opacity-20') : 'border-stone-200 bg-white hover:border-emerald-300 hover:shadow-md'}
                `}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.imageUrl}
                    alt="Bird"
                    className="w-full h-full object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-sm sm:text-base font-bold text-stone-700 text-center leading-tight px-1">
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MatchingGame;
