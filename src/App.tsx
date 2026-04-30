import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  Star, 
  Heart, 
  Trophy, 
  ChevronRight, 
  Music, 
  Puzzle, 
  ArrowLeft,
  Cloud,
  Sun,
  Gamepad2,
  Shuffle,
  Zap,
  Smile,
  Frown,
  CheckCircle2
} from 'lucide-react';
import { VOCAB_LIBRARY, WordData } from './data/vocabulary';
import mascotImg from './assets/mascot.png';
import skyImg from './assets/sky.png';

// --- Types ---
type Phase = 'home' | 'intro' | 'expressions' | 'test' | 'activity' | 'congrats';
type Mode = 'level' | 'random' | 'interests';

const PRAISE_PHRASES = [
  "You're a genius!", "Amazing work!", "Look at you go!", 
  "Superstar!", "Bravo!", "Fantastic!", "High five!", 
  "Keep it up!", "You're doing great!", "So proud of you!"
];

// --- Sub-Components ---

const MascotPraise = ({ message }: { message: string }) => (
  <motion.div 
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    className="mascot-praise"
  >
    <div className="speech-bubble animate-wiggle">{message}</div>
    <img src={mascotImg} alt="Mascot" className="w-full animate-bounce" />
  </motion.div>
);

const Home = ({ onStart, likedCategories }: { onStart: (mode: Mode, keyword?: string) => void, likedCategories: string[] }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onStart('interests', searchQuery.trim());
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-8 py-4"
    >
      <div className="text-center">
        <h1 className="text-5xl font-black text-gradient mb-2">Play English!</h1>
        <p className="text-xl font-bold text-gray-500">Let's learn new words today!</p>
      </div>

      <div className="home-btn-container">
        {!isSearching ? (
          <>
            <button onClick={() => onStart('level')} className="home-btn level">
              <span>Level Up!</span>
              <Zap className="w-10 h-10" />
            </button>
            <button onClick={() => onStart('random')} className="home-btn random">
              <span>Random Play</span>
              <Shuffle className="w-10 h-10" />
            </button>
            <button onClick={() => setIsSearching(true)} className="home-btn interests">
              <span>My Favorites</span>
              <Heart className="w-10 h-10 fill-current" />
            </button>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-bubble border-primary flex flex-col gap-4"
          >
            <h3 className="text-2xl font-black text-primary">What do you like?</h3>
            <form onSubmit={handleSearch} className="flex flex-col gap-3">
              <input 
                autoFocus
                type="text" 
                placeholder="Ex: Cooking, Animals, Space..."
                className="w-full py-4 px-6 rounded-2xl border-4 border-primary/20 focus:border-primary outline-none text-xl font-bold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex gap-2">
                <button type="submit" className="btn-chunky flex-1 py-3 text-lg">Search!</button>
                <button type="button" onClick={() => setIsSearching(false)} className="btn-chunky btn-secondary px-6 py-3 text-lg">Back</button>
              </div>
            </form>
            {likedCategories.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-bold text-gray-400 mb-2">Your favorite topics:</p>
                <div className="flex flex-wrap gap-2">
                  {likedCategories.map(cat => (
                    <span 
                      key={cat} 
                      onClick={() => onStart('interests', cat)}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold cursor-pointer hover:bg-primary hover:text-white transition-colors"
                    >
                      #{cat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ClickableWord = ({ text, targetWord }: { text: string, targetWord: string }) => {
  const [isActive, setIsActive] = useState(false);

  // Simple sound effect simulation
  const playPop = () => {
    setIsActive(true);
    // In a real app, you'd use a sound library or new Audio('/pop.mp3').play();
    console.log("Playing cute sound for:", targetWord);
    setTimeout(() => setIsActive(false), 500);
  };

  const parts = text.split(new RegExp(`(${targetWord})`, 'gi'));
  
  return (
    <span className="font-bold leading-relaxed">
      {parts.map((part, i) => (
        part.toLowerCase() === targetWord.toLowerCase() ? (
          <motion.span 
            key={i}
            whileTap={{ scale: 1.3 }}
            onClick={playPop}
            className={`clickable-word ${isActive ? 'active' : ''}`}
          >
            {part}
          </motion.span>
        ) : (
          <span key={i}>{part}</span>
        )
      ))}
    </span>
  );
};

const Expressions = ({ 
  data, 
  onNext, 
  onToggleFamiliar, 
  onSetDifficulty,
  familiarExpressions,
  difficultyMap 
}: { 
  data: WordData, 
  onNext: () => void,
  onToggleFamiliar: (id: string) => void,
  onSetDifficulty: (id: string, diff: 'easy' | 'hard') => void,
  familiarExpressions: string[],
  difficultyMap: Record<string, 'easy' | 'hard'>
}) => {
  const [page, setPage] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const itemsPerPage = 3;
  const totalPages = 3; 
  
  const currentItems = data.expressions.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-gradient">
          Step {page + 1}: Let's practice!
        </h2>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${i === page ? 'bg-primary' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {currentItems.map((exp, i) => {
          const expId = `${data.word}_${page * itemsPerPage + i}`;
          const currentDiff = difficultyMap[expId];
          const isFamiliar = familiarExpressions.includes(expId);
          const isExpanded = expandedId === expId;

          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-bubble py-6 flex flex-col gap-4 border-2 hover:border-primary transition-colors overflow-hidden"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 overflow-hidden">
                  <div className="expression-text-container">
                    <ClickableWord text={exp.en} targetWord={data.word} />
                  </div>
                  <p className="text-sm text-gray-400 font-medium mt-1 truncate">{exp.ko}</p>
                </div>
                <button className="text-secondary hover:scale-125 transition-transform flex-shrink-0">
                  <Volume2 className="w-6 h-6" />
                </button>
              </div>

              <div className="feedback-container">
                <button 
                  onClick={() => onToggleFamiliar(expId)}
                  className={`feedback-btn ${isFamiliar ? 'active like' : ''}`}
                >
                  <CheckCircle2 className="w-4 h-4" /> I know!
                </button>
                {exp.more && (
                  <button 
                    onClick={() => setExpandedId(isExpanded ? null : expId)}
                    className={`feedback-btn ${isExpanded ? 'active' : 'bg-quaternary/10 text-quaternary border-quaternary/20'}`}
                  >
                    <Sparkles className="w-4 h-4" /> More
                  </button>
                )}
                <button 
                  onClick={() => onSetDifficulty(expId, 'easy')}
                  className={`feedback-btn ${currentDiff === 'easy' ? 'active easy' : ''}`}
                >
                  <Smile className="w-4 h-4" /> Easy
                </button>
                <button 
                  onClick={() => onSetDifficulty(expId, 'hard')}
                  className={`feedback-btn ${currentDiff === 'hard' ? 'active hard' : ''}`}
                >
                  <Frown className="w-4 h-4" /> Hard
                </button>
              </div>

              <AnimatePresence>
                {isExpanded && exp.more && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-2 p-4 bg-quaternary/5 rounded-xl border-l-4 border-quaternary flex flex-col gap-3"
                  >
                    {exp.more.map((v, vi) => (
                      <div key={vi} className="text-sm">
                        <p className="font-bold text-quaternary">{v.en}</p>
                        <p className="text-gray-500 text-xs">{v.ko}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {page < totalPages - 1 ? (
        <button onClick={() => setPage(page + 1)} className="btn-chunky btn-secondary flex-center gap-2">
          Next sentences <ChevronRight />
        </button>
      ) : (
        <button onClick={onNext} className="btn-chunky btn-primary flex-center gap-2">
          Finish & Spell <CheckCircle2 />
        </button>
      )}
    </motion.div>
  );
};

const WordIntro = ({ data, onNext }: { data: WordData, onNext: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col gap-6"
  >
    <div className="card-bubble flex flex-col items-center gap-4 border-primary overflow-hidden">
      <div className="w-64 h-48 bg-gray-50 rounded-2xl flex-center text-6xl shadow-inner border-2 border-dashed border-gray-100">
        {/* Fallback emoji/icon since we can't easily add all images */}
        {data.word === "Sky" ? "☁️" : data.word === "Apple" ? "🍎" : data.word === "Dog" ? "🐶" : data.word === "Sun" ? "☀️" : data.word === "Morning" ? "🌅" : data.word === "Lion" ? "🦁" : data.word === "Blocks" ? "🧱" : data.word === "Playground" ? "🎡" : data.word === "Bicycle" ? "🚲" : data.word === "Instrument" ? "🎸" : "🥛"}
      </div>
      <h1 
        className="font-black text-primary tracking-widest whitespace-nowrap"
        style={{ 
          fontSize: data.phonics.text.length > 10 ? '3rem' : data.phonics.text.length > 7 ? '4rem' : '4.5rem' 
        }}
      >
        {data.phonics.text.split('-').map((char, i) => (
          <span key={i} className={data.phonics.highlight.includes(char) ? "highlight-phonics" : ""}>
            {char}{i < data.phonics.text.split('-').length - 1 ? '-' : ''}
          </span>
        ))}
      </h1>
      <button className="flex items-center gap-2 text-primary font-bold text-xl hover:scale-110 transition-transform">
        <Volume2 className="w-8 h-8" /> Listen
      </button>
    </div>

    <div className="card-bubble">
      <h2 className="text-2xl font-bold text-secondary mb-2 flex items-center gap-2"><Cloud /> What is {data.word}?</h2>
      <p className="text-lg font-semibold leading-relaxed mb-4">{data.definition}</p>
      <p className="text-sm text-gray-500 italic border-t pt-2">{data.koreanMeaning}</p>
    </div>

    <button onClick={onNext} className="btn-chunky flex-center gap-2">
      Next: Expressions <ChevronRight />
    </button>
  </motion.div>
);

const SpellingTest = ({ word, onFinish }: { word: string, onFinish: () => void }) => {
  const [round, setRound] = useState(1);
  const [input, setInput] = useState('');
  const [error, setError] = useState<number[]>([]);
  const [showPraise, setShowPraise] = useState(false);
  const [praiseMsg, setPraiseMsg] = useState('');

  const checkWord = () => {
    if (input.toLowerCase() === word.toLowerCase()) {
      setPraiseMsg(PRAISE_PHRASES[Math.floor(Math.random() * PRAISE_PHRASES.length)]);
      setShowPraise(true);
      setTimeout(() => {
        setShowPraise(false);
        if (round < 3) {
          setRound(round + 1);
          setInput('');
        } else {
          onFinish();
        }
      }, 2000);
    } else {
      const newErrors: number[] = [];
      const target = word.toLowerCase();
      const current = input.toLowerCase();
      for (let i = 0; i < current.length; i++) {
        if (current[i] !== target[i]) newErrors.push(i);
      }
      setError(newErrors);
      setTimeout(() => setError([]), 1000);
    }
  };

  const renderPrompt = () => {
    switch (round) {
      case 1: return "Trace the word: " + word;
      case 2: return "Fill in the blanks!";
      case 3: return "Type from memory!";
      default: return "";
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <h2 className="text-4xl font-black text-quaternary text-center">Spelling Test!<br/>Round {round}/3</h2>
      <div className="card-bubble w-full flex flex-col items-center gap-8 py-10">
        <p className="text-2xl font-bold text-gray-600 text-center">{renderPrompt()}</p>
        
        <div className="flex gap-2 min-h-[80px] items-center flex-wrap justify-center">
          {word.split('').map((_, i) => {
            const char = input[i];
            const isBlank = round === 2 && i % 2 === 1;
            return (
              <motion.div 
                key={i}
                initial={{ scale: 0.8 }}
                animate={{ scale: char ? 1.1 : 1 }}
                className={`w-14 h-18 rounded-2xl flex-center text-4xl font-black shadow-sm border-b-8 transition-colors
                  ${char ? "bg-white border-primary text-primary" : "bg-gray-100 border-gray-200 text-gray-300"}
                  ${error.includes(i) ? "highlight-error bg-red-50 border-red-200" : ""}
                `}
              >
                {char || (round === 1 ? word[i] : (round === 2 && !isBlank ? word[i] : ""))}
              </motion.div>
            );
          })}
        </div>

        <input 
          autoFocus
          className="w-full max-w-[300px] text-center text-3xl font-black py-4 px-6 rounded-3xl border-4 border-dashed border-gray-200 focus:border-primary focus:outline-none bg-white text-primary uppercase"
          placeholder="TYPE HERE!"
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, word.length))}
          onKeyDown={(e) => e.key === 'Enter' && checkWord()}
        />
        
        <button onClick={checkWord} className="btn-chunky btn-tertiary w-full mt-4">Check!</button>
      </div>
      <AnimatePresence>
        {showPraise && <MascotPraise message={praiseMsg} />}
      </AnimatePresence>
    </div>
  );
};

const Activity = ({ data, onFinish }: { data: WordData, onFinish: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col gap-6"
  >
    <div className="card-bubble bg-tertiary/10 border-tertiary">
      <h2 className="text-3xl font-black text-quaternary mb-4 flex items-center gap-2">
        <Music /> Let's Sing!
      </h2>
      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg mb-4">
        <iframe 
          width="100%" 
          height="100%" 
          src={data.activity.songUrl} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <button onClick={onFinish} className="btn-chunky btn-primary w-full">Great Job! <Trophy /></button>
  </motion.div>
);

const Congrats = ({ 
  category, 
  isLiked, 
  onToggleLike, 
  onHome 
}: { 
  category: string, 
  isLiked: boolean, 
  onToggleLike: (cat: string) => void, 
  onHome: () => void 
}) => (
  <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="flex flex-col items-center gap-8 py-20"
  >
    <Trophy className="w-32 h-32 text-tertiary animate-bounce" />
    <h1 className="text-6xl font-black text-gradient text-center">AWESOME!</h1>
    <p className="text-2xl font-bold text-center">You've mastered this word!</p>
    
    <div className="flex flex-col items-center gap-4 mt-4">
      <p className="text-gray-400 font-bold">Want to learn more about "{category}"?</p>
      <button 
        onClick={() => onToggleLike(category)}
        className={`btn-chunky flex items-center gap-2 ${isLiked ? 'bg-red-500 border-red-700' : 'btn-secondary'}`}
      >
        <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
        {isLiked ? 'I love this topic!' : 'Like this topic!'}
      </button>
    </div>

    <button onClick={onHome} className="btn-chunky mt-8">Back Home</button>
    <MascotPraise message="You're getting smarter every day!" />
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [phase, setPhase] = useState<Phase>('home');
  const [mode, setMode] = useState<Mode>('level');
  const [userLevel, setUserLevel] = useState(1);
  const [likedCategories, setLikedCategories] = useState<string[]>([]);
  const [familiarExpressions, setFamiliarExpressions] = useState<string[]>([]);
  const [difficultyMap, setDifficultyMap] = useState<Record<string, 'easy' | 'hard'>>({});
  const [currentWord, setCurrentWord] = useState<WordData>(VOCAB_LIBRARY[0]);

  const [wordIndexWithinLevel, setWordIndexWithinLevel] = useState(0);

  const progress = useMemo(() => {
    const phases: Phase[] = ['home', 'intro', 'expressions', 'test', 'activity', 'congrats'];
    return (phases.indexOf(phase) / (phases.length - 1)) * 100;
  }, [phase]);

  const selectWord = (selectedMode: Mode, keyword?: string) => {
    setMode(selectedMode);
    let word: WordData;

    if (selectedMode === 'level') {
      const levelWords = VOCAB_LIBRARY.filter(w => w.level === userLevel);
      // If we finished all words in this level, reset or move to next (handled in handleFinish)
      word = levelWords[wordIndexWithinLevel % levelWords.length] || levelWords[0];
    } else if (selectedMode === 'random') {
      word = VOCAB_LIBRARY[Math.floor(Math.random() * VOCAB_LIBRARY.length)];
    } else {
      // Interests mode: Search by keyword or prioritize liked categories
      let pool = VOCAB_LIBRARY;
      
      if (keyword) {
        const lowerKeyword = keyword.toLowerCase();
        pool = VOCAB_LIBRARY.filter(w => 
          w.word.toLowerCase().includes(lowerKeyword) || 
          w.category.toLowerCase().includes(lowerKeyword) ||
          w.definition.toLowerCase().includes(lowerKeyword)
        );
      } else {
        pool = VOCAB_LIBRARY.filter(w => likedCategories.includes(w.category));
      }

      word = pool.length > 0 
        ? pool[Math.floor(Math.random() * pool.length)] 
        : VOCAB_LIBRARY[Math.floor(Math.random() * VOCAB_LIBRARY.length)];
    }

    setCurrentWord(word);
    setPhase('intro');
  };

  const toggleFamiliar = (id: string) => {
    setFamiliarExpressions(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleLike = (category: string) => {
    setLikedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const setDifficulty = (id: string, diff: 'easy' | 'hard') => {
    setDifficultyMap(prev => ({ ...prev, [id]: diff }));
  };

  const handleFinish = () => {
    if (mode === 'level') {
      const levelWords = VOCAB_LIBRARY.filter(w => w.level === userLevel);
      if (wordIndexWithinLevel + 1 >= levelWords.length) {
        // Level Up!
        setUserLevel(prev => prev + 1);
        setWordIndexWithinLevel(0);
        alert(`Congratulations! You've reached Level ${userLevel + 1}! 🎉`);
      } else {
        setWordIndexWithinLevel(prev => prev + 1);
      }
    }
    setPhase('home');
  };

  const renderPhase = () => {
    switch (phase) {
      case 'home': return <Home onStart={selectWord} likedCategories={likedCategories} />;
      case 'intro': return <WordIntro data={currentWord} onNext={() => setPhase('expressions')} />;
      case 'expressions': return (
        <Expressions 
          data={currentWord} 
          familiarExpressions={familiarExpressions}
          likedCategories={likedCategories}
          difficultyMap={difficultyMap}
          onToggleFamiliar={toggleFamiliar}
          onToggleLike={toggleLike}
          onSetDifficulty={setDifficulty}
          onNext={() => setPhase('test')} 
        />
      );
      case 'test': return <SpellingTest word={currentWord.word} onFinish={() => setPhase('activity')} />;
      case 'activity': return <Activity data={currentWord} onFinish={() => setPhase('congrats')} />;
      case 'congrats': return (
        <Congrats 
          category={currentWord.category}
          isLiked={likedCategories.includes(currentWord.category)}
          onToggleLike={toggleLike}
          onHome={handleFinish} 
        />
      );
      default: return <Home onStart={selectWord} likedCategories={likedCategories} />;
    }
  };

  return (
    <div className="app-container">
      {phase !== 'home' && (
        <div className="w-full h-4 bg-gray-200 rounded-full mb-8 overflow-hidden border-2 border-white shadow-inner">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-quaternary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      )}

      <nav className="nav-header">
        <button 
          onClick={() => setPhase('home')}
          className="w-12 h-12 flex-center bg-white rounded-full shadow-sm text-gray-400 hover:text-primary transition-colors"
        >
          <ArrowLeft />
        </button>
        <div className="flex gap-2">
          <div className="bg-white px-4 py-1 rounded-full shadow-sm font-black text-primary flex items-center gap-2">
            <Star className="fill-current text-yellow-400" /> {userLevel * 100}
          </div>
          <div className="bg-white px-4 py-1 rounded-full shadow-sm font-black text-secondary flex items-center gap-2">
            <Heart className="fill-current text-red-400" /> {likedCategories.length}
          </div>
        </div>
      </nav>

      <main className="flex-1 pb-12">
        <AnimatePresence mode="wait">
          {renderPhase()}
        </AnimatePresence>
      </main>
    </div>
  );
}
