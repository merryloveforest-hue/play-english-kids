export interface WordData {
  word: string;
  category: string;
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
  // --- Nature & Environment ---
  {
    word: "Sky",
    category: "Nature",
    phonics: { text: "S-k-y", highlight: ["y"] },
    definition: "The space above the Earth that you see when you look up.",
    koreanMeaning: "하늘: 땅 위쪽의 공간으로, 낮에는 보통 파란색으로 보여요.",
    expressions: [
      { en: "The sky is blue.", ko: "하늘이 파란색이에요." },
      { en: "I see clouds in the sky.", ko: "하늘에 구름이 보여요." },
      { en: "Birds fly in the sky.", ko: "새들이 하늘을 날아다녀요." },
      { en: "The sun is in the sky.", ko: "태양이 하늘에 있어요." },
      { en: "Look at the night sky.", ko: "밤하늘을 보세요." },
      { en: "Stars shine in the sky.", ko: "별들이 하늘에서 빛나요." },
      { en: "The sky is very high.", ko: "하늘은 아주 높아요." },
      { en: "An airplane is in the sky.", ko: "비행기가 하늘에 있어요." },
      { en: "Rain falls from the sky.", ko: "하늘에서 비가 내려요." }
    ],
    activity: {
      title: "Cotton Cloud Sky",
      description: "Create your own fluffy sky using cotton balls!",
      materials: ["Blue paper", "Cotton balls", "Glue"],
      songUrl: "https://www.youtube.com/embed/fA8Hw1Z3nI0"
    }
  },
  {
    word: "Arctic",
    category: "Nature",
    phonics: { text: "Arc-tic", highlight: ["Arc"] },
    definition: "The very cold area around the North Pole.",
    koreanMeaning: "북극: 북극점 주변의 아주 추운 지역이에요.",
    expressions: [
      { en: "Polar bears live in the Arctic.", ko: "북극곰은 북극에 살아요." },
      { en: "It is freezing in the Arctic.", ko: "북극은 꽁꽁 얼어붙을 정도로 추워요." },
      { en: "The Arctic is full of ice.", ko: "북극은 얼음으로 가득 차 있어요." },
      { en: "Scientists study the Arctic.", ko: "과학자들은 북극을 연구해요." },
      { en: "Can you find the Arctic on a map?", ko: "지도에서 북극을 찾을 수 있나요?" },
      { en: "Arctic foxes have white fur.", ko: "북극여우는 하얀 털을 가지고 있어요." },
      { en: "The Arctic is beautiful but cold.", ko: "북극은 아름답지만 추워요." },
      { en: "It is hard to survive in the Arctic.", ko: "북극에서 살아남기는 힘들어요." },
      { en: "The Arctic ice is melting.", ko: "북극의 얼음이 녹고 있어요." }
    ],
    activity: {
      title: "Ice Painting",
      description: "Paint on blocks of ice to see how colors move!",
      materials: ["Ice blocks", "Watercolors", "Brushes"],
      songUrl: "https://www.youtube.com/embed/8-W7WbS9h1k"
    }
  },

  // --- Cooking & Food (User Requested) ---
  {
    word: "Chef",
    category: "Cooking",
    phonics: { text: "Ch-e-f", highlight: ["Ch"] },
    definition: "A professional cook who is in charge of a kitchen.",
    koreanMeaning: "요리사: 주방을 책임지는 전문적인 요리사예요.",
    expressions: [
      { en: "The chef wears a tall hat.", ko: "요리사는 높은 모자를 써요." },
      { en: "I want to be a chef.", ko: "나는 요리사가 되고 싶어요." },
      { en: "The chef makes delicious pasta.", ko: "요리사가 맛있는 파스타를 만들어요." },
      { en: "A chef works in a restaurant.", ko: "요리사는 레스토랑에서 일해요." },
      { en: "The chef is busy cooking.", ko: "요리사는 요리하느라 바빠요." },
      { en: "Ask the chef for the recipe.", ko: "요리사에게 레시피를 물어보세요." },
      { en: "The chef tastes the soup.", ko: "요리사가 수프 맛을 봐요." },
      { en: "A chef uses many knives.", ko: "요리사는 많은 칼을 사용해요." },
      { en: "The master chef is famous.", ko: "그 마스터 셰프는 유명해요." }
    ],
    activity: {
      title: "Mini Chef Hat",
      description: "Make your own paper chef hat!",
      materials: ["White paper", "Tape"],
      songUrl: "https://www.youtube.com/embed/nUAtO090E0g"
    }
  },
  {
    word: "Ingredient",
    category: "Cooking",
    phonics: { text: "In-gre-di-ent", highlight: ["ent"] },
    definition: "One of the things that are used to make a food.",
    koreanMeaning: "재료: 음식을 만드는 데 사용되는 것들 중 하나예요.",
    expressions: [
      { en: "Flour is a main ingredient.", ko: "밀가루는 주요 재료예요." },
      { en: "Check the list of ingredients.", ko: "재료 목록을 확인하세요." },
      { en: "We need fresh ingredients.", ko: "우리는 신선한 재료가 필요해요." },
      { en: "Eggs are an important ingredient.", ko: "계란은 중요한 재료예요." },
      { en: "Buy ingredients at the market.", ko: "시장에서 재료를 사세요." },
      { en: "Add the ingredients one by one.", ko: "재료를 하나씩 넣으세요." },
      { en: "What are the secret ingredients?", ko: "비밀 재료가 무엇인가요?" },
      { en: "Mix all the ingredients together.", ko: "모든 재료를 함께 섞으세요." },
      { en: "Salt is a simple ingredient.", ko: "소금은 간단한 재료예요." }
    ],
    activity: {
      title: "Recipe Card",
      description: "Write down ingredients for your favorite snack!",
      materials: ["Card", "Colored pencils"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },
  {
    word: "Bake",
    category: "Cooking",
    phonics: { text: "B-a-k-e", highlight: ["a", "e"] },
    definition: "To cook food in an oven using dry heat.",
    koreanMeaning: "굽다: 오븐에서 건조한 열을 이용해 음식을 요리하는 것이에요.",
    expressions: [
      { en: "Let's bake some cookies.", ko: "쿠키를 좀 구워요." },
      { en: "I bake bread every Sunday.", ko: "나는 일요일마다 빵을 구워요." },
      { en: "The cake is baking in the oven.", ko: "케이크가 오븐에서 구워지고 있어요." },
      { en: "Baking makes the house smell good.", ko: "굽는 냄새가 집안을 좋게 만들어요." },
      { en: "Don't bake it for too long.", ko: "너무 오래 굽지 마세요." },
      { en: "Can you bake a pizza?", ko: "피자를 구울 수 있나요?" },
      { en: "My mom loves to bake pies.", ko: "우리 엄마는 파이 굽는 걸 좋아하세요." },
      { en: "We bake potatoes for dinner.", ko: "저녁으로 감자를 구워요." },
      { en: "Baking is fun and easy.", ko: "굽기는 재미있고 쉬워요." }
    ],
    activity: {
      title: "Play-Doh Bakery",
      description: "Create 'baked goods' using play-doh!",
      materials: ["Play-doh", "Cookie cutters"],
      songUrl: "https://www.youtube.com/embed/f_Y7HstG20s"
    }
  },

  // --- Academic & Action ---
  {
    word: "Analyze",
    category: "School",
    phonics: { text: "An-a-lyze", highlight: ["lyze"] },
    definition: "To study something carefully to understand it.",
    koreanMeaning: "분석하다: 무언가를 이해하기 위해 주의 깊게 연구하는 것이에요.",
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
    activity: {
      title: "Pattern Finder",
      description: "Find patterns in a group of objects!",
      materials: ["Blocks", "Buttons", "Paper"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },
  {
    word: "Explore",
    category: "Adventure",
    phonics: { text: "Ex-plore", highlight: ["plore"] },
    definition: "To travel to a new place to learn about it.",
    koreanMeaning: "탐험하다: 새로운 곳을 배우기 위해 여행하는 것이에요.",
    expressions: [
      { en: "Let's explore the forest.", ko: "숲을 탐험해 봐요." },
      { en: "I want to explore the moon.", ko: "나는 달을 탐험하고 싶어요." },
      { en: "They explore the old house.", ko: "그들은 오래된 집을 탐험해요." },
      { en: "Explore the deep ocean.", ko: "깊은 바다를 탐험하세요." },
      { en: "We explore new ideas.", ko: "우리는 새로운 아이디어를 탐구해요." },
      { en: "Explore the world through books.", ko: "책을 통해 세상을 탐험하세요." },
      { en: "Dora loves to explore.", ko: "도라는 탐험하는 것을 좋아해요." },
      { en: "Let's explore the garden.", ko: "정원을 탐험해 봅시다." },
      { en: "Explorers find new lands.", ko: "탐험가들은 새로운 땅을 발견해요." }
    ],
    activity: {
      title: "Nature Scavenger Hunt",
      description: "Explore outside and find items on a list!",
      materials: ["List", "Pencil", "Magnifying glass"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },
  {
    word: "Magnificent",
    category: "Descriptive",
    phonics: { text: "Mag-nif-i-cent", highlight: ["cent"] },
    definition: "Very beautiful and impressive.",
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
    activity: {
      title: "Art Gallery",
      description: "Draw a magnificent castle!",
      materials: ["Paper", "Gold crayons"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },
  {
    word: "Device",
    category: "Technology",
    phonics: { text: "De-vice", highlight: ["vice"] },
    definition: "An object or tool made for a special purpose.",
    koreanMeaning: "장치: 특수한 목적으로 만들어진 물건이나 도구예요.",
    expressions: [
      { en: "A phone is a smart device.", ko: "전화기는 스마트 장치예요." },
      { en: "Turn off the device, please.", ko: "장치를 꺼주세요." },
      { en: "This device is very useful.", ko: "이 장치는 매우 유용해요." },
      { en: "I use a mobile device.", ko: "나는 모바일 장치를 사용해요." },
      { en: "The device is charging.", ko: "장치가 충전 중이에요." },
      { en: "Invent a new device.", ko: "새로운 장치를 발명하세요." },
      { en: "A remote is a simple device.", ko: "리모컨은 간단한 장치예요." },
      { en: "Connect the device to Wi-Fi.", ko: "장치를 와이파이에 연결하세요." },
      { en: "Be careful with the electronic device.", ko: "전자 장치를 조심해서 다루세요." }
    ],
    activity: {
      title: "Future Invention",
      description: "Draw a device that can help you with homework!",
      materials: ["Paper", "Markers"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },
  {
    word: "Wisdom",
    category: "Mindset",
    phonics: { text: "Wis-dom", highlight: ["dom"] },
    definition: "The ability to use your knowledge to make good decisions.",
    koreanMeaning: "지혜: 좋은 결정을 내리기 위해 지식을 사용하는 능력이에요.",
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
    activity: {
      title: "Advice Tree",
      description: "Write one piece of 'wisdom' on a paper leaf!",
      materials: ["Green paper", "Marker"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },
  {
    word: "Journey",
    category: "Adventure",
    phonics: { text: "Jour-ney", highlight: ["ney"] },
    definition: "The act of traveling from one place to another.",
    koreanMeaning: "여정: 한 곳에서 다른 곳으로 여행하는 행위예요.",
    expressions: [
      { en: "Life is a long journey.", ko: "인생은 긴 여정이에요." },
      { en: "Enjoy the journey, not just the end.", ko: "목적지뿐만 아니라 여정을 즐기세요." },
      { en: "We started our journey early.", ko: "우리는 일찍 여정을 시작했어요." },
      { en: "The journey takes three days.", ko: "그 여정은 사흘이 걸려요." },
      { en: "Have a safe journey!", ko: "안전한 여행 되세요!" },
      { en: "A thousand miles journey begins with a step.", ko: "천 리 길도 한 걸음부터 시작해요." },
      { en: "The journey across the desert was hard.", ko: "사막을 횡단하는 여정은 힘들었어요." },
      { en: "Space journey is exciting.", ko: "우주 여행은 흥미진진해요." },
      { en: "Write about your journey.", ko: "당신의 여정에 대해 써보세요." }
    ],
    activity: {
      title: "Travel Map",
      description: "Draw a map of your dream journey!",
      materials: ["Paper", "Colored pencils"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },
  {
    word: "Communicate",
    category: "Social",
    phonics: { text: "Com-mu-ni-cate", highlight: ["cate"] },
    definition: "To share information or feelings with others.",
    koreanMeaning: "의사소통하다: 다른 사람들과 정보나 감정을 나누는 것이이에요.",
    expressions: [
      { en: "We communicate by talking.", ko: "우리는 말을 통해 의사소통해요." },
      { en: "Animals communicate too.", ko: "동물들도 의사소통을 해요." },
      { en: "Can you communicate clearly?", ko: "명확하게 의사소통할 수 있나요?" },
      { en: "We use signs to communicate.", ko: "우리는 소통하기 위해 표지판을 사용해요." },
      { en: "Communicate your ideas.", ko: "당신의 아이디어를 전달하세요." },
      { en: "Internet helps us communicate.", ko: "인터넷은 우리가 소통하는 것을 도와줘요." },
      { en: "Listen first to communicate better.", ko: "더 잘 소통하기 위해 먼저 들으세요." },
      { en: "Eyes can communicate feelings.", ko: "눈은 감정을 전달할 수 있어요." },
      { en: "It is important to communicate.", ko: "소통하는 것은 중요해요." }
    ],
    activity: {
      title: "Telephone Game",
      description: "Whisper a message to a friend and see how it changes!",
      materials: ["Friends!"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },

  // --- Animals ---
  {
    word: "Lion",
    category: "Animals",
    phonics: { text: "Li-on", highlight: ["Li"] },
    definition: "A large wild cat that is the 'King of the Jungle'.",
    koreanMeaning: "사자: '밀림의 왕'이라고 불리는 커다란 야생 고양이과 동물이에요.",
    expressions: [
      { en: "The lion has a big mane.", ko: "사자는 커다란 갈기가 있어요." },
      { en: "Hear the lion roar!", ko: "사자의 포효 소리를 들어보세요!" },
      { en: "Lions hunt together.", ko: "사자들은 함께 사냥해요." },
      { en: "A baby lion is called a cub.", ko: "아기 사자는 'cub'이라고 불려요." },
      { en: "The lion sleeps in the grass.", ko: "사자가 풀밭에서 자고 있어요." },
      { en: "Lions are very strong.", ko: "사자는 아주 힘이 세요." },
      { en: "The king lion is brave.", ko: "왕 사자는 용감해요." },
      { en: "Lions live in Africa.", ko: "사자는 아프리카에 살아요." },
      { en: "I saw a lion at the zoo.", ko: "동물원에서 사자를 봤어요." }
    ],
    activity: {
      title: "Paper Plate Lion",
      description: "Make a lion's face with a paper plate and orange paper!",
      materials: ["Paper plate", "Construction paper", "Glue"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },
  {
    word: "Elephant",
    category: "Animals",
    phonics: { text: "El-e-phant", highlight: ["phant"] },
    definition: "The largest land animal with a long trunk.",
    koreanMeaning: "코끼리: 긴 코를 가진 가장 큰 육상 동물이에요.",
    expressions: [
      { en: "An elephant has a long trunk.", ko: "코끼리는 긴 코를 가지고 있어요." },
      { en: "Elephants have big ears.", ko: "코끼리는 큰 귀를 가지고 있어요." },
      { en: "The elephant is huge.", ko: "코끼리는 정말 거대해요." },
      { en: "Elephants love to swim.", ko: "코끼리는 수영하는 것을 좋아해요." },
      { en: "Use the trunk to drink water.", ko: "코를 사용해서 물을 마셔요." },
      { en: "Elephants never forget.", ko: "코끼리는 절대 잊지 않아요." },
      { en: "The elephant walks slowly.", ko: "코끼리는 천천히 걸어요." },
      { en: "Elephants are very smart.", ko: "코끼리는 아주 똑똑해요." },
      { en: "An elephant has tusks.", ko: "코끼리는 상아가 있어요." }
    ],
    activity: {
      title: "Elephant Trunk Game",
      description: "Use your arm as a trunk and try to pick up things!",
      materials: ["Toys", "Your arm!"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  },

  // --- More Food ---
  {
    word: "Banana",
    category: "Food",
    phonics: { text: "Ba-nan-a", highlight: ["nan"] },
    definition: "A long yellow fruit that is soft inside.",
    koreanMeaning: "바나나: 속이 부드럽고 길쭉한 노란색 과일이에요.",
    expressions: [
      { en: "I eat a banana for breakfast.", ko: "나는 아침으로 바나나를 먹어요." },
      { en: "Bananas are sweet.", ko: "바나나는 달콤해요." },
      { en: "Peel the banana carefully.", ko: "바나나 껍질을 조심해서 벗기세요." },
      { en: "Monkeys love bananas.", ko: "원숭이들은 바나나를 좋아해요." },
      { en: "A banana is yellow when ripe.", ko: "바나나는 익으면 노란색이에요." },
      { en: "Banana bread is delicious.", ko: "바나나 빵은 맛있어요." },
      { en: "Don't slip on the banana peel!", ko: "바나나 껍질에 미끄러지지 마세요!" },
      { en: "Put a banana in your lunchbox.", ko: "도시락에 바나나를 넣으세요." },
      { en: "I like banana milk.", ko: "나는 바나나 우유를 좋아해요." }
    ],
    activity: {
      title: "Banana Dolphin",
      description: "Turn a banana into a cute dolphin snack!",
      materials: ["Banana", "Grape", "Marker"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  }
];
