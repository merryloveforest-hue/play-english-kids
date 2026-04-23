import { useState, useEffect } from 'react';
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
  Sun
} from 'lucide-react';
import mascotImg from './assets/mascot.png';
import skyImg from './assets/sky.png';

// --- Types ---
type Phase = 'intro' | 'expressions' | 'test' | 'activity' | 'congrats';

interface WordData {
  word: string;
  phonics: { text: string; highlight: string[] };
  definition: string;
  koreanMeaning: string;
  expressions: { en: string; ko: string }[];
  activity: {
    title: string;
    description: string;
    materials: string[];
    songUrl: string;
  };
}

const SKY_DATA: WordData = {
  word: "Sky",
  phonics: { text: "S-k-y", highlight: ["y"] }, // focus on y making the 'ai' sound
  definition: "The space above the Earth that you see when you look up. It is usually blue during the day.",
  koreanMeaning: "하늘: 땅 위쪽의 공간으로, 낮에는 보통 파란색으로 보여요.",
  expressions: [
    { en: "Look at the blue sky!", ko: "저 파란 하늘을 좀 봐요!" },
    { en: "The sun is high in the sky.", ko: "해님이 하늘 높이 떠 있어요." },
    { en: "I can see white clouds in the sky.", ko: "하늘에 하얀 구름이 보여요." },
    { en: "Birds fly in the sky.", ko: "새들이 하늘을 날아다녀요." },
    { en: "The sky is turning orange at sunset.", ko: "노을이 질 때 하늘이 주황색으로 변해요." },
    { en: "At night, we see stars in the sky.", ko: "밤에는 하늘에서 별을 볼 수 있어요." },
    { en: "An airplane is flying across the sky.", ko: "비행기가 하늘을 가로질러 날아가고 있어요." },
    { en: "The sky is very clear today.", ko: "오늘 하늘이 아주 맑아요." },
    { en: "Is the sky falling?", ko: "하늘이 무너지고 있나요? (농담처럼 쓰여요)" },
    { en: "Reach for the sky!", ko: "하늘을 향해 손을 뻗어봐요! (큰 꿈을 가지라는 뜻도 돼요)" },
  ],
  activity: {
    title: "Cotton Cloud Sky",
    description: "Create your own fluffy sky using cotton balls!",
    materials: ["Blue construction paper", "Cotton balls", "White glue", "Crayons"],
    songUrl: "https://www.youtube.com/embed/fA8Hw1Z3nI0", // "Mr. Sun, Sun, Mr. Golden Sun"
  }
};

const PRAISE_PHRASES = [
  "You're a genius!", "Amazing work!", "Look at you go!", 
  "Superstar!", "Bravo!", "Fantastic!", "High five!", 
  "Keep it up!", "You're doing great!", "So proud of you!",
  "Wow! Incredible!", "You're on fire!", "Keep going!",
  "Perfect!", "Excellent!", "Outstanding!", "You nailed it!"
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

const WordIntro = ({ data, onNext }: { data: WordData, onNext: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col gap-6"
  >
    <div className="card-bubble flex flex-col items-center gap-4 border-primary">
      <img src={skyImg} alt={data.word} className="w-64 h-48 object-contain animate-pop" />
      <h1 className="text-7xl font-black text-primary tracking-widest">
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
      <h2 className="text-2xl font-bold text-secondary mb-2 flex items-center gap-2"><Cloud /> What is the {data.word}?</h2>
      <p className="text-lg font-semibold leading-relaxed mb-4">{data.definition}</p>
      <p className="text-sm text-gray-500 italic border-t pt-2">{data.koreanMeaning}</p>
    </div>

    <button onClick={onNext} className="btn-chunky flex-center gap-2">
      Next: Expressions <ChevronRight />
    </button>
  </motion.div>
);

const Expressions = ({ data, onNext }: { data: WordData, onNext: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex flex-col gap-6"
  >
    <h2 className="text-3xl font-black text-center text-gradient flex items-center justify-center gap-2">
      <Sun className="text-quaternary" /> 10 Sky Expressions!
    </h2>
    <div className="grid gap-4">
      {data.expressions.map((exp, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="card-bubble py-4 flex justify-between items-center hover:border-secondary transition-colors cursor-pointer group"
        >
          <div className="flex-1">
            <p className="text-xl font-bold text-text mb-1 group-hover:text-secondary transition-colors">{exp.en}</p>
            <p className="text-sm text-gray-400 font-medium">{exp.ko}</p>
          </div>
          <Volume2 className="text-secondary w-6 h-6 group-hover:scale-125 transition-transform" />
        </motion.div>
      ))}
    </div>
    <button onClick={onNext} className="btn-chunky btn-secondary flex-center gap-2">
      Next: Spelling Test <Sparkles />
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
      case 2: return "Fill in: " + word.split('').map((c, i) => i === 1 ? '_' : c).join('');
      case 3: return "Type from memory!";
      default: return "";
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <h2 className="text-4xl font-black text-quaternary">Spelling Test! Round {round}/3</h2>
      <div className="card-bubble w-full flex flex-col items-center gap-8 py-10">
        <p className="text-2xl font-bold text-gray-600 text-center">{renderPrompt()}</p>
        
        {/* Visual representation of typed letters */}
        <div className="flex gap-2 min-h-[80px] items-center">
          {word.split('').map((_, i) => {
            const char = input[i];
            return (
              <motion.div 
                key={i}
                initial={{ scale: 0.8 }}
                animate={{ scale: char ? 1.1 : 1 }}
                className={`w-16 h-20 rounded-2xl flex-center text-5xl font-black shadow-sm border-b-8 transition-colors
                  ${char ? "bg-white border-primary text-primary" : "bg-gray-100 border-gray-200 text-gray-300"}
                  ${error.includes(i) ? "highlight-error bg-red-50 border-red-200" : ""}
                `}
              >
                {char || (round === 1 ? word[i] : (round === 2 && i !== 1 ? word[i] : ""))}
              </motion.div>
            );
          })}
        </div>

        {/* Real Input Field */}
        <input 
          autoFocus
          className="w-full max-w-[300px] text-center text-3xl font-black py-4 px-6 rounded-3xl border-4 border-dashed border-gray-200 focus:border-primary focus:outline-none bg-white text-primary uppercase placeholder:text-gray-200"
          placeholder="TYPE HERE!"
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, word.length))}
          onKeyDown={(e) => e.key === 'Enter' && checkWord()}
        />
        
        <button onClick={checkWord} className="btn-chunky btn-tertiary w-full mt-4">Check My Answer!</button>
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
        <Music /> Let's Sing Together!
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

    <div className="card-bubble border-secondary">
      <h2 className="text-3xl font-black text-secondary mb-4 flex items-center gap-2">
        <Puzzle /> {data.activity.title}
      </h2>
      <p className="text-lg font-bold mb-4">{data.activity.description}</p>
      <div className="bg-white rounded-xl p-4">
        <h3 className="font-black text-gray-500 uppercase text-xs mb-2">What you need:</h3>
        <div className="flex flex-wrap gap-2">
          {data.activity.materials.map((m, i) => (
            <span key={i} className="bg-secondary-container px-3 py-1 rounded-full text-sm font-bold text-secondary border-2 border-secondary/20">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>

    <button onClick={onFinish} className="btn-chunky btn-primary w-full">Complete Adventure! <Trophy /></button>
  </motion.div>
);

const Congrats = () => (
  <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="flex flex-col items-center gap-8 py-20"
  >
    <div className="relative">
      <Trophy className="w-32 h-32 text-tertiary animate-bounce" />
      <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-primary animate-wiggle" />
    </div>
    <h1 className="text-6xl font-black text-gradient text-center">YOU DID IT!</h1>
    <p className="text-2xl font-bold text-center">You are now a Sky Master! ☁️✨</p>
    <button onClick={() => window.location.reload()} className="btn-chunky">Play Again</button>
    <MascotPraise message="You are the absolute best! High five!" />
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const phases: Phase[] = ['intro', 'expressions', 'test', 'activity', 'congrats'];
    setProgress((phases.indexOf(phase) / (phases.length - 1)) * 100);
  }, [phase]);

  const renderPhase = () => {
    switch (phase) {
      case 'intro': return <WordIntro data={SKY_DATA} onNext={() => setPhase('expressions')} />;
      case 'expressions': return <Expressions data={SKY_DATA} onNext={() => setPhase('test')} />;
      case 'test': return <SpellingTest word={SKY_DATA.word} onFinish={() => setPhase('activity')} />;
      case 'activity': return <Activity data={SKY_DATA} onFinish={() => setPhase('congrats')} />;
      case 'congrats': return <Congrats />;
      default: return <WordIntro data={SKY_DATA} onNext={() => setPhase('expressions')} />;
    }
  };

  return (
    <div className="app-container">
      <div className="w-full h-4 bg-gray-200 rounded-full mb-8 overflow-hidden border-2 border-white shadow-inner">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-quaternary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <nav className="nav-header">
        <button className="w-12 h-12 flex-center bg-white rounded-full shadow-sm text-gray-400">
          <ArrowLeft />
        </button>
        <div className="flex gap-2">
          <div className="bg-white px-4 py-1 rounded-full shadow-sm font-black text-primary flex items-center gap-2">
            <Star className="fill-current text-yellow-400" /> 250
          </div>
          <div className="bg-white px-4 py-1 rounded-full shadow-sm font-black text-secondary flex items-center gap-2">
            <Heart className="fill-current text-red-400" /> 10
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
