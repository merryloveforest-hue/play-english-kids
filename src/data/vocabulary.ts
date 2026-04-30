export interface WordData {
  word: string;
  category: string;
  level: number; // 1: 3rd Grade, 2: 4th Grade, 3: 5th-6th Grade
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

export const VOCAB_LIBRARY: WordData[] = [
  // --- Level 1: Basic (3rd Grade Level) ---
  {
    word: "Apple",
    category: "Food",
    level: 1,
    phonics: { text: "A-p-p-l-e", highlight: ["A"] },
    definition: "A round fruit.",
    koreanMeaning: "사과: 둥근 과일이에요.",
    expressions: [
      { en: "I like red apples.", ko: "나는 빨간 사과를 좋아해요." },
      { en: "An apple is crunchy.", ko: "사과는 아삭아삭해요." },
      { en: "She eats an apple.", ko: "그녀는 사과를 먹어요." },
      { en: "Do you want an apple?", ko: "사과 드릴까요?" },
      { en: "Apples are sweet.", ko: "사과는 달콤해요." },
      { en: "I have a big apple.", ko: "나는 큰 사과를 가지고 있어요." },
      { en: "The apple is on the table.", ko: "사과가 테이블 위에 있어요." },
      { en: "Apple juice is yummy.", ko: "사과 주스는 맛있어요." },
      { en: "Let's share this apple.", ko: "이 사과를 나눠 먹어요." }
    ],
    activity: { title: "Apple Printing", description: "Dip an apple half in paint!", materials: ["Apple", "Paint"], songUrl: "https://www.youtube.com/embed/f_Y7HstG20s" }
  },
  {
    word: "Dog",
    category: "Animals",
    level: 1,
    phonics: { text: "D-o-g", highlight: ["o"] },
    definition: "A common pet.",
    koreanMeaning: "개: 흔히 기르는 반려동물이에요.",
    expressions: [
      { en: "My dog is small.", ko: "내 강아지는 작아요." },
      { en: "The dog wags its tail.", ko: "개가 꼬리를 흔들어요." },
      { en: "I play with my dog.", ko: "나는 내 강아지와 놀아요." },
      { en: "A dog likes bones.", ko: "개는 뼈다귀를 좋아해요." },
      { en: "The dog is sleeping.", ko: "강아지가 자고 있어요." },
      { en: "Run, dog, run!", ko: "달려라, 강아지야, 달려!" },
      { en: "He has a pet dog.", ko: "그는 반려견이 있어요." },
      { en: "The dog says woof.", ko: "개는 멍멍 하고 짖어요." },
      { en: "The dog is very cute.", ko: "강아지가 아주 귀여워요." }
    ],
    activity: { title: "Origami Dog", description: "Fold a paper to make a dog!", materials: ["Square paper"], songUrl: "https://www.youtube.com/embed/4S-mC6_N9uU" }
  },
  {
    word: "Blue",
    category: "Colors",
    level: 1,
    phonics: { text: "B-l-u-e", highlight: ["ue"] },
    definition: "The color of the sky.",
    koreanMeaning: "파란색: 하늘의 색깔이에요.",
    expressions: [
      { en: "The sky is blue.", ko: "하늘이 파란색이에요." },
      { en: "I have a blue bag.", ko: "나는 파란 가방을 가지고 있어요." },
      { en: "Blue is my favorite color.", ko: "파란색은 내가 제일 좋아하는 색이에요." },
      { en: "The ocean looks blue.", ko: "바다가 파랗게 보여요." },
      { en: "Wear your blue shirt.", ko: "파란색 셔츠를 입으세요." },
      { en: "Do you see the blue bird?", ko: "파란 새가 보이나요?" },
      { en: "The room is painted blue.", ko: "방이 파란색으로 칠해져 있어요." },
      { en: "Mix blue and yellow to get green.", ko: "파란색과 노란색을 섞으면 초록색이 돼요." },
      { en: "A blue car is coming.", ko: "파란색 차가 오고 있어요." }
    ],
    activity: { title: "Blue Hunt", description: "Find 3 blue things!", materials: ["Eyes"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },
  {
    word: "Hand",
    category: "Body",
    level: 1,
    phonics: { text: "H-a-n-d", highlight: ["a"] },
    definition: "Part of your arm.",
    koreanMeaning: "손: 팔 끝에 있는 부분이에요.",
    expressions: [
      { en: "Wash your hands.", ko: "손을 씻으세요." },
      { en: "Hold my hand.", ko: "내 손을 잡으세요." },
      { en: "Raise your hand.", ko: "손을 드세요." },
      { en: "Clap your hands!", ko: "박수를 치세요!" },
      { en: "I have two hands.", ko: "나는 두 손이 있어요." },
      { en: "Your hands are cold.", ko: "당신의 손이 차가워요." },
      { en: "Give me a hand.", ko: "나 좀 도와줘요." },
      { en: "Put your hand on your head.", ko: "머리 위에 손을 얹으세요." },
      { en: "Wave your hand goodbye.", ko: "손을 흔들어 인사하세요." }
    ],
    activity: { title: "Hand Print", description: "Make hand print art!", materials: ["Paint"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- Level 2: Intermediate (4th Grade Level) ---
  {
    word: "Teacher",
    category: "School",
    level: 2,
    phonics: { text: "Teach-er", highlight: ["Teach"] },
    definition: "A person who helps you learn.",
    koreanMeaning: "선생님: 공부를 도와주시는 분이에요.",
    expressions: [
      { en: "Listen to the teacher.", ko: "선생님의 말씀을 들으세요." },
      { en: "I like my English teacher.", ko: "나는 영어 선생님을 좋아해요." },
      { en: "The teacher is in the classroom.", ko: "선생님이 교실에 계셔요." },
      { en: "Ask your teacher a question.", ko: "선생님께 질문을 하세요." },
      { en: "My mom is a math teacher.", ko: "우리 엄마는 수학 선생님이에요." },
      { en: "Say hello to the teacher.", ko: "선생님께 인사하세요." },
      { en: "The teacher writes on the board.", ko: "선생님이 칠판에 글을 쓰셔요." },
      { en: "Be a good teacher someday.", ko: "언젠가 좋은 선생님이 되세요." },
      { en: "Our teacher is very kind.", ko: "우리 선생님은 아주 친절해요." }
    ],
    activity: { title: "Role Play", description: "Be a teacher!", materials: ["Books"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },
  {
    word: "Rainy",
    category: "Weather",
    level: 2,
    phonics: { text: "Rain-y", highlight: ["Rain"] },
    definition: "When rain falls.",
    koreanMeaning: "비가 오는: 비가 내리는 날씨예요.",
    expressions: [
      { en: "It is a rainy day.", ko: "비가 오는 날이에요." },
      { en: "I like rainy weather.", ko: "나는 비 오는 날씨를 좋아해요." },
      { en: "Take your umbrella on a rainy day.", ko: "비 오는 날에는 우산을 챙기세요." },
      { en: "The sky is gray and rainy.", ko: "하늘이 회색빛이고 비가 와요." },
      { en: "Listen to the rainy sounds.", ko: "빗소리를 들어보세요." },
      { en: "Wear boots for the rainy walk.", ko: "비 오는 길을 걸으려면 장화를 신으세요." },
      { en: "Is it still rainy outside?", ko: "밖은 아직도 비가 오나요?" },
      { en: "Rainy days make the grass green.", ko: "비 오는 날이 풀밭을 초록색으로 만들어요." },
      { en: "Stay home on a rainy night.", ko: "비 오는 밤에는 집에 머무세요." }
    ],
    activity: { title: "Paper Umbrella", description: "Make a paper umbrella!", materials: ["Paper", "Straw"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },
  {
    word: "Morning",
    category: "Time",
    level: 2,
    phonics: { text: "Morn-ing", highlight: ["Morn"] },
    definition: "The early part of the day.",
    koreanMeaning: "아침: 하루 중 이른 시간을 말해요.",
    expressions: [
      { en: "Good morning!", ko: "좋은 아침이에요!" },
      { en: "I wake up in the morning.", ko: "나는 아침에 일어나요." },
      { en: "It is a beautiful morning.", ko: "아름다운 아침이에요." },
      { en: "Eat breakfast in the morning.", ko: "아침에 식사를 하세요." },
      { en: "The sun rises in the morning.", ko: "아침에 해가 떠요." },
      { en: "I study English every morning.", ko: "나는 매일 아침 영어를 공부해요." },
      { en: "Drink water in the morning.", ko: "아침에 물을 마시세요." },
      { en: "The morning air is fresh.", ko: "아침 공기가 상쾌해요." },
      { en: "Busy morning, right?", ko: "바쁜 아침이죠?" }
    ],
    activity: { title: "Morning Routine", description: "Draw your routine!", materials: ["Paper"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- Level 3: Advanced (5th-6th Grade Level) ---
  {
    word: "Analyze",
    category: "School",
    level: 3,
    phonics: { text: "An-a-lyze", highlight: ["lyze"] },
    definition: "To study carefully.",
    koreanMeaning: "분석하다: 주의 깊게 연구하는 것이에요.",
    expressions: [
      { en: "Analyze the data carefully.", ko: "데이터를 주의 깊게 분석하세요." },
      { en: "We analyze the story in class.", ko: "우리는 수업 시간에 이야기를 분석해요." },
      { en: "Can you analyze this problem?", ko: "이 문제를 분석할 수 있나요?" },
      { en: "Scientists analyze the results.", ko: "과학자들은 결과를 분석해요." },
      { en: "Analyze how it works.", ko: "그것이 어떻게 작동하는지 분석하세요." },
      { en: "Let's analyze the map.", ko: "지도를 분석해 봅시다." },
      { en: "Think and analyze first.", ko: "먼저 생각하고 분석하세요." },
      { en: "She analyzes the handwriting.", ko: "그녀는 필적을 분석해요." },
      { en: "Analyze the character's feelings.", ko: "등장인물의 감정을 분석하세요." }
    ],
    activity: { title: "Pattern Finder", description: "Find patterns!", materials: ["Blocks"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },
  {
    word: "Magnificent",
    category: "Descriptive",
    level: 3,
    phonics: { text: "Mag-nif-i-cent", highlight: ["cent"] },
    definition: "Very beautiful.",
    koreanMeaning: "장엄한: 매우 아름답고 인상적인 것이에요.",
    expressions: [
      { en: "The castle is magnificent.", ko: "그 성은 장엄해요." },
      { en: "What a magnificent view!", ko: "정말 장엄한 광경이네요!" },
      { en: "The fireworks were magnificent.", ko: "불꽃놀이가 정말 장엄했어요." },
      { en: "He is a magnificent player.", ko: "그는 훌륭한 선수예요." },
      { en: "The mountains are magnificent.", ko: "산들이 장엄해요." },
      { en: "She wore a magnificent dress.", ko: "그녀는 화려한 드레스를 입었어요." },
      { en: "The sunrise was magnificent.", ko: "일출이 정말 장엄했어요." },
      { en: "A magnificent eagle flies high.", ko: "위엄 있는 독수리가 높이 날아요." },
      { en: "Nature is magnificent.", ko: "자연은 정말 장엄해요." }
    ],
    activity: { title: "Art Gallery", description: "Draw a castle!", materials: ["Gold crayons"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },
  {
    word: "Wisdom",
    category: "Mindset",
    level: 3,
    phonics: { text: "Wis-dom", highlight: ["dom"] },
    definition: "Good judgment.",
    koreanMeaning: "지혜: 좋은 결정을 내리는 능력이에요.",
    expressions: [
      { en: "Grandpa has much wisdom.", ko: "할아버지는 지혜가 아주 많으세요." },
      { en: "Seek wisdom every day.", ko: "매일 지혜를 구하세요." },
      { en: "Wisdom is better than gold.", ko: "지혜는 금보다 낫습니다." },
      { en: "An owl is a symbol of wisdom.", ko: "부엉이는 지혜의 상징이에요." },
      { en: "Listen to the words of wisdom.", ko: "지혜로운 말씀에 귀를 기울이세요." },
      { en: "Experience brings wisdom.", ko: "경험은 지혜를 가져다줘요." },
      { en: "Books contain great wisdom.", ko: "책에는 커다란 지혜가 담겨 있어요." },
      { en: "Think with wisdom.", ko: "지혜롭게 생각하세요." },
      { en: "Share your wisdom with others.", ko: "당신의 지혜를 다른 사람들과 나누세요." }
    ],
    activity: { title: "Advice Tree", description: "Write one piece of wisdom!", materials: ["Green paper"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  }
];
