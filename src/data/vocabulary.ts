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
    word: "Apple",
    category: "Food",
    phonics: { text: "A-p-p-l-e", highlight: ["A"] },
    definition: "A round fruit with red, green, or yellow skin and white flesh.",
    koreanMeaning: "사과: 빨간색, 초록색 또는 노란색 껍질과 하얀 속살을 가진 둥근 과일이에요.",
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
    activity: {
      title: "Apple Printing",
      description: "Dip an apple half in paint and make stamps!",
      materials: ["Apple", "Paint", "Paper"],
      songUrl: "https://www.youtube.com/embed/f_Y7HstG20s"
    }
  },
  {
    word: "Dog",
    category: "Animals",
    phonics: { text: "D-o-g", highlight: ["o"] },
    definition: "A common animal that people keep as a pet. They say 'Woof!'.",
    koreanMeaning: "개: 사람들이 반려동물로 기르는 흔한 동물이에요. '멍멍!' 하고 짖어요.",
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
    activity: {
      title: "Origami Dog",
      description: "Fold a paper to make a cute dog face!",
      materials: ["Square paper", "Marker"],
      songUrl: "https://www.youtube.com/embed/4S-mC6_N9uU"
    }
  },
  {
    word: "Sun",
    category: "Nature",
    phonics: { text: "S-u-n", highlight: ["u"] },
    definition: "The big star that gives light and heat to the Earth during the day.",
    koreanMeaning: "태양: 낮 동안 지구에 빛과 열을 주는 커다란 별이에요.",
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
    activity: {
      title: "Sun Catcher",
      description: "Make a colorful sun catcher for your window!",
      materials: ["Clear paper", "Tissue paper", "Glue"],
      songUrl: "https://www.youtube.com/embed/fA8Hw1Z3nI0"
    }
  },
  {
    word: "Milk",
    category: "Food",
    phonics: { text: "M-i-l-k", highlight: ["i"] },
    definition: "A white liquid that comes from cows and is good for your bones.",
    koreanMeaning: "우유: 소에게서 나오는 하얀 액체로, 뼈 건강에 좋아요.",
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
    activity: {
      title: "Magic Milk Experiment",
      description: "Watch colors dance in a plate of milk!",
      materials: ["Milk", "Food coloring", "Dish soap"],
      songUrl: "https://www.youtube.com/embed/rqQSlEViNpk"
    }
  }
];
