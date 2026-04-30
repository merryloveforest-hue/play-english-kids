export interface Expression {
  en: string;
  ko: string;
  more?: { en: string; ko: string }[]; // Variations like tenses, plural/singular
}

export interface WordData {
  word: string;
  category: string;
  level: number;
  phonics: { text: string; highlight: string[] };
  definition: string;
  koreanMeaning: string;
  expressions: Expression[];
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
      { 
        en: "I like an apple.", 
        ko: "나는 사과 하나를 좋아해요.",
        more: [
          { en: "We like apples.", ko: "우리는 사과들을 좋아해요. (복수형)" },
          { en: "He likes an apple.", ko: "그는 사과 하나를 좋아해요. (3인칭 단수)" },
          { en: "I liked the apple.", ko: "나는 그 사과를 좋아했어요. (과거형)" }
        ]
      },
      { 
        en: "An apple is crunchy.", 
        ko: "사과는 아삭아삭해요.",
        more: [
          { en: "Apples are crunchy.", ko: "사과들은 아삭아삭해요. (복수형)" },
          { en: "The apple was crunchy.", ko: "그 사과는 아삭아삭했어요. (과거형)" }
        ]
      },
      { 
        en: "She eats an apple.", 
        ko: "그녀는 사과를 먹어요.",
        more: [
          { en: "They eat apples.", ko: "그들은 사과를 먹어요. (복수형)" },
          { en: "She is eating an apple.", ko: "그녀는 사과를 먹는 중이에요. (진행형)" }
        ]
      },
      { 
        en: "Do you want an apple?", 
        ko: "사과 드릴까요?",
        more: [
          { en: "Does he want an apple?", ko: "그는 사과를 원하나요? (3인칭 질문)" },
          { en: "Did you want an apple?", ko: "사과를 원했었나요? (과거 질문)" }
        ]
      },
      { 
        en: "Apples are sweet.", 
        ko: "사과는 달콤해요.",
        more: [
          { en: "This apple is sweet.", ko: "이 사과는 달콤해요. (단수형)" },
          { en: "Were the apples sweet?", ko: "사과들이 달콤했나요? (과거 질문)" }
        ]
      },
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
      { 
        en: "The dog wags its tail.", 
        ko: "개가 꼬리를 흔들어요.",
        more: [
          { en: "The dogs wag their tails.", ko: "개들이 꼬리를 흔들어요. (복수형)" },
          { en: "My dog wagged its tail.", ko: "내 강아지가 꼬리를 흔들었어요. (과거형)" }
        ]
      },
      { 
        en: "My dog is small.", 
        ko: "내 강아지는 작아요.",
        more: [
          { en: "Our dogs are small.", ko: "우리 개들은 작아요. (복수형)" },
          { en: "Was your dog small?", ko: "당신의 강아지는 작았나요? (과거 질문)" }
        ]
      },
      { 
        en: "I play with my dog.", 
        ko: "나는 내 강아지와 놀아요.",
        more: [
          { en: "He plays with his dog.", ko: "그는 그의 강아지와 놀아요. (3인칭)" },
          { en: "We played with the dog.", ko: "우리는 그 강아지와 놀았어요. (과거형)" }
        ]
      },
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
    word: "Blocks",
    category: "Play",
    level: 1,
    phonics: { text: "B-l-o-c-k-s", highlight: ["o"] },
    definition: "Small building pieces.",
    koreanMeaning: "블록: 장난감 조각이에요.",
    expressions: [
      { 
        en: "I build a tower.", 
        ko: "나는 탑을 쌓아요.",
        more: [
          { en: "We are building a tower.", ko: "우리는 탑을 쌓는 중이에요. (진행형)" },
          { en: "She built a big tower.", ko: "그녀는 큰 탑을 쌓았어요. (과거형)" }
        ]
      },
      { en: "Do you have Lego blocks?", ko: "레고 블록이 있나요?" },
      { en: "Let's play with blocks together.", ko: "함께 블록 놀이를 해요." },
      { en: "The blocks are colorful.", ko: "블록들이 알록달록해요." },
      { en: "Make a house with blocks.", ko: "블록으로 집을 만드세요." },
      { en: "I need more blue blocks.", ko: "나는 파란 블록이 더 필요해요." },
      { en: "Clean up your blocks, please.", ko: "블록을 정리해 주세요." },
      { en: "The blocks are on the rug.", ko: "블록들이 카펫 위에 있어요." },
      { en: "Building with blocks is fun.", ko: "블록 쌓기는 재미있어요." }
    ],
    activity: { title: "Block Challenge", description: "Build the tallest tower you can!", materials: ["Blocks"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },
  {
    word: "Blue",
    category: "Colors",
    level: 1,
    phonics: { text: "B-l-u-e", highlight: ["ue"] },
    definition: "The color of the sky.",
    koreanMeaning: "파란색: 하늘의 색깔이에요.",
    expressions: [
      { 
        en: "The sky is blue.", 
        ko: "하늘이 파란색이에요.",
        more: [
          { en: "The sky was blue yesterday.", ko: "어제는 하늘이 파랬어요. (과거형)" },
          { en: "Why is the sky blue?", ko: "왜 하늘은 파란가요? (질문형)" }
        ]
      },
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
      { 
        en: "Wash your hands.", 
        ko: "손을 씻으세요.",
        more: [
          { en: "He is washing his hands.", ko: "그는 손을 씻고 있어요. (진행형)" },
          { en: "Did you wash your hands?", ko: "손을 씻었나요? (과거 질문)" }
        ]
      },
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
  {
    word: "Playground",
    category: "Play",
    level: 1,
    phonics: { text: "Play-ground", highlight: ["ay"] },
    definition: "An outdoor area for children to play.",
    koreanMeaning: "놀이터: 어린이들이 밖에서 뛰어노는 공간이에요.",
    expressions: [
      { 
        en: "Let's go to the playground.", 
        ko: "놀이터에 가요.",
        more: [
          { en: "They went to the playground.", ko: "그들은 놀이터에 갔어요. (과거형)" },
          { en: "We are going to the playground.", ko: "우리는 놀이터에 가는 중이에요. (진행형)" }
        ]
      },
      { en: "I like the slide at the playground.", ko: "나는 놀이터의 미끄럼틀을 좋아해요." },
      { en: "The playground is full of kids.", ko: "놀이터가 아이들로 가득해요." },
      { en: "We play tag at the playground.", ko: "우리는 놀이터에서 술래잡기를 해요." },
      { en: "Be careful at the playground.", ko: "놀이터에서는 조심하세요." },
      { en: "The playground has many swings.", ko: "놀이터에는 그네가 많이 있어요." },
      { en: "Let's meet at the playground.", ko: "놀이터에서 만나요." },
      { en: "I am happy at the playground.", ko: "나는 놀이터에 있으면 행복해요." },
      { en: "The playground is near my house.", ko: "놀이터는 우리 집 근처에 있어요." }
    ],
    activity: { title: "Playground Map", description: "Draw your dream playground!", materials: ["Paper", "Markers"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
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
    word: "Bicycle",
    category: "Play",
    level: 2,
    phonics: { text: "Bi-cy-cle", highlight: ["cy"] },
    definition: "A two-wheeled vehicle.",
    koreanMeaning: "자전거: 페달을 밟아 타는 바퀴가 두 개인 탈것이에요.",
    expressions: [
      { 
        en: "I can ride a bicycle.", 
        ko: "나는 자전거를 탈 수 있어요.",
        more: [
          { en: "He can't ride a bicycle yet.", ko: "그는 아직 자전거를 못 타요. (부정형)" },
          { en: "They are riding bicycles.", ko: "그들은 자전거를 타고 있어요. (복수/진행형)" }
        ]
      },
      { en: "Wear a helmet on your bicycle.", ko: "자전거를 탈 때는 헬멧을 쓰세요." },
      { en: "My bicycle is red and fast.", ko: "내 자전거는 빨간색이고 빨라요." },
      { en: "Let's ride bicycles in the park.", ko: "공원에서 자전거를 타요." },
      { en: "I wash my bicycle.", ko: "나는 내 자전거를 세차해요." },
      { en: "The bicycle has a bell.", ko: "자전거에 벨이 달려 있어요." },
      { en: "Check your bicycle tires.", ko: "자전거 타이어를 확인하세요." },
      { en: "I go to school by bicycle.", ko: "나는 자전거를 타고 학교에 가요." },
      { en: "Riding a bicycle is good exercise.", ko: "자전거 타기는 좋은 운동이에요." }
    ],
    activity: { title: "Bicycle Safety", description: "Draw a helmet for your bicycle!", materials: ["Crayons"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
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
    word: "Instrument",
    category: "Music",
    level: 2,
    phonics: { text: "In-stru-ment", highlight: ["ment"] },
    definition: "An object for music.",
    koreanMeaning: "악기: 소리를 만드는 도구예요.",
    expressions: [
      { en: "The piano is a large instrument.", ko: "피아노는 커다란 악기예요." },
      { en: "What instrument do you play?", ko: "어떤 악기를 연주하나요?" },
      { en: "I want to learn a new instrument.", ko: "나는 새로운 악기를 배우고 싶어요." },
      { en: "A guitar is a popular instrument.", ko: "기타는 인기 있는 악기예요." },
      { en: "Practice your instrument every day.", ko: "매일 악기 연습을 하세요." },
      { en: "The violin is a beautiful instrument.", ko: "바이올린은 아름다운 악기예요." },
      { en: "Listen to the sound of the instrument.", ko: "악기 소리에 귀를 기울여 보세요." },
      { en: "We play instruments in music class.", ko: "우리는 음악 시간에 악기를 연주해요." },
      { en: "A drum is a loud instrument.", ko: "드럼은 소리가 큰 악기예요." }
    ],
    activity: { title: "Homemade Shaker", description: "Make a musical instrument with beans!", materials: ["Cup", "Beans"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
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
