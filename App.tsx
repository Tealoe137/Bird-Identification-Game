
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { GameStatus, Question, Score, Bird, GameMode } from './types';
import { generateQuestion, shuffle } from './gameLogic';
import { BIRD_LIST } from './birdData';
import MatchingGame from './MatchingGame';
import { ChevronRight, Trophy, RotateCcw, Bird as BirdIcon, CheckCircle, XCircle, Search, Keyboard, Grid } from 'lucide-react';

const App: React.FC = () => {
  const [status, setStatus] = useState<GameStatus>(GameStatus.START);
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.GUESSING);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedBirdId, setSelectedBirdId] = useState<string | null>(null);
  const [score, setScore] = useState<Score>({ correct: 0, total: 0 });
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedBirdIds, setSelectedBirdIds] = useState<Set<string>>(new Set(BIRD_LIST.map(b => b.id)));
  const [hardMode, setHardMode] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const birdsByOrder = useMemo(() => {
    const groups: Record<string, Bird[]> = {};
    BIRD_LIST.forEach(bird => {
      const order = bird.order || 'Other';
      if (!groups[order]) groups[order] = [];
      groups[order].push(bird);
    });
    return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const toggleBirdSelection = (id: string) => {
    setSelectedBirdIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleOrderSelection = (order: string, birds: Bird[]) => {
    const birdIds = birds.map(b => b.id);
    const allSelected = birdIds.every(id => selectedBirdIds.has(id));
    
    setSelectedBirdIds(prev => {
      const next = new Set(prev);
      if (allSelected) {
        birdIds.forEach(id => next.delete(id));
      } else {
        birdIds.forEach(id => next.add(id));
      }
      return next;
    });
  };

  const selectAllBirds = () => {
    setSelectedBirdIds(new Set(BIRD_LIST.map(b => b.id)));
  };

  const deselectAllBirds = () => {
    setSelectedBirdIds(new Set());
  };

  // Load a new question
  const loadNewQuestion = useCallback(() => {
    const allowedBirds = BIRD_LIST.filter(b => selectedBirdIds.has(b.id));
    if (allowedBirds.length < 4) return;
    
    setCurrentQuestion(generateQuestion(allowedBirds));
    setSelectedBirdId(null);
    setIsAnswered(false);
    setTypedAnswer('');
    setShowSuggestions(false);
    setStatus(GameStatus.PLAYING);
  }, [selectedBirdIds]);

  const handleStartGame = (mode: GameMode) => {
    setGameMode(mode);
    setScore({ correct: 0, total: 0 });
    if (mode === GameMode.GUESSING) {
      loadNewQuestion();
    } else {
      setStatus(GameStatus.PLAYING);
    }
  };

  const handleOptionClick = (bird: Bird) => {
    if (isAnswered) return;
    
    setSelectedBirdId(bird.id);
    setIsAnswered(true);
    
    const isCorrect = bird.id === currentQuestion?.correctBird.id;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleTypedSubmit = (birdName: string) => {
    if (isAnswered || !currentQuestion) return;
    
    const matchedBird = BIRD_LIST.find(b => b.name.toLowerCase() === birdName.toLowerCase());
    if (!matchedBird) return;

    setSelectedBirdId(matchedBird.id);
    setIsAnswered(true);
    setShowSuggestions(false);
    
    const isCorrect = matchedBird.id === currentQuestion.correctBird.id;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const suggestions = useMemo(() => {
    if (!typedAnswer || isAnswered) return [];
    return BIRD_LIST.filter(b => 
      b.name.toLowerCase().includes(typedAnswer.toLowerCase())
    ).slice(0, 5);
  }, [typedAnswer, isAnswered]);

  const handleNextQuestion = () => {
    loadNewQuestion();
  };

  const resetGame = () => {
    setStatus(GameStatus.START);
    setScore({ correct: 0, total: 0 });
  };

  if (status === GameStatus.START) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-emerald-900 text-white relative overflow-hidden">
        {/* Decorative Background Icons */}
        <BirdIcon className="absolute -top-10 -left-10 w-64 h-64 text-emerald-800 opacity-20 rotate-12" />
        <BirdIcon className="absolute -bottom-10 -right-10 w-64 h-64 text-emerald-800 opacity-20 -rotate-12" />

        <div className="z-10 text-center max-w-4xl w-full flex flex-col items-center">
          <div className="inline-block p-4 bg-emerald-800 rounded-full mb-6 shadow-xl border-4 border-emerald-700">
            <BirdIcon className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl font-black mb-4 tracking-tight drop-shadow-lg">Avian IQ</h1>
          <p className="text-emerald-100 text-lg mb-8 font-medium max-w-lg">
            Identify unique bird species from California and beyond.
            Select the birds you want to practice below.
          </p>

          <div className="bg-emerald-800/50 p-6 rounded-2xl w-full max-w-3xl mb-8 backdrop-blur-sm border border-emerald-700/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold">Select Birds ({selectedBirdIds.size}/{BIRD_LIST.length})</h2>
              <div className="flex flex-wrap gap-2">
                <button onClick={selectAllBirds} className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 rounded text-sm font-medium transition-colors">Select All</button>
                <button onClick={deselectAllBirds} className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 rounded text-sm font-medium transition-colors">Deselect All</button>
                <button 
                  onClick={() => setHardMode(!hardMode)} 
                  className={`px-3 py-1 rounded text-sm font-bold transition-all flex items-center gap-2 ${hardMode ? 'bg-yellow-500 text-emerald-900 shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 'bg-emerald-700 text-emerald-100'}`}
                >
                  <Keyboard className="w-4 h-4" />
                  Hard Mode: {hardMode ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
            
            <div className="space-y-6 max-h-96 overflow-y-auto pr-4 custom-scrollbar text-left">
              {birdsByOrder.map(([order, birds]) => {
                const orderBirdIds = birds.map(b => b.id);
                const allSelected = orderBirdIds.every(id => selectedBirdIds.has(id));
                const someSelected = orderBirdIds.some(id => selectedBirdIds.has(id)) && !allSelected;

                return (
                  <div key={order} className="bg-emerald-900/40 rounded-xl p-4 border border-emerald-700/30">
                    <label className="flex items-center space-x-3 mb-3 pb-2 border-b border-emerald-700/30 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox" 
                          checked={allSelected}
                          ref={el => el && (el.indeterminate = someSelected)}
                          onChange={() => toggleOrderSelection(order, birds)}
                          className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500 bg-emerald-900 border-emerald-600 cursor-pointer"
                        />
                      </div>
                      <span className="font-bold text-emerald-200 group-hover:text-white transition-colors uppercase tracking-wider text-sm">{order}</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {birds.map(bird => (
                        <label key={bird.id} className="flex items-center space-x-3 p-2 rounded hover:bg-emerald-700/50 cursor-pointer transition-colors group">
                          <input 
                            type="checkbox" 
                            checked={selectedBirdIds.has(bird.id)}
                            onChange={() => toggleBirdSelection(bird.id)}
                            className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500 bg-emerald-900 border-emerald-600 cursor-pointer"
                          />
                          <span className="text-sm truncate text-emerald-100 group-hover:text-white" title={bird.name}>{bird.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl justify-center">
            <button
              onClick={() => handleStartGame(GameMode.GUESSING)}
              disabled={selectedBirdIds.size < 4}
              className="flex-1 group relative inline-flex items-center justify-center px-8 py-5 font-bold text-white transition-all duration-200 bg-emerald-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 hover:bg-emerald-500 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <BirdIcon className="mr-2 w-5 h-5" />
              {selectedBirdIds.size < 4 ? 'Select at least 4 birds' : 'Guessing Game'}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleStartGame(GameMode.MATCHING)}
              disabled={selectedBirdIds.size < 8}
              className="flex-1 group relative inline-flex items-center justify-center px-8 py-5 font-bold text-white transition-all duration-200 bg-stone-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 hover:bg-stone-800 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Grid className="mr-2 w-5 h-5" />
              {selectedBirdIds.size < 8 ? 'Select at least 8 birds' : 'Matching Game'}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (status === GameStatus.PLAYING && gameMode === GameMode.MATCHING) {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BirdIcon className="text-emerald-600 w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">Avian IQ</span>
          </div>
          <button onClick={resetGame} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
            <RotateCcw className="w-5 h-5 text-stone-500" />
          </button>
        </header>
        <main>
          <MatchingGame 
            allowedBirds={BIRD_LIST.filter(b => selectedBirdIds.has(b.id))} 
            onReset={resetGame} 
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200">
      {/* Header / Scoreboard */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BirdIcon className="text-emerald-600 w-8 h-8" />
          <span className="text-xl font-bold tracking-tight">Avian IQ</span>
        </div>
        
        <div className="flex items-center bg-stone-100 rounded-full px-4 py-1.5 shadow-inner">
          <Trophy className="w-4 h-4 text-yellow-500 mr-2" />
          <span className="font-bold text-stone-700">
            {score.correct} <span className="text-stone-400 text-sm mx-1">/</span> {score.total}
          </span>
        </div>
        
        <button onClick={resetGame} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
          <RotateCcw className="w-5 h-5 text-stone-500" />
        </button>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
        {currentQuestion && (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Image Section */}
            <div className="w-full lg:w-3/5 bg-stone-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="aspect-square relative group bg-stone-200 flex items-center justify-center">
                <img
                  src={currentQuestion.imageUrl}
                  alt="Guess the bird"
                  className="max-w-full max-h-full object-contain transition-transform duration-500"
                />
                {isAnswered && (
                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[2px]">
                      {selectedBirdId === currentQuestion.correctBird.id ? (
                        <div className="bg-emerald-500 p-6 rounded-full shadow-2xl animate-bounce">
                          <CheckCircle className="w-20 h-20 text-white" />
                        </div>
                      ) : (
                        <div className="bg-red-500 p-6 rounded-full shadow-2xl animate-shake">
                          <XCircle className="w-20 h-20 text-white" />
                        </div>
                      )}
                   </div>
                )}
              </div>
            </div>

            {/* Options Section */}
            <div className="w-full lg:w-2/5 flex flex-col space-y-4">
              <div className="mb-2">
                <h2 className="text-2xl font-black text-stone-800 mb-1">
                  {hardMode ? 'Identify this bird' : 'Which bird is this?'}
                </h2>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">
                  {hardMode ? 'Type the name' : 'Select the correct name'}
                </p>
              </div>

              {!hardMode ? (
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options.map((option) => {
                    const isCorrect = option.id === currentQuestion.correctBird.id;
                    const isSelected = option.id === selectedBirdId;
                    
                    let buttonClass = "w-full text-left px-6 py-5 rounded-2xl border-2 transition-all duration-200 font-bold text-lg ";
                    
                    if (!isAnswered) {
                      buttonClass += "bg-white border-stone-200 hover:border-emerald-500 hover:shadow-lg hover:-translate-y-0.5 text-stone-700";
                    } else {
                      if (isCorrect) {
                        buttonClass += "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-md ring-2 ring-emerald-500 ring-opacity-20";
                      } else if (isSelected) {
                        buttonClass += "bg-red-50 border-red-500 text-red-700 shadow-md ring-2 ring-red-500 ring-opacity-20";
                      } else {
                        buttonClass += "bg-stone-50 border-transparent text-stone-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleOptionClick(option)}
                        disabled={isAnswered}
                        className={buttonClass}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option.name}</span>
                          {isAnswered && isCorrect && <CheckCircle className="w-6 h-6" />}
                          {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="relative">
                  <div className={`flex items-center bg-white rounded-2xl border-2 transition-all duration-200 overflow-hidden ${isAnswered ? (selectedBirdId === currentQuestion.correctBird.id ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50') : 'border-stone-200 focus-within:border-emerald-500 focus-within:shadow-lg'}`}>
                    <Search className={`ml-4 w-5 h-5 ${isAnswered ? (selectedBirdId === currentQuestion.correctBird.id ? 'text-emerald-500' : 'text-red-500') : 'text-stone-400'}`} />
                    <input
                      type="text"
                      value={typedAnswer}
                      onChange={(e) => {
                        setTypedAnswer(e.target.value);
                        setShowSuggestions(true);
                      }}
                      onFocus={() => setShowSuggestions(true)}
                      disabled={isAnswered}
                      placeholder="Type bird name..."
                      className="w-full px-4 py-5 font-bold text-lg focus:outline-none bg-transparent"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && suggestions.length > 0) {
                          handleTypedSubmit(suggestions[0].name);
                        }
                      }}
                    />
                    {isAnswered && (
                      <div className="mr-4">
                        {selectedBirdId === currentQuestion.correctBird.id ? (
                          <CheckCircle className="w-6 h-6 text-emerald-500" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>

                  {showSuggestions && suggestions.length > 0 && !isAnswered && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                      {suggestions.map((bird) => (
                        <button
                          key={bird.id}
                          onClick={() => handleTypedSubmit(bird.name)}
                          className="w-full text-left px-6 py-4 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-bold border-b border-stone-50 last:border-0"
                        >
                          {bird.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {isAnswered && selectedBirdId !== currentQuestion.correctBird.id && (
                    <div className="mt-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                      <p className="text-red-800 text-sm font-medium">
                        Correct answer: <span className="font-bold">{currentQuestion.correctBird.name}</span>
                      </p>
                    </div>
                  )}
                </div>
              )}

              {isAnswered && (
                <div className="pt-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <p className="text-emerald-800 text-sm font-medium">
                      <span className="font-bold">Did you know?</span> {currentQuestion.correctBird.name} is part of the <span className="underline decoration-emerald-400">{currentQuestion.correctBird.group}</span> group.
                    </p>
                  </div>
                  
                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-5 bg-stone-900 text-white rounded-2xl font-black text-xl hover:bg-stone-800 shadow-xl flex items-center justify-center group"
                  >
                    Next Bird
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s cubic-bezier(.36,.07,.19,.97) both;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(4, 120, 87, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(4, 120, 87, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(4, 120, 87, 0.8);
        }
      `}</style>
    </div>
  );
};

export default App;
