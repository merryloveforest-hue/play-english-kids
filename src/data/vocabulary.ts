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
  // --- 1. School Life ---
  {
    word: "Teacher",
    category: "School",
    phonics: { text: "Teach-er", highlight: ["Teach"] },
    definition: "A person whose job is to help students learn.",
    koreanMeaning: "선생님: 학생들의 공부를 도와주는 직업을 가진 사람이에요.",
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
    activity: { title: "Role Play", description: "Be a teacher and teach a friend!", materials: ["Books", "Glasses"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },
  {
    word: "Pencil",
    category: "School",
    phonics: { text: "Pen-cil", highlight: ["cil"] },
    definition: "A tool used for writing or drawing.",
    koreanMeaning: "연필: 글을 쓰거나 그림을 그릴 때 사용하는 도구예요.",
    expressions: [
      { en: "I have a sharp pencil.", ko: "나는 뾰족한 연필을 가지고 있어요." },
      { en: "Where is my pencil?", ko: "내 연필이 어디 있지?" },
      { en: "Please lend me a pencil.", ko: "연필 한 자루만 빌려주세요." },
      { en: "I write with a pencil.", ko: "나는 연필로 글을 써요." },
      { en: "Sharpen your pencil.", ko: "연필을 깎으세요." },
      { en: "The pencil is on the desk.", ko: "연필이 책상 위에 있어요." },
      { en: "I need a red pencil.", ko: "나는 빨간 연필이 필요해요." },
      { en: "My pencil is short now.", ko: "내 연필이 이제 짧아졌어요." },
      { en: "Put your pencil in the case.", ko: "필통에 연필을 넣으세요." }
    ],
    activity: { title: "Pencil Art", description: "Draw anything you like with a pencil!", materials: ["Pencil", "Paper"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- 2. Family ---
  {
    word: "Mother",
    category: "Family",
    phonics: { text: "Moth-er", highlight: ["Moth"] },
    definition: "A female parent.",
    koreanMeaning: "어머니: 여자 부모님을 말해요.",
    expressions: [
      { en: "I love my mother.", ko: "나는 우리 엄마를 사랑해요." },
      { en: "My mother is cooking.", ko: "우리 엄마는 요리 중이세요." },
      { en: "She is a great mother.", ko: "그녀는 위대한 어머니예요." },
      { en: "I help my mother.", ko: "나는 엄마를 도와드려요." },
      { en: "Mother's Day is in May.", ko: "어버이날은 5월에 있어요." },
      { en: "My mother is very smart.", ko: "우리 엄마는 아주 똑똑해요." },
      { en: "Go to see your mother.", ko: "엄마를 보러 가세요." },
      { en: "Mother made this cake.", ko: "엄마가 이 케이크를 만드셨어요." },
      { en: "Tell your mother the truth.", ko: "엄마에게 사실대로 말하세요." }
    ],
    activity: { title: "Mother's Card", description: "Make a thank you card for Mom!", materials: ["Paper", "Flowers"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- 3. Colors ---
  {
    word: "Blue",
    category: "Colors",
    phonics: { text: "B-l-u-e", highlight: ["ue"] },
    definition: "The color of the clear sky or the ocean.",
    koreanMeaning: "파란색: 맑은 하늘이나 바다의 색깔이에요.",
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
    activity: { title: "Blue Hunt", description: "Find 3 blue things in your room!", materials: ["Eyes!"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- 4. Feelings ---
  {
    word: "Happy",
    category: "Feelings",
    phonics: { text: "Hap-py", highlight: ["py"] },
    definition: "Feeling or showing pleasure or contentment.",
    koreanMeaning: "행복한: 기쁨이나 만족감을 느끼거나 보여주는 상태예요.",
    expressions: [
      { en: "I am so happy today.", ko: "나는 오늘 정말 행복해요." },
      { en: "A happy smile.", ko: "행복한 미소." },
      { en: "She makes me happy.", ko: "그녀는 나를 행복하게 해줘요." },
      { en: "Happy birthday to you!", ko: "생일 축하해요!" },
      { en: "We are a happy family.", ko: "우리는 행복한 가족이에요." },
      { en: "Are you happy now?", ko: "지금 행복한가요?" },
      { en: "Eat good food to be happy.", ko: "행복해지려면 맛있는 음식을 드세요." },
      { en: "He has a happy life.", ko: "그는 행복한 삶을 살고 있어요." },
      { en: "Always stay happy.", ko: "항상 행복하게 지내세요." }
    ],
    activity: { title: "Happy Face", description: "Draw a big happy face!", materials: ["Yellow paper", "Marker"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- 5. Action Verbs ---
  {
    word: "Jump",
    category: "Action",
    phonics: { text: "J-u-m-p", highlight: ["u"] },
    definition: "To push yourself off the ground into the air.",
    koreanMeaning: "뛰다: 땅을 차고 공중으로 몸을 솟구치는 것이에요.",
    expressions: [
      { en: "Jump high!", ko: "높이 뛰어보세요!" },
      { en: "Can you jump over the log?", ko: "통나무를 뛰어넘을 수 있나요?" },
      { en: "I love to jump on the bed.", ko: "나는 침대에서 뛰는 걸 좋아해요." },
      { en: "Don't jump too much.", ko: "너무 많이 뛰지 마세요." },
      { en: "The frog can jump far.", ko: "개구리는 멀리 뛸 수 있어요." },
      { en: "Jump up and down.", ko: "위아래로 뛰어보세요." },
      { en: "Let's jump together.", ko: "함께 뛰어봐요." },
      { en: "The cat jumps on the sofa.", ko: "고양이가 소파 위로 뛰어올라요." },
      { en: "Ready, set, jump!", ko: "제자리, 준비, 점프!" }
    ],
    activity: { title: "Jump Rope", description: "Try to jump rope 10 times!", materials: ["Jump rope"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- 6. Body ---
  {
    word: "Hand",
    category: "Body",
    phonics: { text: "H-a-n-d", highlight: ["a"] },
    definition: "The part of your body at the end of your arm.",
    koreanMeaning: "손: 팔 끝에 붙어 있는 신체 부위예요.",
    expressions: [
      { en: "Wash your hands.", ko: "손을 씻으세요." },
      { en: "Hold my hand.", ko: "내 손을 잡으세요." },
      { en: "Raise your hand.", ko: "손을 드세요." },
      { en: "Clap your hands!", ko: "박수를 치세요!" },
      { en: "I have two hands.", ko: "나는 두 손이 있어요." },
      { en: "Your hands are cold.", ko: "당신의 손이 차가워요." },
      { en: "Give me a hand.", ko: "나 좀 도와줘요. (손 좀 빌려줘요)" },
      { en: "Put your hand on your head.", ko: "머리 위에 손을 얹으세요." },
      { en: "Wave your hand goodbye.", ko: "손을 흔들어 작별 인사하세요." }
    ],
    activity: { title: "Hand Print", description: "Make art with your hand prints!", materials: ["Paint", "Paper"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- 7. Weather ---
  {
    word: "Rainy",
    category: "Weather",
    phonics: { text: "Rain-y", highlight: ["Rain"] },
    definition: "Having a lot of rain.",
    koreanMeaning: "비가 오는: 비가 많이 내리는 날씨예요.",
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
    activity: { title: "Paper Umbrella", description: "Make a small umbrella out of paper!", materials: ["Paper", "Straw"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- 8. Time & Numbers ---
  {
    word: "Morning",
    category: "Time",
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
      { en: "Busy morning, right?", ko: "바쁜 아침이죠, 그렇죠?" }
    ],
    activity: { title: "Morning Routine", description: "Draw 3 things you do every morning!", materials: ["Paper", "Pencil"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },

  // --- From Previous List (Preserved & Enhanced) ---
  {
    word: "Chef",
    category: "Cooking",
    phonics: { text: "Ch-e-f", highlight: ["Ch"] },
    definition: "A professional cook.",
    koreanMeaning: "요리사: 전문적인 요리사예요.",
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
    activity: { title: "Mini Chef Hat", description: "Make your own paper chef hat!", materials: ["White paper"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  },
  {
    word: "Apple",
    category: "Food",
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
    word: "Sun",
    category: "Nature",
    phonics: { text: "S-u-n", highlight: ["u"] },
    definition: "The big star.",
    koreanMeaning: "태양: 커다란 별이에요.",
    expressions: [
      { en: "The sun is hot.", ko: "태양은 뜨거워요." },
      { en: "The sun is yellow.", ko: "태양은 노란색이에요." },
      { en: "The sun comes up.", ko: "해가 떠올라요." },
      { en: "We need the sun.", ko: "우리는 태양이 필요해요." },
      { en: "The sun is very bright.", ko: "태양은 아주 밝아요." },
      { en: "It is a sunny day.", ko: "화창한 날이에요." },
      { en: "The sun goes down.", ko: "해가 져요." },
      { en: "Draw a big sun.", ko: "커다란 태양을 그리세요." },
      { en: "The sun makes us warm.", ko: "태양은 우리를 따뜻하게 해줘요." }
    ],
    activity: { title: "Sun Catcher", description: "Make a colorful sun catcher!", materials: ["Clear paper"], songUrl: "https://www.youtube.com/embed/fA8Hw1Z3nI0" }
  },
  {
    word: "Milk",
    category: "Food",
    phonics: { text: "M-i-l-k", highlight: ["i"] },
    definition: "A white liquid.",
    koreanMeaning: "우유: 하얀 액체예요.",
    expressions: [
      { en: "I drink milk.", ko: "나는 우유를 마셔요." },
      { en: "Milk is white.", ko: "우유는 하얀색이에요." },
      { en: "Cold milk is good.", ko: "찬 우유는 맛있어요." },
      { en: "Milk makes you strong.", ko: "우유는 당신을 튼튼하게 해줘요." },
      { en: "Cookies and milk!", ko: "쿠키와 우유!" },
      { en: "The milk is in the fridge.", ko: "우유가 냉장고에 있어요." },
      { en: "Pour the milk, please.", ko: "우유를 따라주세요." },
      { en: "I like chocolate milk.", ko: "나는 초코 우유를 좋아해요." },
      { en: "The baby drinks milk.", ko: "아기가 우유를 마셔요." }
    ],
    activity: { title: "Magic Milk", description: "Watch colors dance in milk!", materials: ["Milk", "Food coloring"], songUrl: "https://www.youtube.com/embed/rqQSlEViNpk" }
  }
];
