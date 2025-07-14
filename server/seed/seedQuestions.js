import mongoose from "mongoose";
import dotenv from "dotenv";
import Quiz from "../models/Quiz.js";

dotenv.config();

const questionsByQuiz = {
  "Continents & Oceans": [
    {
      text: "How many continents are there on Earth?",
      difficulty: "easy",
      options: [
        { text: "7", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "8", isCorrect: false },
      ],
    },
    {
      text: "Which is the largest continent by land area?",
      difficulty: "easy",
      options: [
        { text: "Asia", isCorrect: true },
        { text: "Africa", isCorrect: false },
        { text: "North America", isCorrect: false },
        { text: "Europe", isCorrect: false },
      ],
    },
    {
      text: "Which is the smallest continent?",
      difficulty: "medium",
      options: [
        { text: "Australia", isCorrect: true },
        { text: "Europe", isCorrect: false },
        { text: "Antarctica", isCorrect: false },
        { text: "South America", isCorrect: false },
      ],
    },
    {
      text: "Which ocean is the deepest?",
      difficulty: "medium",
      options: [
        { text: "Pacific Ocean", isCorrect: true },
        { text: "Atlantic Ocean", isCorrect: false },
        { text: "Indian Ocean", isCorrect: false },
        { text: "Arctic Ocean", isCorrect: false },
      ],
    },
    {
      text: "Which continent is known as the 'Dark Continent'?",
      difficulty: "medium",
      options: [
        { text: "Africa", isCorrect: true },
        { text: "Asia", isCorrect: false },
        { text: "Europe", isCorrect: false },
        { text: "South America", isCorrect: false },
      ],
    },
    {
      text: "Which continent is completely covered in ice?",
      difficulty: "easy",
      options: [
        { text: "Antarctica", isCorrect: true },
        { text: "Europe", isCorrect: false },
        { text: "Asia", isCorrect: false },
        { text: "North America", isCorrect: false },
      ],
    },
    {
      text: "Which ocean lies between Africa and Australia?",
      difficulty: "medium",
      options: [
        { text: "Indian Ocean", isCorrect: true },
        { text: "Pacific Ocean", isCorrect: false },
        { text: "Arctic Ocean", isCorrect: false },
        { text: "Atlantic Ocean", isCorrect: false },
      ],
    },
    {
      text: "Which continent has the most countries?",
      difficulty: "hard",
      options: [
        { text: "Africa", isCorrect: true },
        { text: "Asia", isCorrect: false },
        { text: "Europe", isCorrect: false },
        { text: "South America", isCorrect: false },
      ],
    },
    {
      text: "What is the only continent located entirely in the Northern Hemisphere?",
      difficulty: "medium",
      options: [
        { text: "Europe", isCorrect: true },
        { text: "Asia", isCorrect: false },
        { text: "Africa", isCorrect: false },
        { text: "Australia", isCorrect: false },
      ],
    },
    {
      text: "Which ocean surrounds the North Pole?",
      difficulty: "easy",
      options: [
        { text: "Arctic Ocean", isCorrect: true },
        { text: "Pacific Ocean", isCorrect: false },
        { text: "Indian Ocean", isCorrect: false },
        { text: "Atlantic Ocean", isCorrect: false },
      ],
    },
  ],
  "World Capitals": [
    {
      text: "What is the capital of France?",
      difficulty: "easy",
      options: [
        { text: "Paris", isCorrect: true },
        { text: "Lyon", isCorrect: false },
        { text: "Marseille", isCorrect: false },
        { text: "Nice", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of Japan?",
      difficulty: "easy",
      options: [
        { text: "Tokyo", isCorrect: true },
        { text: "Osaka", isCorrect: false },
        { text: "Kyoto", isCorrect: false },
        { text: "Nagoya", isCorrect: false },
      ],
    },
    {
      text: "Which city is the capital of Canada?",
      difficulty: "medium",
      options: [
        { text: "Ottawa", isCorrect: true },
        { text: "Toronto", isCorrect: false },
        { text: "Vancouver", isCorrect: false },
        { text: "Montreal", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of Australia?",
      difficulty: "medium",
      options: [
        { text: "Canberra", isCorrect: true },
        { text: "Sydney", isCorrect: false },
        { text: "Melbourne", isCorrect: false },
        { text: "Brisbane", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of Brazil?",
      difficulty: "medium",
      options: [
        { text: "Brasília", isCorrect: true },
        { text: "Rio de Janeiro", isCorrect: false },
        { text: "São Paulo", isCorrect: false },
        { text: "Salvador", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is the capital of South Africa?",
      difficulty: "hard",
      options: [
        { text: "Pretoria", isCorrect: true },
        { text: "Cape Town", isCorrect: false },
        { text: "Johannesburg", isCorrect: false },
        { text: "Durban", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of Egypt?",
      difficulty: "medium",
      options: [
        { text: "Cairo", isCorrect: true },
        { text: "Alexandria", isCorrect: false },
        { text: "Giza", isCorrect: false },
        { text: "Luxor", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of Germany?",
      difficulty: "easy",
      options: [
        { text: "Berlin", isCorrect: true },
        { text: "Munich", isCorrect: false },
        { text: "Hamburg", isCorrect: false },
        { text: "Frankfurt", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of Russia?",
      difficulty: "easy",
      options: [
        { text: "Moscow", isCorrect: true },
        { text: "Saint Petersburg", isCorrect: false },
        { text: "Sochi", isCorrect: false },
        { text: "Kazan", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of Argentina?",
      difficulty: "medium",
      options: [
        { text: "Buenos Aires", isCorrect: true },
        { text: "Córdoba", isCorrect: false },
        { text: "Rosario", isCorrect: false },
        { text: "Mendoza", isCorrect: false },
      ],
    },
  ],

  "Famous Artists": [
    {
      text: "Who painted the Mona Lisa?",
      difficulty: "easy",
      options: [
        { text: "Leonardo da Vinci", isCorrect: true },
        { text: "Michelangelo", isCorrect: false },
        { text: "Raphael", isCorrect: false },
        { text: "Donatello", isCorrect: false },
      ],
    },
    {
      text: "Which artist is known for cutting off part of his ear?",
      difficulty: "easy",
      options: [
        { text: "Vincent van Gogh", isCorrect: true },
        { text: "Pablo Picasso", isCorrect: false },
        { text: "Claude Monet", isCorrect: false },
        { text: "Salvador Dalí", isCorrect: false },
      ],
    },
    {
      text: "Who created the painting 'The Starry Night'?",
      difficulty: "easy",
      options: [
        { text: "Vincent van Gogh", isCorrect: true },
        { text: "Edvard Munch", isCorrect: false },
        { text: "Paul Cézanne", isCorrect: false },
        { text: "Henri Matisse", isCorrect: false },
      ],
    },
    {
      text: "Which artist is famous for his melting clocks in 'The Persistence of Memory'?",
      difficulty: "medium",
      options: [
        { text: "Salvador Dalí", isCorrect: true },
        { text: "Joan Miró", isCorrect: false },
        { text: "Georges Braque", isCorrect: false },
        { text: "Wassily Kandinsky", isCorrect: false },
      ],
    },
    {
      text: "Who painted the ceiling of the Sistine Chapel?",
      difficulty: "medium",
      options: [
        { text: "Michelangelo", isCorrect: true },
        { text: "Leonardo da Vinci", isCorrect: false },
        { text: "Raphael", isCorrect: false },
        { text: "Caravaggio", isCorrect: false },
      ],
    },
    {
      text: "Which artist is most associated with the Blue Period and Cubism?",
      difficulty: "medium",
      options: [
        { text: "Pablo Picasso", isCorrect: true },
        { text: "Henri Matisse", isCorrect: false },
        { text: "Paul Klee", isCorrect: false },
        { text: "Georges Seurat", isCorrect: false },
      ],
    },
    {
      text: "Who is known for his large-scale drip paintings?",
      difficulty: "medium",
      options: [
        { text: "Jackson Pollock", isCorrect: true },
        { text: "Mark Rothko", isCorrect: false },
        { text: "Andy Warhol", isCorrect: false },
        { text: "Roy Lichtenstein", isCorrect: false },
      ],
    },
    {
      text: "Which artist is a major figure in the Pop Art movement and known for his Campbell’s Soup Cans?",
      difficulty: "easy",
      options: [
        { text: "Andy Warhol", isCorrect: true },
        { text: "Keith Haring", isCorrect: false },
        { text: "Jean-Michel Basquiat", isCorrect: false },
        { text: "David Hockney", isCorrect: false },
      ],
    },
    {
      text: "Who painted 'The Scream'?",
      difficulty: "medium",
      options: [
        { text: "Edvard Munch", isCorrect: true },
        { text: "Gustav Klimt", isCorrect: false },
        { text: "Caspar David Friedrich", isCorrect: false },
        { text: "Paul Gauguin", isCorrect: false },
      ],
    },
    {
      text: "Which female artist is known for her self-portraits and Mexican cultural themes?",
      difficulty: "medium",
      options: [
        { text: "Frida Kahlo", isCorrect: true },
        { text: "Georgia O'Keeffe", isCorrect: false },
        { text: "Mary Cassatt", isCorrect: false },
        { text: "Artemisia Gentileschi", isCorrect: false },
      ],
    },
  ],
  "Art Movements": [
    {
      text: "Which art movement is known for its emphasis on light and everyday scenes?",
      difficulty: "easy",
      options: [
        { text: "Impressionism", isCorrect: true },
        { text: "Cubism", isCorrect: false },
        { text: "Surrealism", isCorrect: false },
        { text: "Futurism", isCorrect: false },
      ],
    },
    {
      text: "Who is considered the founder of Cubism along with Georges Braque?",
      difficulty: "easy",
      options: [
        { text: "Pablo Picasso", isCorrect: true },
        { text: "Claude Monet", isCorrect: false },
        { text: "Vincent van Gogh", isCorrect: false },
        { text: "Andy Warhol", isCorrect: false },
      ],
    },
    {
      text: "Which movement focused on dreams, the unconscious, and strange juxtapositions?",
      difficulty: "medium",
      options: [
        { text: "Surrealism", isCorrect: true },
        { text: "Dadaism", isCorrect: false },
        { text: "Minimalism", isCorrect: false },
        { text: "Expressionism", isCorrect: false },
      ],
    },
    {
      text: "The term 'Baroque' refers to which kind of art?",
      difficulty: "medium",
      options: [
        { text: "Dramatic and grand", isCorrect: true },
        { text: "Simple and minimal", isCorrect: false },
        { text: "Childlike and innocent", isCorrect: false },
        { text: "Abstract and futuristic", isCorrect: false },
      ],
    },
    {
      text: "Which artist is associated with the Pop Art movement?",
      difficulty: "easy",
      options: [
        { text: "Andy Warhol", isCorrect: true },
        { text: "Jackson Pollock", isCorrect: false },
        { text: "Michelangelo", isCorrect: false },
        { text: "Salvador Dalí", isCorrect: false },
      ],
    },
    {
      text: "Which movement emerged as a reaction to the horrors of World War I?",
      difficulty: "medium",
      options: [
        { text: "Dadaism", isCorrect: true },
        { text: "Rococo", isCorrect: false },
        { text: "Romanticism", isCorrect: false },
        { text: "Fauvism", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a key feature of Abstract Expressionism?",
      difficulty: "medium",
      options: [
        { text: "Emotional brushstrokes and spontaneity", isCorrect: true },
        { text: "Precise geometric forms", isCorrect: false },
        { text: "Realistic landscapes", isCorrect: false },
        { text: "Mythological themes", isCorrect: false },
      ],
    },
    {
      text: "Which movement is characterized by colorful, wild brushwork and emotional impact?",
      difficulty: "medium",
      options: [
        { text: "Expressionism", isCorrect: true },
        { text: "Neoclassicism", isCorrect: false },
        { text: "Futurism", isCorrect: false },
        { text: "Minimalism", isCorrect: false },
      ],
    },
    {
      text: "What movement is associated with art that emphasizes order and harmony, often inspired by ancient Greece and Rome?",
      difficulty: "hard",
      options: [
        { text: "Neoclassicism", isCorrect: true },
        { text: "Romanticism", isCorrect: false },
        { text: "Impressionism", isCorrect: false },
        { text: "Baroque", isCorrect: false },
      ],
    },
    {
      text: "Which movement rejected traditional perspective and showed multiple viewpoints at once?",
      difficulty: "hard",
      options: [
        { text: "Cubism", isCorrect: true },
        { text: "Renaissance", isCorrect: false },
        { text: "Realism", isCorrect: false },
        { text: "Symbolism", isCorrect: false },
      ],
    },
  ],

  "Ancient Civilizations": [
    {
      text: "Which river was central to the development of Ancient Egypt?",
      difficulty: "easy",
      options: [
        { text: "Nile", isCorrect: true },
        { text: "Amazon", isCorrect: false },
        { text: "Tigris", isCorrect: false },
        { text: "Yangtze", isCorrect: false },
      ],
    },
    {
      text: "Which writing system was developed in Mesopotamia?",
      difficulty: "medium",
      options: [
        { text: "Cuneiform", isCorrect: true },
        { text: "Hieroglyphics", isCorrect: false },
        { text: "Latin", isCorrect: false },
        { text: "Sanskrit", isCorrect: false },
      ],
    },
    {
      text: "The city of Athens is most closely associated with which civilization?",
      difficulty: "easy",
      options: [
        { text: "Ancient Greece", isCorrect: true },
        { text: "Ancient Rome", isCorrect: false },
        { text: "Ancient China", isCorrect: false },
        { text: "Babylon", isCorrect: false },
      ],
    },
    {
      text: "Which ancient civilization built the Machu Picchu site?",
      difficulty: "medium",
      options: [
        { text: "Inca", isCorrect: true },
        { text: "Maya", isCorrect: false },
        { text: "Aztec", isCorrect: false },
        { text: "Olmec", isCorrect: false },
      ],
    },
    {
      text: "What was the primary architectural structure of the Sumerians?",
      difficulty: "medium",
      options: [
        { text: "Ziggurat", isCorrect: true },
        { text: "Pyramid", isCorrect: false },
        { text: "Temple", isCorrect: false },
        { text: "Obelisk", isCorrect: false },
      ],
    },
    {
      text: "Which civilization created a detailed calendar and advanced knowledge of astronomy?",
      difficulty: "hard",
      options: [
        { text: "Maya", isCorrect: true },
        { text: "Inca", isCorrect: false },
        { text: "Phoenicians", isCorrect: false },
        { text: "Egyptians", isCorrect: false },
      ],
    },
    {
      text: "What was the main contribution of the Phoenicians to modern culture?",
      difficulty: "medium",
      options: [
        { text: "The alphabet", isCorrect: true },
        { text: "The wheel", isCorrect: false },
        { text: "Pyramids", isCorrect: false },
        { text: "Democracy", isCorrect: false },
      ],
    },
    {
      text: "What structure is considered one of the Seven Wonders of the Ancient World in Egypt?",
      difficulty: "easy",
      options: [
        { text: "The Great Pyramid of Giza", isCorrect: true },
        { text: "Hanging Gardens", isCorrect: false },
        { text: "Colossus of Rhodes", isCorrect: false },
        { text: "Temple of Artemis", isCorrect: false },
      ],
    },
    {
      text: "Which Chinese dynasty is known for the Terracotta Army?",
      difficulty: "medium",
      options: [
        { text: "Qin Dynasty", isCorrect: true },
        { text: "Tang Dynasty", isCorrect: false },
        { text: "Han Dynasty", isCorrect: false },
        { text: "Song Dynasty", isCorrect: false },
      ],
    },
    {
      text: "Which empire was ruled by Julius Caesar?",
      difficulty: "easy",
      options: [
        { text: "Roman Empire", isCorrect: true },
        { text: "Byzantine Empire", isCorrect: false },
        { text: "Ottoman Empire", isCorrect: false },
        { text: "Holy Roman Empire", isCorrect: false },
      ],
    },
  ],

  "World War Facts": [
    {
      text: "In which year did World War I begin?",
      difficulty: "medium",
      options: [
        { text: "1914", isCorrect: true },
        { text: "1918", isCorrect: false },
        { text: "1939", isCorrect: false },
        { text: "1920", isCorrect: false },
      ],
    },
    {
      text: "Which country was not part of the Axis Powers in World War II?",
      difficulty: "easy",
      options: [
        { text: "France", isCorrect: true },
        { text: "Germany", isCorrect: false },
        { text: "Italy", isCorrect: false },
        { text: "Japan", isCorrect: false },
      ],
    },
    {
      text: "What event led to the United States entering World War II?",
      difficulty: "easy",
      options: [
        { text: "Attack on Pearl Harbor", isCorrect: true },
        { text: "Invasion of Poland", isCorrect: false },
        { text: "Battle of Britain", isCorrect: false },
        { text: "Fall of France", isCorrect: false },
      ],
    },
    {
      text: "What was the name of the Nazi plan to exterminate Jews?",
      difficulty: "hard",
      options: [
        { text: "The Final Solution", isCorrect: true },
        { text: "Operation Barbarossa", isCorrect: false },
        { text: "Blitzkrieg", isCorrect: false },
        { text: "Operation Overlord", isCorrect: false },
      ],
    },
    {
      text: "Who was the Prime Minister of the United Kingdom during most of World War II?",
      difficulty: "medium",
      options: [
        { text: "Winston Churchill", isCorrect: true },
        { text: "Neville Chamberlain", isCorrect: false },
        { text: "Clement Attlee", isCorrect: false },
        { text: "Tony Blair", isCorrect: false },
      ],
    },
    {
      text: "Which battle marked a major turning point in the Pacific Theater?",
      difficulty: "hard",
      options: [
        { text: "Battle of Midway", isCorrect: true },
        { text: "Battle of the Bulge", isCorrect: false },
        { text: "D-Day", isCorrect: false },
        { text: "Battle of Britain", isCorrect: false },
      ],
    },
    {
      text: "What treaty ended World War I?",
      difficulty: "medium",
      options: [
        { text: "Treaty of Versailles", isCorrect: true },
        { text: "Treaty of Paris", isCorrect: false },
        { text: "Treaty of Tordesillas", isCorrect: false },
        { text: "Treaty of Ghent", isCorrect: false },
      ],
    },
    {
      text: "What country was invaded to start World War II?",
      difficulty: "easy",
      options: [
        { text: "Poland", isCorrect: true },
        { text: "France", isCorrect: false },
        { text: "Austria", isCorrect: false },
        { text: "Russia", isCorrect: false },
      ],
    },
    {
      text: "What was the code name for the Allied invasion of Normandy?",
      difficulty: "medium",
      options: [
        { text: "Operation Overlord", isCorrect: true },
        { text: "Operation Torch", isCorrect: false },
        { text: "Operation Sea Lion", isCorrect: false },
        { text: "Operation Dynamo", isCorrect: false },
      ],
    },
    {
      text: "Which two cities were atomic bombs dropped on in 1945?",
      difficulty: "easy",
      options: [
        { text: "Hiroshima and Nagasaki", isCorrect: true },
        { text: "Tokyo and Kyoto", isCorrect: false },
        { text: "Osaka and Sapporo", isCorrect: false },
        { text: "Yokohama and Kobe", isCorrect: false },
      ],
    },
  ],

  "Geometry Basics": [
    {
      text: "What is the sum of the interior angles of a triangle?",
      difficulty: "easy",
      options: [
        { text: "180 degrees", isCorrect: true },
        { text: "90 degrees", isCorrect: false },
        { text: "360 degrees", isCorrect: false },
        { text: "270 degrees", isCorrect: false },
      ],
    },
    {
      text: "A right angle measures how many degrees?",
      difficulty: "easy",
      options: [
        { text: "90 degrees", isCorrect: true },
        { text: "45 degrees", isCorrect: false },
        { text: "180 degrees", isCorrect: false },
        { text: "60 degrees", isCorrect: false },
      ],
    },
    {
      text: "How many sides does a hexagon have?",
      difficulty: "easy",
      options: [
        { text: "6", isCorrect: true },
        { text: "5", isCorrect: false },
        { text: "8", isCorrect: false },
        { text: "7", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a quadrilateral?",
      difficulty: "easy",
      options: [
        { text: "Rectangle", isCorrect: true },
        { text: "Triangle", isCorrect: false },
        { text: "Circle", isCorrect: false },
        { text: "Pentagon", isCorrect: false },
      ],
    },
    {
      text: "What is the name of a triangle with all sides of different lengths?",
      difficulty: "easy",
      options: [
        { text: "Scalene", isCorrect: true },
        { text: "Isosceles", isCorrect: false },
        { text: "Equilateral", isCorrect: false },
        { text: "Right", isCorrect: false },
      ],
    },
    {
      text: "What is the area of a rectangle with length 5 and width 3?",
      difficulty: "easy",
      options: [
        { text: "15", isCorrect: true },
        { text: "8", isCorrect: false },
        { text: "10", isCorrect: false },
        { text: "18", isCorrect: false },
      ],
    },
    {
      text: "What is the perimeter of a square with side length 4?",
      difficulty: "easy",
      options: [
        { text: "16", isCorrect: true },
        { text: "8", isCorrect: false },
        { text: "12", isCorrect: false },
        { text: "20", isCorrect: false },
      ],
    },
    {
      text: "A circle has how many degrees?",
      difficulty: "easy",
      options: [
        { text: "360", isCorrect: true },
        { text: "180", isCorrect: false },
        { text: "90", isCorrect: false },
        { text: "720", isCorrect: false },
      ],
    },
    {
      text: "What do we call a line that cuts a shape into two equal parts?",
      difficulty: "medium",
      options: [
        { text: "Line of symmetry", isCorrect: true },
        { text: "Radius", isCorrect: false },
        { text: "Chord", isCorrect: false },
        { text: "Tangent", isCorrect: false },
      ],
    },
    {
      text: "What is the name of an angle more than 90° but less than 180°?",
      difficulty: "medium",
      options: [
        { text: "Obtuse angle", isCorrect: true },
        { text: "Acute angle", isCorrect: false },
        { text: "Right angle", isCorrect: false },
        { text: "Straight angle", isCorrect: false },
      ],
    },
    {
      text: "Which formula is used to calculate the area of a triangle?",
      difficulty: "medium",
      options: [
        { text: "1/2 × base × height", isCorrect: true },
        { text: "base × height", isCorrect: false },
        { text: "length × width", isCorrect: false },
        { text: "π × r²", isCorrect: false },
      ],
    },
    {
      text: "What is the name of the longest side of a right-angled triangle?",
      difficulty: "medium",
      options: [
        { text: "Hypotenuse", isCorrect: true },
        { text: "Base", isCorrect: false },
        { text: "Altitude", isCorrect: false },
        { text: "Perpendicular", isCorrect: false },
      ],
    },
    {
      text: "A polygon with 8 sides is called a?",
      difficulty: "medium",
      options: [
        { text: "Octagon", isCorrect: true },
        { text: "Hexagon", isCorrect: false },
        { text: "Heptagon", isCorrect: false },
        { text: "Nonagon", isCorrect: false },
      ],
    },
    {
      text: "Which of these is NOT a type of triangle?",
      difficulty: "medium",
      options: [
        { text: "Circular", isCorrect: true },
        { text: "Equilateral", isCorrect: false },
        { text: "Scalene", isCorrect: false },
        { text: "Isosceles", isCorrect: false },
      ],
    },
    {
      text: "What is the formula for the circumference of a circle?",
      difficulty: "hard",
      options: [
        { text: "2πr", isCorrect: true },
        { text: "πr²", isCorrect: false },
        { text: "πd²", isCorrect: false },
        { text: "r² + π", isCorrect: false },
      ],
    },
    {
      text: "What do you call two angles that add up to 180°?",
      difficulty: "medium",
      options: [
        { text: "Supplementary", isCorrect: true },
        { text: "Complementary", isCorrect: false },
        { text: "Adjacent", isCorrect: false },
        { text: "Vertical", isCorrect: false },
      ],
    },
    {
      text: "How many lines of symmetry does a square have?",
      difficulty: "medium",
      options: [
        { text: "4", isCorrect: true },
        { text: "2", isCorrect: false },
        { text: "8", isCorrect: false },
        { text: "6", isCorrect: false },
      ],
    },
    {
      text: "What is the volume of a cube with side length 3 units?",
      difficulty: "hard",
      options: [
        { text: "27 cubic units", isCorrect: true },
        { text: "9 cubic units", isCorrect: false },
        { text: "6 cubic units", isCorrect: false },
        { text: "18 cubic units", isCorrect: false },
      ],
    },
    {
      text: "What is the measure of each angle in an equilateral triangle?",
      difficulty: "medium",
      options: [
        { text: "60 degrees", isCorrect: true },
        { text: "90 degrees", isCorrect: false },
        { text: "120 degrees", isCorrect: false },
        { text: "45 degrees", isCorrect: false },
      ],
    },
    {
      text: "Which 3D shape has 6 faces, all of which are squares?",
      difficulty: "easy",
      options: [
        { text: "Cube", isCorrect: true },
        { text: "Cylinder", isCorrect: false },
        { text: "Pyramid", isCorrect: false },
        { text: "Sphere", isCorrect: false },
      ],
    },
  ],

  "Algebra Essentials": [
    {
      text: "What is the value of x in the equation 2x + 5 = 13?",
      difficulty: "easy",
      options: [
        { text: "4", isCorrect: true },
        { text: "5", isCorrect: false },
        { text: "6", isCorrect: false },
        { text: "3", isCorrect: false },
      ],
    },
    {
      text: "Simplify: (3x + 2x) – (x – 4).",
      difficulty: "medium",
      options: [
        { text: "4x + 4", isCorrect: true },
        { text: "6x - 4", isCorrect: false },
        { text: "5x - 4", isCorrect: false },
        { text: "2x + 4", isCorrect: false },
      ],
    },
    {
      text: "What is the solution to the inequality 3x - 7 > 2?",
      difficulty: "medium",
      options: [
        { text: "x > 3", isCorrect: true },
        { text: "x < 3", isCorrect: false },
        { text: "x > -3", isCorrect: false },
        { text: "x < -3", isCorrect: false },
      ],
    },
    {
      text: "Which expression is equivalent to (x + 3)(x - 3)?",
      difficulty: "easy",
      options: [
        { text: "x² - 9", isCorrect: true },
        { text: "x² + 6", isCorrect: false },
        { text: "x² + 9", isCorrect: false },
        { text: "x² - 6", isCorrect: false },
      ],
    },
    {
      text: "What are the solutions to the equation x² - 4 = 0?",
      difficulty: "easy",
      options: [
        { text: "x = 2 or x = -2", isCorrect: true },
        { text: "x = 4 or x = -4", isCorrect: false },
        { text: "x = 0 or x = 4", isCorrect: false },
        { text: "x = 1 or x = -1", isCorrect: false },
      ],
    },
    {
      text: "Factor: x² + 5x + 6.",
      difficulty: "medium",
      options: [
        { text: "(x + 2)(x + 3)", isCorrect: true },
        { text: "(x - 2)(x + 3)", isCorrect: false },
        { text: "(x + 1)(x + 6)", isCorrect: false },
        { text: "(x - 1)(x - 6)", isCorrect: false },
      ],
    },
    {
      text: "If f(x) = 2x + 1, what is f(3)?",
      difficulty: "easy",
      options: [
        { text: "7", isCorrect: true },
        { text: "9", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "6", isCorrect: false },
      ],
    },
    {
      text: "Solve for x: x/3 + 2 = 5.",
      difficulty: "easy",
      options: [
        { text: "9", isCorrect: true },
        { text: "3", isCorrect: false },
        { text: "6", isCorrect: false },
        { text: "1", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a linear equation?",
      difficulty: "easy",
      options: [
        { text: "y = 2x + 3", isCorrect: true },
        { text: "y = x² + 3", isCorrect: false },
        { text: "y = x³", isCorrect: false },
        { text: "y = 1/x", isCorrect: false },
      ],
    },
    {
      text: "What is the slope of the line represented by y = 4x - 2?",
      difficulty: "easy",
      options: [
        { text: "4", isCorrect: true },
        { text: "-2", isCorrect: false },
        { text: "2", isCorrect: false },
        { text: "-4", isCorrect: false },
      ],
    },
  ],
  "JavaScript Basics": [
    {
      text: "What does the 'typeof' operator return for an array?",
      difficulty: "medium",
      options: [
        { text: "'object'", isCorrect: true },
        { text: "'array'", isCorrect: false },
        { text: "'list'", isCorrect: false },
        { text: "'undefined'", isCorrect: false },
      ],
    },
    {
      text: "Which keyword declares a variable that cannot be reassigned?",
      difficulty: "easy",
      options: [
        { text: "const", isCorrect: true },
        { text: "let", isCorrect: false },
        { text: "var", isCorrect: false },
        { text: "static", isCorrect: false },
      ],
    },
    {
      text: "What is the output of 'console.log(2 + '2')'?",
      difficulty: "medium",
      options: [
        { text: "'22'", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "NaN", isCorrect: false },
        { text: "undefined", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not a JavaScript data type?",
      difficulty: "easy",
      options: [
        { text: "float", isCorrect: true },
        { text: "string", isCorrect: false },
        { text: "boolean", isCorrect: false },
        { text: "object", isCorrect: false },
      ],
    },
    {
      text: "What does '===' compare in JavaScript?",
      difficulty: "easy",
      options: [
        { text: "Value and type", isCorrect: true },
        { text: "Only value", isCorrect: false },
        { text: "Only type", isCorrect: false },
        { text: "Length", isCorrect: false },
      ],
    },
    {
      text: "Which function is used to parse a string to an integer?",
      difficulty: "medium",
      options: [
        { text: "parseInt()", isCorrect: true },
        { text: "parseFloat()", isCorrect: false },
        { text: "Number()", isCorrect: false },
        { text: "toFixed()", isCorrect: false },
      ],
    },
    {
      text: "How do you write a comment in JavaScript?",
      difficulty: "easy",
      options: [
        { text: "// comment", isCorrect: true },
        { text: "# comment", isCorrect: false },
        { text: "<!-- comment -->", isCorrect: false },
        { text: "** comment **", isCorrect: false },
      ],
    },
    {
      text: "What is the default value of 'this' in a regular function?",
      difficulty: "hard",
      options: [
        { text: "global object", isCorrect: true },
        { text: "null", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "the function itself", isCorrect: false },
      ],
    },
    {
      text: "What does 'NaN' stand for in JavaScript?",
      difficulty: "easy",
      options: [
        { text: "Not a Number", isCorrect: true },
        { text: "Null as Number", isCorrect: false },
        { text: "Negative and Null", isCorrect: false },
        { text: "None as Null", isCorrect: false },
      ],
    },
    {
      text: "Which method adds an item to the end of an array?",
      difficulty: "easy",
      options: [
        { text: "push()", isCorrect: true },
        { text: "pop()", isCorrect: false },
        { text: "shift()", isCorrect: false },
        { text: "unshift()", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a falsy value?",
      difficulty: "medium",
      options: [
        { text: "0", isCorrect: true },
        { text: "1", isCorrect: false },
        { text: "'0'", isCorrect: false },
        { text: "'false'", isCorrect: false },
      ],
    },
    {
      text: "Which operator is used for exponentiation in ES6?",
      difficulty: "medium",
      options: [
        { text: "**", isCorrect: true },
        { text: "^", isCorrect: false },
        { text: "exp()", isCorrect: false },
        { text: "^^", isCorrect: false },
      ],
    },
    {
      text: "What is a closure in JavaScript?",
      difficulty: "hard",
      options: [
        {
          text: "A function with preserved access to outer scope",
          isCorrect: true,
        },
        { text: "A function that closes execution", isCorrect: false },
        { text: "A loop structure", isCorrect: false },
        { text: "A built-in error handler", isCorrect: false },
      ],
    },
    {
      text: "What is the result of `typeof null`?",
      difficulty: "hard",
      options: [
        { text: "'object'", isCorrect: true },
        { text: "'null'", isCorrect: false },
        { text: "'undefined'", isCorrect: false },
        { text: "'boolean'", isCorrect: false },
      ],
    },
    {
      text: "How do you create a function in JavaScript?",
      difficulty: "easy",
      options: [
        { text: "function myFunc() {}", isCorrect: true },
        { text: "func myFunc() {}", isCorrect: false },
        { text: "function:myFunc() {}", isCorrect: false },
        { text: "create function myFunc() {}", isCorrect: false },
      ],
    },
    {
      text: "Which method can be used to combine two arrays?",
      difficulty: "medium",
      options: [
        { text: "concat()", isCorrect: true },
        { text: "combine()", isCorrect: false },
        { text: "attach()", isCorrect: false },
        { text: "merge()", isCorrect: false },
      ],
    },
    {
      text: "Which keyword is used to define a class in JavaScript?",
      difficulty: "easy",
      options: [
        { text: "class", isCorrect: true },
        { text: "struct", isCorrect: false },
        { text: "define", isCorrect: false },
        { text: "new", isCorrect: false },
      ],
    },
    {
      text: "What does the 'map()' method return?",
      difficulty: "medium",
      options: [
        { text: "A new array", isCorrect: true },
        { text: "A modified original array", isCorrect: false },
        { text: "A single value", isCorrect: false },
        { text: "An object", isCorrect: false },
      ],
    },
    {
      text: "Which symbol is used for template literals?",
      difficulty: "easy",
      options: [
        { text: "`", isCorrect: true },
        { text: "'", isCorrect: false },
        { text: '"', isCorrect: false },
        { text: "~", isCorrect: false },
      ],
    },
    {
      text: "What will 'Boolean('false')' return?",
      difficulty: "medium",
      options: [
        { text: "true", isCorrect: true },
        { text: "false", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "null", isCorrect: false },
      ],
    },
  ],

  "Internet & Web Basics": [
    {
      text: "What does URL stand for?",
      difficulty: "easy",
      options: [
        { text: "Uniform Resource Locator", isCorrect: true },
        { text: "Universal Resource Link", isCorrect: false },
        { text: "Unified Resource Locator", isCorrect: false },
        { text: "Uniform Retrieval Link", isCorrect: false },
      ],
    },
    {
      text: "Which protocol is used to transfer web pages?",
      difficulty: "easy",
      options: [
        { text: "HTTP", isCorrect: true },
        { text: "FTP", isCorrect: false },
        { text: "SMTP", isCorrect: false },
        { text: "TCP", isCorrect: false },
      ],
    },
    {
      text: "What is the function of a web browser?",
      difficulty: "easy",
      options: [
        { text: "To display web pages", isCorrect: true },
        { text: "To write web code", isCorrect: false },
        { text: "To store emails", isCorrect: false },
        { text: "To edit videos", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a search engine?",
      difficulty: "easy",
      options: [
        { text: "Google", isCorrect: true },
        { text: "Chrome", isCorrect: false },
        { text: "Firefox", isCorrect: false },
        { text: "Gmail", isCorrect: false },
      ],
    },
    {
      text: "What is the role of DNS?",
      difficulty: "medium",
      options: [
        { text: "Translates domain names into IP addresses", isCorrect: true },
        { text: "Stores website content", isCorrect: false },
        { text: "Encrypts data", isCorrect: false },
        { text: "Connects devices to the Internet", isCorrect: false },
      ],
    },
    {
      text: "Which part of a web address identifies the domain?",
      difficulty: "medium",
      options: [
        { text: "example.com", isCorrect: true },
        { text: "http", isCorrect: false },
        { text: "/index.html", isCorrect: false },
        { text: ":443", isCorrect: false },
      ],
    },
    {
      text: "What does IP stand for in networking?",
      difficulty: "easy",
      options: [
        { text: "Internet Protocol", isCorrect: true },
        { text: "Internal Process", isCorrect: false },
        { text: "International Port", isCorrect: false },
        { text: "Internet Port", isCorrect: false },
      ],
    },
    {
      text: "Which of these is a top-level domain (TLD)?",
      difficulty: "easy",
      options: [
        { text: ".com", isCorrect: true },
        { text: "www", isCorrect: false },
        { text: "http", isCorrect: false },
        { text: "/home", isCorrect: false },
      ],
    },
    {
      text: "What does HTTPS stand for?",
      difficulty: "medium",
      options: [
        { text: "HyperText Transfer Protocol Secure", isCorrect: true },
        { text: "HyperText Transfer Protocol Source", isCorrect: false },
        { text: "HighText Transfer Protocol Secure", isCorrect: false },
        { text: "HyperTool Transfer Protocol Secure", isCorrect: false },
      ],
    },
    {
      text: "What port does HTTP typically use?",
      difficulty: "medium",
      options: [
        { text: "80", isCorrect: true },
        { text: "443", isCorrect: false },
        { text: "21", isCorrect: false },
        { text: "25", isCorrect: false },
      ],
    },
    {
      text: "What is the main purpose of a firewall?",
      difficulty: "medium",
      options: [
        { text: "To block unauthorized access", isCorrect: true },
        { text: "To store cookies", isCorrect: false },
        { text: "To backup data", isCorrect: false },
        { text: "To manage Wi-Fi", isCorrect: false },
      ],
    },
    {
      text: "Which protocol is used to send emails?",
      difficulty: "medium",
      options: [
        { text: "SMTP", isCorrect: true },
        { text: "HTTP", isCorrect: false },
        { text: "IMAP", isCorrect: false },
        { text: "FTP", isCorrect: false },
      ],
    },
    {
      text: "What does bandwidth measure?",
      difficulty: "easy",
      options: [
        { text: "The amount of data that can be transmitted", isCorrect: true },
        { text: "The storage capacity", isCorrect: false },
        { text: "The number of IP addresses", isCorrect: false },
        { text: "The CPU speed", isCorrect: false },
      ],
    },
    {
      text: "What is phishing?",
      difficulty: "medium",
      options: [
        { text: "A type of online scam", isCorrect: true },
        { text: "A web design tool", isCorrect: false },
        { text: "A web browser extension", isCorrect: false },
        { text: "A type of data compression", isCorrect: false },
      ],
    },
    {
      text: "Which HTML tag is used to link to another page?",
      difficulty: "easy",
      options: [
        { text: "<a>", isCorrect: true },
        { text: "<link>", isCorrect: false },
        { text: "<href>", isCorrect: false },
        { text: "<src>", isCorrect: false },
      ],
    },
    {
      text: "What does a cookie do in a web browser?",
      difficulty: "medium",
      options: [
        { text: "Stores user preferences", isCorrect: true },
        { text: "Protects from viruses", isCorrect: false },
        { text: "Speeds up internet", isCorrect: false },
        { text: "Manages downloads", isCorrect: false },
      ],
    },
    {
      text: "Which one is a valid web development stack?",
      difficulty: "medium",
      options: [
        { text: "MERN", isCorrect: true },
        { text: "JPEG", isCorrect: false },
        { text: "IPV6", isCorrect: false },
        { text: "BIOS", isCorrect: false },
      ],
    },
    {
      text: "Which part of a web page handles user interaction?",
      difficulty: "medium",
      options: [
        { text: "JavaScript", isCorrect: true },
        { text: "HTML", isCorrect: false },
        { text: "CSS", isCorrect: false },
        { text: "SQL", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of a responsive web design?",
      difficulty: "medium",
      options: [
        { text: "To adapt to different screen sizes", isCorrect: true },
        { text: "To increase SEO", isCorrect: false },
        { text: "To compress images", isCorrect: false },
        { text: "To store backups", isCorrect: false },
      ],
    },
    {
      text: "Which of these is NOT a valid browser?",
      difficulty: "easy",
      options: [
        { text: "Ubuntu", isCorrect: true },
        { text: "Edge", isCorrect: false },
        { text: "Chrome", isCorrect: false },
        { text: "Safari", isCorrect: false },
      ],
    },
  ],
  "Tech Innovations": [
    {
      text: "What is the main function of 5G technology?",
      difficulty: "medium",
      options: [
        { text: "Faster data transmission speeds", isCorrect: true },
        { text: "Longer battery life", isCorrect: false },
        { text: "More secure passwords", isCorrect: false },
        { text: "Improved screen resolution", isCorrect: false },
      ],
    },
    {
      text: "Which company developed the first smartphone?",
      difficulty: "hard",
      options: [
        { text: "IBM", isCorrect: true },
        { text: "Apple", isCorrect: false },
        { text: "Samsung", isCorrect: false },
        { text: "Nokia", isCorrect: false },
      ],
    },
    {
      text: "What is blockchain primarily used for?",
      difficulty: "medium",
      options: [
        { text: "Securing digital transactions", isCorrect: true },
        { text: "Streaming video content", isCorrect: false },
        { text: "Compressing files", isCorrect: false },
        { text: "Powering home appliances", isCorrect: false },
      ],
    },
    {
      text: "Which innovation is essential for self-driving cars?",
      difficulty: "medium",
      options: [
        { text: "Artificial Intelligence", isCorrect: true },
        { text: "Cloud Storage", isCorrect: false },
        { text: "Smart TVs", isCorrect: false },
        { text: "Bluetooth", isCorrect: false },
      ],
    },
    {
      text: "What is a key feature of quantum computing?",
      difficulty: "hard",
      options: [
        { text: "Qubits", isCorrect: true },
        { text: "Transistors", isCorrect: false },
        { text: "Megabytes", isCorrect: false },
        { text: "Ethernet", isCorrect: false },
      ],
    },
    {
      text: "Which device popularized voice-controlled assistants?",
      difficulty: "easy",
      options: [
        { text: "Amazon Echo", isCorrect: true },
        { text: "iPod", isCorrect: false },
        { text: "Google Chromebook", isCorrect: false },
        { text: "Raspberry Pi", isCorrect: false },
      ],
    },
    {
      text: "What technology powers cryptocurrencies like Bitcoin?",
      difficulty: "medium",
      options: [
        { text: "Blockchain", isCorrect: true },
        { text: "Cloud Computing", isCorrect: false },
        { text: "Wi-Fi", isCorrect: false },
        { text: "IoT", isCorrect: false },
      ],
    },
    {
      text: "Which company is best known for developing electric cars?",
      difficulty: "easy",
      options: [
        { text: "Tesla", isCorrect: true },
        { text: "Intel", isCorrect: false },
        { text: "Sony", isCorrect: false },
        { text: "Panasonic", isCorrect: false },
      ],
    },
    {
      text: "What is LiDAR used for in technology?",
      difficulty: "hard",
      options: [
        { text: "Mapping surroundings with lasers", isCorrect: true },
        { text: "Enhancing sound quality", isCorrect: false },
        { text: "Improving battery efficiency", isCorrect: false },
        { text: "Detecting viruses", isCorrect: false },
      ],
    },
    {
      text: "Which of these is a wearable technology?",
      difficulty: "easy",
      options: [
        { text: "Smartwatch", isCorrect: true },
        { text: "Desktop computer", isCorrect: false },
        { text: "Wi-Fi router", isCorrect: false },
        { text: "Webcam", isCorrect: false },
      ],
    },
    {
      text: "Which AI system developed by OpenAI can write human-like text?",
      difficulty: "medium",
      options: [
        { text: "ChatGPT", isCorrect: true },
        { text: "Alexa", isCorrect: false },
        { text: "Siri", isCorrect: false },
        { text: "Watson", isCorrect: false },
      ],
    },
    {
      text: "What does IoT stand for?",
      difficulty: "easy",
      options: [
        { text: "Internet of Things", isCorrect: true },
        { text: "Input of Technology", isCorrect: false },
        { text: "Interface of Tablets", isCorrect: false },
        { text: "Internet of Transistors", isCorrect: false },
      ],
    },
    {
      text: "Which tech innovation enables real-time video conferencing?",
      difficulty: "easy",
      options: [
        { text: "WebRTC", isCorrect: true },
        { text: "BIOS", isCorrect: false },
        { text: "JPEG", isCorrect: false },
        { text: "GIF", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is an application of virtual reality?",
      difficulty: "medium",
      options: [
        { text: "Immersive gaming", isCorrect: true },
        { text: "Typing documents", isCorrect: false },
        { text: "File compression", isCorrect: false },
        { text: "Email security", isCorrect: false },
      ],
    },
    {
      text: "What does AR stand for in technology?",
      difficulty: "easy",
      options: [
        { text: "Augmented Reality", isCorrect: true },
        { text: "Artificial Reasoning", isCorrect: false },
        { text: "Automated Routing", isCorrect: false },
        { text: "Active Rendering", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a green technology innovation?",
      difficulty: "medium",
      options: [
        { text: "Solar panels", isCorrect: true },
        { text: "CRT monitors", isCorrect: false },
        { text: "Gasoline engines", isCorrect: false },
        { text: "Plastic packaging", isCorrect: false },
      ],
    },
    {
      text: "Which technology allows home automation?",
      difficulty: "medium",
      options: [
        { text: "Smart home systems", isCorrect: true },
        { text: "CD-ROM", isCorrect: false },
        { text: "Dial-up Internet", isCorrect: false },
        { text: "Dot matrix printers", isCorrect: false },
      ],
    },
    {
      text: "Which platform is widely used for collaborative software development?",
      difficulty: "easy",
      options: [
        { text: "GitHub", isCorrect: true },
        { text: "Netflix", isCorrect: false },
        { text: "Zoom", isCorrect: false },
        { text: "Spotify", isCorrect: false },
      ],
    },
    {
      text: "Which technology uses fingerprint and facial recognition?",
      difficulty: "medium",
      options: [
        { text: "Biometric authentication", isCorrect: true },
        { text: "Antivirus software", isCorrect: false },
        { text: "Graphic design", isCorrect: false },
        { text: "Cloud hosting", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is an example of AI in daily life?",
      difficulty: "easy",
      options: [
        { text: "Personalized recommendations on Netflix", isCorrect: true },
        { text: "Connecting to Wi-Fi", isCorrect: false },
        { text: "Using a calculator", isCorrect: false },
        { text: "Opening a text file", isCorrect: false },
      ],
    },
  ],
  "Human Body Systems": [
    {
      text: "Which system is responsible for transporting blood throughout the body?",
      difficulty: "easy",
      options: [
        { text: "Circulatory system", isCorrect: true },
        { text: "Respiratory system", isCorrect: false },
        { text: "Digestive system", isCorrect: false },
        { text: "Nervous system", isCorrect: false },
      ],
    },
    {
      text: "What is the main organ of the respiratory system?",
      difficulty: "easy",
      options: [
        { text: "Lungs", isCorrect: true },
        { text: "Heart", isCorrect: false },
        { text: "Stomach", isCorrect: false },
        { text: "Liver", isCorrect: false },
      ],
    },
    {
      text: "Which system includes the brain and spinal cord?",
      difficulty: "medium",
      options: [
        { text: "Nervous system", isCorrect: true },
        { text: "Muscular system", isCorrect: false },
        { text: "Skeletal system", isCorrect: false },
        { text: "Endocrine system", isCorrect: false },
      ],
    },
    {
      text: "What is the primary function of the digestive system?",
      difficulty: "easy",
      options: [
        { text: "Break down food and absorb nutrients", isCorrect: true },
        { text: "Pump blood", isCorrect: false },
        { text: "Filter toxins", isCorrect: false },
        { text: "Produce hormones", isCorrect: false },
      ],
    },
    {
      text: "Which system helps in defending the body against pathogens?",
      difficulty: "medium",
      options: [
        { text: "Immune system", isCorrect: true },
        { text: "Respiratory system", isCorrect: false },
        { text: "Nervous system", isCorrect: false },
        { text: "Muscular system", isCorrect: false },
      ],
    },
    {
      text: "Which bones protect the brain?",
      difficulty: "easy",
      options: [
        { text: "Skull", isCorrect: true },
        { text: "Rib cage", isCorrect: false },
        { text: "Pelvis", isCorrect: false },
        { text: "Vertebrae", isCorrect: false },
      ],
    },
    {
      text: "Which organ filters blood in the excretory system?",
      difficulty: "medium",
      options: [
        { text: "Kidneys", isCorrect: true },
        { text: "Lungs", isCorrect: false },
        { text: "Liver", isCorrect: false },
        { text: "Stomach", isCorrect: false },
      ],
    },
    {
      text: "Which muscle is involuntary and found only in the heart?",
      difficulty: "medium",
      options: [
        { text: "Cardiac muscle", isCorrect: true },
        { text: "Skeletal muscle", isCorrect: false },
        { text: "Smooth muscle", isCorrect: false },
        { text: "Voluntary muscle", isCorrect: false },
      ],
    },
    {
      text: "Which hormone regulates blood sugar levels?",
      difficulty: "medium",
      options: [
        { text: "Insulin", isCorrect: true },
        { text: "Adrenaline", isCorrect: false },
        { text: "Estrogen", isCorrect: false },
        { text: "Testosterone", isCorrect: false },
      ],
    },
    {
      text: "Which system controls body movement?",
      difficulty: "easy",
      options: [
        { text: "Muscular system", isCorrect: true },
        { text: "Digestive system", isCorrect: false },
        { text: "Endocrine system", isCorrect: false },
        { text: "Immune system", isCorrect: false },
      ],
    },
    {
      text: "Which organ is a part of both the respiratory and digestive systems?",
      difficulty: "hard",
      options: [
        { text: "Pharynx", isCorrect: true },
        { text: "Liver", isCorrect: false },
        { text: "Trachea", isCorrect: false },
        { text: "Esophagus", isCorrect: false },
      ],
    },
    {
      text: "What does the endocrine system use to regulate bodily functions?",
      difficulty: "medium",
      options: [
        { text: "Hormones", isCorrect: true },
        { text: "Nerves", isCorrect: false },
        { text: "Enzymes", isCorrect: false },
        { text: "Neurons", isCorrect: false },
      ],
    },
    {
      text: "Which part of the brain controls balance and coordination?",
      difficulty: "medium",
      options: [
        { text: "Cerebellum", isCorrect: true },
        { text: "Cerebrum", isCorrect: false },
        { text: "Medulla", isCorrect: false },
        { text: "Thalamus", isCorrect: false },
      ],
    },
    {
      text: "Which system helps to eliminate waste through urine?",
      difficulty: "medium",
      options: [
        { text: "Excretory system", isCorrect: true },
        { text: "Digestive system", isCorrect: false },
        { text: "Circulatory system", isCorrect: false },
        { text: "Respiratory system", isCorrect: false },
      ],
    },
    {
      text: "What is the smallest unit of the nervous system?",
      difficulty: "easy",
      options: [
        { text: "Neuron", isCorrect: true },
        { text: "Cell", isCorrect: false },
        { text: "Gland", isCorrect: false },
        { text: "Organ", isCorrect: false },
      ],
    },
    {
      text: "Which system works with muscles to produce movement?",
      difficulty: "easy",
      options: [
        { text: "Skeletal system", isCorrect: true },
        { text: "Digestive system", isCorrect: false },
        { text: "Nervous system", isCorrect: false },
        { text: "Integumentary system", isCorrect: false },
      ],
    },
    {
      text: "Which part of the digestive system absorbs nutrients?",
      difficulty: "medium",
      options: [
        { text: "Small intestine", isCorrect: true },
        { text: "Stomach", isCorrect: false },
        { text: "Large intestine", isCorrect: false },
        { text: "Liver", isCorrect: false },
      ],
    },
    {
      text: "Which system regulates body temperature and protects organs?",
      difficulty: "medium",
      options: [
        { text: "Integumentary system", isCorrect: true },
        { text: "Nervous system", isCorrect: false },
        { text: "Circulatory system", isCorrect: false },
        { text: "Digestive system", isCorrect: false },
      ],
    },
    {
      text: "Which system is responsible for oxygen and carbon dioxide exchange?",
      difficulty: "easy",
      options: [
        { text: "Respiratory system", isCorrect: true },
        { text: "Circulatory system", isCorrect: false },
        { text: "Nervous system", isCorrect: false },
        { text: "Digestive system", isCorrect: false },
      ],
    },
    {
      text: "Which body system includes glands that secrete hormones?",
      difficulty: "easy",
      options: [
        { text: "Endocrine system", isCorrect: true },
        { text: "Muscular system", isCorrect: false },
        { text: "Skeletal system", isCorrect: false },
        { text: "Respiratory system", isCorrect: false },
      ],
    },
  ],
  "Basic Science Quiz": [
    {
      text: "What is the boiling point of water at sea level?",
      difficulty: "easy",
      options: [
        { text: "100°C", isCorrect: true },
        { text: "90°C", isCorrect: false },
        { text: "110°C", isCorrect: false },
        { text: "120°C", isCorrect: false },
      ],
    },
    {
      text: "Which planet is known as the Red Planet?",
      difficulty: "easy",
      options: [
        { text: "Mars", isCorrect: true },
        { text: "Venus", isCorrect: false },
        { text: "Jupiter", isCorrect: false },
        { text: "Saturn", isCorrect: false },
      ],
    },
    {
      text: "What gas do plants absorb from the atmosphere?",
      difficulty: "easy",
      options: [
        { text: "Carbon dioxide", isCorrect: true },
        { text: "Oxygen", isCorrect: false },
        { text: "Nitrogen", isCorrect: false },
        { text: "Hydrogen", isCorrect: false },
      ],
    },
    {
      text: "What part of the cell contains DNA?",
      difficulty: "medium",
      options: [
        { text: "Nucleus", isCorrect: true },
        { text: "Cytoplasm", isCorrect: false },
        { text: "Cell membrane", isCorrect: false },
        { text: "Ribosome", isCorrect: false },
      ],
    },
    {
      text: "Which element has the chemical symbol 'O'?",
      difficulty: "easy",
      options: [
        { text: "Oxygen", isCorrect: true },
        { text: "Gold", isCorrect: false },
        { text: "Osmium", isCorrect: false },
        { text: "Oxide", isCorrect: false },
      ],
    },
    {
      text: "How many bones are in the adult human body?",
      difficulty: "medium",
      options: [
        { text: "206", isCorrect: true },
        { text: "210", isCorrect: false },
        { text: "198", isCorrect: false },
        { text: "215", isCorrect: false },
      ],
    },
    {
      text: "Which organ pumps blood throughout the human body?",
      difficulty: "easy",
      options: [
        { text: "Heart", isCorrect: true },
        { text: "Lungs", isCorrect: false },
        { text: "Brain", isCorrect: false },
        { text: "Liver", isCorrect: false },
      ],
    },
    {
      text: "What is the main gas found in the air we breathe?",
      difficulty: "easy",
      options: [
        { text: "Nitrogen", isCorrect: true },
        { text: "Oxygen", isCorrect: false },
        { text: "Carbon dioxide", isCorrect: false },
        { text: "Hydrogen", isCorrect: false },
      ],
    },
    {
      text: "Which vitamin is produced when a person is exposed to sunlight?",
      difficulty: "medium",
      options: [
        { text: "Vitamin D", isCorrect: true },
        { text: "Vitamin C", isCorrect: false },
        { text: "Vitamin B12", isCorrect: false },
        { text: "Vitamin A", isCorrect: false },
      ],
    },
    {
      text: "Which force pulls objects toward the Earth?",
      difficulty: "easy",
      options: [
        { text: "Gravity", isCorrect: true },
        { text: "Magnetism", isCorrect: false },
        { text: "Friction", isCorrect: false },
        { text: "Inertia", isCorrect: false },
      ],
    },
    {
      text: "What is the smallest unit of life?",
      difficulty: "medium",
      options: [
        { text: "Cell", isCorrect: true },
        { text: "Atom", isCorrect: false },
        { text: "Molecule", isCorrect: false },
        { text: "Organ", isCorrect: false },
      ],
    },
    {
      text: "Which planet is closest to the Sun?",
      difficulty: "medium",
      options: [
        { text: "Mercury", isCorrect: true },
        { text: "Venus", isCorrect: false },
        { text: "Earth", isCorrect: false },
        { text: "Mars", isCorrect: false },
      ],
    },
    {
      text: "What is H2O more commonly known as?",
      difficulty: "easy",
      options: [
        { text: "Water", isCorrect: true },
        { text: "Salt", isCorrect: false },
        { text: "Sugar", isCorrect: false },
        { text: "Hydrogen peroxide", isCorrect: false },
      ],
    },
    {
      text: "What part of the plant conducts photosynthesis?",
      difficulty: "medium",
      options: [
        { text: "Leaf", isCorrect: true },
        { text: "Root", isCorrect: false },
        { text: "Stem", isCorrect: false },
        { text: "Flower", isCorrect: false },
      ],
    },
    {
      text: "Which scientist developed the theory of gravity?",
      difficulty: "medium",
      options: [
        { text: "Isaac Newton", isCorrect: true },
        { text: "Albert Einstein", isCorrect: false },
        { text: "Nikola Tesla", isCorrect: false },
        { text: "Galileo Galilei", isCorrect: false },
      ],
    },
    {
      text: "What organ is responsible for filtering blood?",
      difficulty: "medium",
      options: [
        { text: "Kidneys", isCorrect: true },
        { text: "Lungs", isCorrect: false },
        { text: "Heart", isCorrect: false },
        { text: "Liver", isCorrect: false },
      ],
    },
    {
      text: "Which state of matter has a definite volume but no definite shape?",
      difficulty: "medium",
      options: [
        { text: "Liquid", isCorrect: true },
        { text: "Solid", isCorrect: false },
        { text: "Gas", isCorrect: false },
        { text: "Plasma", isCorrect: false },
      ],
    },
    {
      text: "What part of the eye controls the amount of light entering?",
      difficulty: "medium",
      options: [
        { text: "Pupil", isCorrect: true },
        { text: "Iris", isCorrect: false },
        { text: "Cornea", isCorrect: false },
        { text: "Lens", isCorrect: false },
      ],
    },
    {
      text: "Which metal is liquid at room temperature?",
      difficulty: "hard",
      options: [
        { text: "Mercury", isCorrect: true },
        { text: "Lead", isCorrect: false },
        { text: "Iron", isCorrect: false },
        { text: "Zinc", isCorrect: false },
      ],
    },
    {
      text: "What is the process by which plants make their own food?",
      difficulty: "easy",
      options: [
        { text: "Photosynthesis", isCorrect: true },
        { text: "Respiration", isCorrect: false },
        { text: "Digestion", isCorrect: false },
        { text: "Evaporation", isCorrect: false },
      ],
    },
  ],
  "Computer Science Basics": [
    {
      text: "What does CPU stand for?",
      difficulty: "easy",
      options: [
        { text: "Central Processing Unit", isCorrect: true },
        { text: "Central Programming Unit", isCorrect: false },
        { text: "Central Process Unit", isCorrect: false },
        { text: "Computer Processing Unit", isCorrect: false },
      ],
    },
    {
      text: "What is the main purpose of an operating system?",
      difficulty: "easy",
      options: [
        { text: "To manage computer hardware and software", isCorrect: true },
        { text: "To run antivirus software", isCorrect: false },
        { text: "To process user data", isCorrect: false },
        { text: "To perform arithmetic calculations", isCorrect: false },
      ],
    },
    {
      text: "What does HTML stand for?",
      difficulty: "easy",
      options: [
        { text: "HyperText Markup Language", isCorrect: true },
        { text: "HyperText Machine Language", isCorrect: false },
        { text: "HyperText Modern Language", isCorrect: false },
        { text: "HyperTool Markup Language", isCorrect: false },
      ],
    },
    {
      text: "Which data structure uses LIFO (Last In, First Out)?",
      difficulty: "medium",
      options: [
        { text: "Stack", isCorrect: true },
        { text: "Queue", isCorrect: false },
        { text: "Array", isCorrect: false },
        { text: "Tree", isCorrect: false },
      ],
    },
    {
      text: "What is a primary key in a database?",
      difficulty: "medium",
      options: [
        { text: "A unique identifier for a record", isCorrect: true },
        { text: "A foreign key for table relationships", isCorrect: false },
        { text: "A column to store large data", isCorrect: false },
        { text: "A tool to perform queries", isCorrect: false },
      ],
    },
    {
      text: "Which programming language is primarily used for Android app development?",
      difficulty: "medium",
      options: [
        { text: "Java", isCorrect: true },
        { text: "Python", isCorrect: false },
        { text: "C#", isCorrect: false },
        { text: "Ruby", isCorrect: false },
      ],
    },
    {
      text: "What is the binary representation of the decimal number 5?",
      difficulty: "easy",
      options: [
        { text: "101", isCorrect: true },
        { text: "110", isCorrect: false },
        { text: "111", isCorrect: false },
        { text: "100", isCorrect: false },
      ],
    },
    {
      text: "Which sorting algorithm is the fastest in the average case?",
      difficulty: "hard",
      options: [
        { text: "Merge Sort", isCorrect: false },
        { text: "Quick Sort", isCorrect: true },
        { text: "Bubble Sort", isCorrect: false },
        { text: "Selection Sort", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of an IP address?",
      difficulty: "medium",
      options: [
        { text: "To uniquely identify a device on a network", isCorrect: true },
        { text: "To store user passwords", isCorrect: false },
        { text: "To encrypt network traffic", isCorrect: false },
        { text: "To assign memory to a program", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a NoSQL database?",
      difficulty: "medium",
      options: [
        { text: "MongoDB", isCorrect: true },
        { text: "MySQL", isCorrect: false },
        { text: "PostgreSQL", isCorrect: false },
        { text: "SQLite", isCorrect: false },
      ],
    },
    {
      text: "What does RAM stand for?",
      difficulty: "easy",
      options: [
        { text: "Random Access Memory", isCorrect: true },
        { text: "Read Access Memory", isCorrect: false },
        { text: "Run Access Memory", isCorrect: false },
        { text: "Rapid Access Module", isCorrect: false },
      ],
    },
    {
      text: "Which part of a computer is considered the 'brain'?",
      difficulty: "easy",
      options: [
        { text: "CPU", isCorrect: true },
        { text: "RAM", isCorrect: false },
        { text: "Hard Drive", isCorrect: false },
        { text: "Motherboard", isCorrect: false },
      ],
    },
    {
      text: "Which of these is an example of system software?",
      difficulty: "medium",
      options: [
        { text: "Operating System", isCorrect: true },
        { text: "Word Processor", isCorrect: false },
        { text: "Web Browser", isCorrect: false },
        { text: "Video Editor", isCorrect: false },
      ],
    },
    {
      text: "What does URL stand for?",
      difficulty: "medium",
      options: [
        { text: "Uniform Resource Locator", isCorrect: true },
        { text: "Universal Resource Link", isCorrect: false },
        { text: "Unified Resource Locator", isCorrect: false },
        { text: "Uniform Retrieval Link", isCorrect: false },
      ],
    },
    {
      text: "Which logic gate returns true only when both inputs are true?",
      difficulty: "medium",
      options: [
        { text: "AND", isCorrect: true },
        { text: "OR", isCorrect: false },
        { text: "NOT", isCorrect: false },
        { text: "XOR", isCorrect: false },
      ],
    },
    {
      text: "What type of number system is used in computers?",
      difficulty: "easy",
      options: [
        { text: "Binary", isCorrect: true },
        { text: "Decimal", isCorrect: false },
        { text: "Octal", isCorrect: false },
        { text: "Hexadecimal", isCorrect: false },
      ],
    },
    {
      text: "Which one is a high-level programming language?",
      difficulty: "easy",
      options: [
        { text: "Python", isCorrect: true },
        { text: "Assembly", isCorrect: false },
        { text: "Machine Code", isCorrect: false },
        { text: "Binary", isCorrect: false },
      ],
    },
    {
      text: "Which device is used to connect a computer to a network?",
      difficulty: "medium",
      options: [
        { text: "Router", isCorrect: true },
        { text: "Monitor", isCorrect: false },
        { text: "Keyboard", isCorrect: false },
        { text: "Mouse", isCorrect: false },
      ],
    },
    {
      text: "Which one of these is NOT an operating system?",
      difficulty: "easy",
      options: [
        { text: "Microsoft Word", isCorrect: true },
        { text: "Linux", isCorrect: false },
        { text: "Windows", isCorrect: false },
        { text: "macOS", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is used to structure content on the web?",
      difficulty: "medium",
      options: [
        { text: "HTML", isCorrect: true },
        { text: "CSS", isCorrect: false },
        { text: "JavaScript", isCorrect: false },
        { text: "Python", isCorrect: false },
      ],
    },
  ],
  "Programming Fundamentals": [
    {
      text: "What does the acronym OOP stand for?",
      options: [
        { text: "Object-Oriented Programming", isCorrect: true },
        { text: "Objective-Oriented Programming", isCorrect: false },
        { text: "Operation-Oriented Programming", isCorrect: false },
        { text: "Object-Oriented Process", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      text: "Which language is primarily used for web development?",
      options: [
        { text: "JavaScript", isCorrect: true },
        { text: "Python", isCorrect: false },
        { text: "C++", isCorrect: false },
        { text: "Java", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      text: "What is the output of `console.log(typeof null)` in JavaScript?",
      options: [
        { text: "object", isCorrect: true },
        { text: "null", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "string", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "Which method is used to add an element to the end of an array in JavaScript?",
      options: [
        { text: "push()", isCorrect: true },
        { text: "pop()", isCorrect: false },
        { text: "shift()", isCorrect: false },
        { text: "unshift()", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      text: "What is the primary purpose of the `virtual` keyword in C++?",
      options: [
        { text: "To enable polymorphism", isCorrect: true },
        { text: "To declare a global variable", isCorrect: false },
        { text: "To optimize memory", isCorrect: false },
        { text: "To create an abstract class", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "What is the time complexity of binary search?",
      options: [
        { text: "O(log n)", isCorrect: true },
        { text: "O(n)", isCorrect: false },
        { text: "O(1)", isCorrect: false },
        { text: "O(n log n)", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "Which programming paradigm focuses on functions and immutability?",
      options: [
        { text: "Functional Programming", isCorrect: true },
        { text: "Object-Oriented Programming", isCorrect: false },
        { text: "Procedural Programming", isCorrect: false },
        { text: "Logic Programming", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "Which of the following is a valid way to declare a variable in Python?",
      options: [
        { text: "variable_name = 10", isCorrect: true },
        { text: "int variable_name = 10;", isCorrect: false },
        { text: "let variable_name = 10;", isCorrect: false },
        { text: "var variable_name = 10;", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      text: "What does the `finally` block do in a try-catch-finally structure?",
      options: [
        { text: "Executes code regardless of an exception", isCorrect: true },
        { text: "Handles the exception", isCorrect: false },
        { text: "Rethrows the exception", isCorrect: false },
        { text: "Prevents exceptions from propagating", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "Which of the following is NOT a primitive data type in Java?",
      options: [
        { text: "String", isCorrect: true },
        { text: "int", isCorrect: false },
        { text: "boolean", isCorrect: false },
        { text: "float", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "Which keyword in JavaScript is used to declare a constant variable?",
      options: [
        { text: "const", isCorrect: true },
        { text: "var", isCorrect: false },
        { text: "let", isCorrect: false },
        { text: "constant", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      text: "What is the default value of a reference type in Java?",
      options: [
        { text: "null", isCorrect: true },
        { text: "undefined", isCorrect: false },
        { text: "0", isCorrect: false },
        { text: "empty string", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "Which programming language is known for its simplicity and readability?",
      options: [
        { text: "Python", isCorrect: true },
        { text: "C++", isCorrect: false },
        { text: "Assembly", isCorrect: false },
        { text: "Perl", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      text: "What does the `super` keyword do in Java?",
      options: [
        { text: "Accesses the parent class constructor", isCorrect: true },
        { text: "Creates a new instance", isCorrect: false },
        { text: "References a subclass", isCorrect: false },
        { text: "Accesses a static method", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      text: "What does the term 'closure' refer to in JavaScript?",
      options: [
        {
          text: "A function retaining access to its lexical scope",
          isCorrect: true,
        },
        { text: "A function that is immediately invoked", isCorrect: false },
        { text: "A function without a return statement", isCorrect: false },
        { text: "A function with no parameters", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      text: "Which of these is a valid way to create a new thread in Java?",
      options: [
        { text: "Extend Thread class", isCorrect: true },
        { text: "Implement Runnable", isCorrect: true },
        { text: "Call thread()", isCorrect: false },
        { text: "Use the ThreadFactory", isCorrect: true },
      ],
      difficulty: "hard",
    },
    {
      text: "What is the difference between `==` and `===` in JavaScript?",
      options: [
        { text: "`===` checks both value and type", isCorrect: true },
        { text: "`==` checks only value", isCorrect: true },
        { text: "`==` and `===` are identical", isCorrect: false },
        { text: "`===` checks only type", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "Which of the following is an immutable object in Java?",
      options: [
        { text: "String", isCorrect: true },
        { text: "ArrayList", isCorrect: false },
        { text: "HashMap", isCorrect: false },
        { text: "StringBuilder", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "What is the output of `5 + '5'` in JavaScript?",
      options: [
        { text: "55", isCorrect: true },
        { text: "10", isCorrect: false },
        { text: "NaN", isCorrect: false },
        { text: "Error", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      text: "Which of these is a strongly typed programming language?",
      options: [
        { text: "Java", isCorrect: true },
        { text: "JavaScript", isCorrect: false },
        { text: "Python", isCorrect: false },
        { text: "Ruby", isCorrect: false },
      ],
      difficulty: "easy",
    },
  ],
  "Data Structures": [
    {
      text: "Which data structure uses FIFO (First In, First Out) principle?",
      difficulty: "easy",
      options: [
        { text: "Queue", isCorrect: true },
        { text: "Stack", isCorrect: false },
        { text: "Linked List", isCorrect: false },
        { text: "Tree", isCorrect: false },
      ],
    },
    {
      text: "Which data structure uses LIFO (Last In, First Out) principle?",
      difficulty: "easy",
      options: [
        { text: "Stack", isCorrect: true },
        { text: "Queue", isCorrect: false },
        { text: "Graph", isCorrect: false },
        { text: "Array", isCorrect: false },
      ],
    },
    {
      text: "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?",
      difficulty: "medium",
      options: [
        { text: "O(log n)", isCorrect: true },
        { text: "O(n)", isCorrect: false },
        { text: "O(1)", isCorrect: false },
        { text: "O(n log n)", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a linear data structure?",
      difficulty: "easy",
      options: [
        { text: "Array", isCorrect: true },
        { text: "Tree", isCorrect: false },
        { text: "Graph", isCorrect: false },
        { text: "Hash Table", isCorrect: false },
      ],
    },
    {
      text: "Which data structure can be used to implement a priority queue?",
      difficulty: "medium",
      options: [
        { text: "Heap", isCorrect: true },
        { text: "Stack", isCorrect: false },
        { text: "Linked List", isCorrect: false },
        { text: "Queue", isCorrect: false },
      ],
    },
    {
      text: "Which data structure is most suitable for implementing recursion?",
      difficulty: "easy",
      options: [
        { text: "Stack", isCorrect: true },
        { text: "Queue", isCorrect: false },
        { text: "Tree", isCorrect: false },
        { text: "Array", isCorrect: false },
      ],
    },
    {
      text: "What is the worst-case time complexity of linear search?",
      difficulty: "easy",
      options: [
        { text: "O(n)", isCorrect: true },
        { text: "O(log n)", isCorrect: false },
        { text: "O(n log n)", isCorrect: false },
        { text: "O(1)", isCorrect: false },
      ],
    },
    {
      text: "Which of the following data structures is non-linear?",
      difficulty: "easy",
      options: [
        { text: "Tree", isCorrect: true },
        { text: "Array", isCorrect: false },
        { text: "Stack", isCorrect: false },
        { text: "Queue", isCorrect: false },
      ],
    },
    {
      text: "Which data structure supports direct access by index?",
      difficulty: "easy",
      options: [
        { text: "Array", isCorrect: true },
        { text: "Linked List", isCorrect: false },
        { text: "Stack", isCorrect: false },
        { text: "Queue", isCorrect: false },
      ],
    },
    {
      text: "What is the time complexity for inserting an element at the beginning of a linked list?",
      difficulty: "medium",
      options: [
        { text: "O(1)", isCorrect: true },
        { text: "O(n)", isCorrect: false },
        { text: "O(log n)", isCorrect: false },
        { text: "O(n log n)", isCorrect: false },
      ],
    },
    {
      text: "Which of the following operations is fastest in a hash table?",
      difficulty: "medium",
      options: [
        { text: "Search", isCorrect: true },
        { text: "Traversal", isCorrect: false },
        { text: "Sorting", isCorrect: false },
        { text: "Insertion at the end", isCorrect: false },
      ],
    },
    {
      text: "What is a binary tree where every non-leaf node has exactly two children?",
      difficulty: "medium",
      options: [
        { text: "Full Binary Tree", isCorrect: true },
        { text: "Complete Binary Tree", isCorrect: false },
        { text: "Balanced Tree", isCorrect: false },
        { text: "Heap", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is NOT a data structure?",
      difficulty: "easy",
      options: [
        { text: "Loop", isCorrect: true },
        { text: "Stack", isCorrect: false },
        { text: "Queue", isCorrect: false },
        { text: "Graph", isCorrect: false },
      ],
    },
    {
      text: "Which of these data structures is best for hierarchical data?",
      difficulty: "easy",
      options: [
        { text: "Tree", isCorrect: true },
        { text: "Array", isCorrect: false },
        { text: "Stack", isCorrect: false },
        { text: "Queue", isCorrect: false },
      ],
    },
    {
      text: "Which traversal method processes nodes level by level in a tree?",
      difficulty: "medium",
      options: [
        { text: "Level Order", isCorrect: true },
        { text: "Inorder", isCorrect: false },
        { text: "Preorder", isCorrect: false },
        { text: "Postorder", isCorrect: false },
      ],
    },
    {
      text: "What does a graph consist of?",
      difficulty: "easy",
      options: [
        { text: "Vertices and Edges", isCorrect: true },
        { text: "Nodes and Lists", isCorrect: false },
        { text: "Points and Lines", isCorrect: false },
        { text: "Arrays and Pointers", isCorrect: false },
      ],
    },
    {
      text: "What is the worst-case time complexity for searching in a hash table?",
      difficulty: "medium",
      options: [
        { text: "O(n)", isCorrect: true },
        { text: "O(1)", isCorrect: false },
        { text: "O(log n)", isCorrect: false },
        { text: "O(n log n)", isCorrect: false },
      ],
    },
    {
      text: "Which algorithm uses a stack to traverse a graph?",
      difficulty: "medium",
      options: [
        { text: "Depth First Search (DFS)", isCorrect: true },
        { text: "Breadth First Search (BFS)", isCorrect: false },
        { text: "Dijkstra's Algorithm", isCorrect: false },
        { text: "Kruskal's Algorithm", isCorrect: false },
      ],
    },
    {
      text: "Which data structure allows constant-time lookup on average?",
      difficulty: "medium",
      options: [
        { text: "Hash Table", isCorrect: true },
        { text: "Stack", isCorrect: false },
        { text: "Queue", isCorrect: false },
        { text: "Tree", isCorrect: false },
      ],
    },
    {
      text: "What is the time complexity of accessing an element in an array by index?",
      difficulty: "easy",
      options: [
        { text: "O(1)", isCorrect: true },
        { text: "O(log n)", isCorrect: false },
        { text: "O(n)", isCorrect: false },
        { text: "O(n log n)", isCorrect: false },
      ],
    },
  ],
  Physics: [
    {
      text: "What is Newton's second law of motion?",
      difficulty: "easy",
      options: [
        { text: "Force equals mass times acceleration", isCorrect: true },
        { text: "An object in motion stays in motion", isCorrect: false },
        {
          text: "For every action, there is an equal and opposite reaction",
          isCorrect: false,
        },
        { text: "Energy cannot be created or destroyed", isCorrect: false },
      ],
    },
    {
      text: "What is the SI unit of force?",
      difficulty: "easy",
      options: [
        { text: "Newton", isCorrect: true },
        { text: "Joule", isCorrect: false },
        { text: "Pascal", isCorrect: false },
        { text: "Watt", isCorrect: false },
      ],
    },
    {
      text: "What does E=mc^2 represent?",
      difficulty: "medium",
      options: [
        { text: "Energy-mass equivalence", isCorrect: true },
        { text: "Kinetic energy formula", isCorrect: false },
        { text: "Force-mass relationship", isCorrect: false },
        { text: "Work-energy theorem", isCorrect: false },
      ],
    },
    {
      text: "What is the universal gravitational constant (G)?",
      difficulty: "medium",
      options: [
        { text: "6.674 × 10^-11 N·m²/kg²", isCorrect: true },
        { text: "9.8 m/s²", isCorrect: false },
        { text: "1.6 × 10^-19 C", isCorrect: false },
        { text: "3.0 × 10^8 m/s", isCorrect: false },
      ],
    },
    {
      text: "What is the formula for kinetic energy?",
      difficulty: "easy",
      options: [
        { text: "1/2 mv²", isCorrect: true },
        { text: "mgh", isCorrect: false },
        { text: "mv", isCorrect: false },
        { text: "qV", isCorrect: false },
      ],
    },
    {
      text: "What is the acceleration due to gravity on Earth?",
      difficulty: "easy",
      options: [
        { text: "9.8 m/s²", isCorrect: true },
        { text: "6.674 × 10^-11 m/s²", isCorrect: false },
        { text: "3.0 × 10^8 m/s²", isCorrect: false },
        { text: "1.6 × 10^-19 m/s²", isCorrect: false },
      ],
    },
    {
      text: "Which law states that the pressure of a gas is inversely proportional to its volume?",
      difficulty: "medium",
      options: [
        { text: "Boyle's Law", isCorrect: true },
        { text: "Charles's Law", isCorrect: false },
        { text: "Avogadro's Law", isCorrect: false },
        { text: "Pascal's Law", isCorrect: false },
      ],
    },
    {
      text: "What is the SI unit of power?",
      difficulty: "easy",
      options: [
        { text: "Watt", isCorrect: true },
        { text: "Joule", isCorrect: false },
        { text: "Newton", isCorrect: false },
        { text: "Ampere", isCorrect: false },
      ],
    },
    {
      text: "What is the work done when a 10 N force moves an object 5 m in the direction of the force?",
      difficulty: "medium",
      options: [
        { text: "50 J", isCorrect: true },
        { text: "5 J", isCorrect: false },
        { text: "10 J", isCorrect: false },
        { text: "500 J", isCorrect: false },
      ],
    },
    {
      text: "What is the speed of light in a vacuum?",
      difficulty: "easy",
      options: [
        { text: "3.0 × 10^8 m/s", isCorrect: true },
        { text: "9.8 m/s", isCorrect: false },
        { text: "1.6 × 10^-19 m/s", isCorrect: false },
        { text: "6.674 × 10^-11 m/s", isCorrect: false },
      ],
    },
    {
      text: "What type of wave is sound?",
      difficulty: "easy",
      options: [
        { text: "Longitudinal", isCorrect: true },
        { text: "Transverse", isCorrect: false },
        { text: "Electromagnetic", isCorrect: false },
        { text: "Stationary", isCorrect: false },
      ],
    },
    {
      text: "What is the formula for Ohm's Law?",
      difficulty: "easy",
      options: [
        { text: "V = IR", isCorrect: true },
        { text: "P = VI", isCorrect: false },
        { text: "I = V/R", isCorrect: false },
        { text: "R = V/I", isCorrect: false },
      ],
    },
    {
      text: "What is the SI unit of electric charge?",
      difficulty: "easy",
      options: [
        { text: "Coulomb", isCorrect: true },
        { text: "Ampere", isCorrect: false },
        { text: "Volt", isCorrect: false },
        { text: "Ohm", isCorrect: false },
      ],
    },
    {
      text: "What is the energy of a photon with a frequency of 5 × 10^14 Hz? (h = 6.63 × 10^-34 J·s)",
      difficulty: "hard",
      options: [
        { text: "3.315 × 10^-19 J", isCorrect: true },
        { text: "6.63 × 10^-19 J", isCorrect: false },
        { text: "1.327 × 10^-18 J", isCorrect: false },
        { text: "5.0 × 10^-14 J", isCorrect: false },
      ],
    },
    {
      text: "What is the period of a wave with a frequency of 10 Hz?",
      difficulty: "medium",
      options: [
        { text: "0.1 s", isCorrect: true },
        { text: "10 s", isCorrect: false },
        { text: "0.01 s", isCorrect: false },
        { text: "1 s", isCorrect: false },
      ],
    },
  ],
  Biology: [
    {
      text: "What is the primary function of mitochondria in cells?",
      difficulty: "easy",
      options: [
        { text: "Energy production", isCorrect: true },
        { text: "Protein synthesis", isCorrect: false },
        { text: "Photosynthesis", isCorrect: false },
        { text: "Cell division", isCorrect: false },
      ],
    },
    {
      text: "What is the monomer unit of proteins?",
      difficulty: "easy",
      options: [
        { text: "Amino acids", isCorrect: true },
        { text: "Nucleotides", isCorrect: false },
        { text: "Monosaccharides", isCorrect: false },
        { text: "Fatty acids", isCorrect: false },
      ],
    },
    {
      text: "Which organ is responsible for filtering blood in humans?",
      difficulty: "easy",
      options: [
        { text: "Kidney", isCorrect: true },
        { text: "Liver", isCorrect: false },
        { text: "Heart", isCorrect: false },
        { text: "Lungs", isCorrect: false },
      ],
    },
    {
      text: "What is the primary pigment involved in photosynthesis?",
      difficulty: "easy",
      options: [
        { text: "Chlorophyll", isCorrect: true },
        { text: "Carotene", isCorrect: false },
        { text: "Xanthophyll", isCorrect: false },
        { text: "Anthocyanin", isCorrect: false },
      ],
    },
    {
      text: "What is the process by which cells divide to form two identical daughter cells?",
      difficulty: "medium",
      options: [
        { text: "Mitosis", isCorrect: true },
        { text: "Meiosis", isCorrect: false },
        { text: "Binary fission", isCorrect: false },
        { text: "Cytokinesis", isCorrect: false },
      ],
    },
    {
      text: "What is the molecule that carries genetic information in most living organisms?",
      difficulty: "easy",
      options: [
        { text: "DNA", isCorrect: true },
        { text: "RNA", isCorrect: false },
        { text: "Proteins", isCorrect: false },
        { text: "Lipids", isCorrect: false },
      ],
    },
    {
      text: "What is the name of the process by which plants lose water through their leaves?",
      difficulty: "medium",
      options: [
        { text: "Transpiration", isCorrect: true },
        { text: "Respiration", isCorrect: false },
        { text: "Photosynthesis", isCorrect: false },
        { text: "Excretion", isCorrect: false },
      ],
    },
    {
      text: "Which part of the brain controls coordination and balance?",
      difficulty: "medium",
      options: [
        { text: "Cerebellum", isCorrect: true },
        { text: "Cerebrum", isCorrect: false },
        { text: "Medulla oblongata", isCorrect: false },
        { text: "Hypothalamus", isCorrect: false },
      ],
    },
    {
      text: "What is the structural and functional unit of the kidney?",
      difficulty: "medium",
      options: [
        { text: "Nephron", isCorrect: true },
        { text: "Neuron", isCorrect: false },
        { text: "Alveolus", isCorrect: false },
        { text: "Capillary", isCorrect: false },
      ],
    },
    {
      text: "Which organ in the human body produces insulin?",
      difficulty: "medium",
      options: [
        { text: "Pancreas", isCorrect: true },
        { text: "Liver", isCorrect: false },
        { text: "Kidney", isCorrect: false },
        { text: "Stomach", isCorrect: false },
      ],
    },
    {
      text: "What is the name of the bond that joins amino acids together?",
      difficulty: "medium",
      options: [
        { text: "Peptide bond", isCorrect: true },
        { text: "Ionic bond", isCorrect: false },
        { text: "Hydrogen bond", isCorrect: false },
        { text: "Glycosidic bond", isCorrect: false },
      ],
    },
    {
      text: "What is the term for organisms that produce their own food?",
      difficulty: "easy",
      options: [
        { text: "Autotrophs", isCorrect: true },
        { text: "Heterotrophs", isCorrect: false },
        { text: "Parasites", isCorrect: false },
        { text: "Decomposers", isCorrect: false },
      ],
    },
    {
      text: "Which type of blood cell is primarily responsible for immunity?",
      difficulty: "medium",
      options: [
        { text: "White blood cells", isCorrect: true },
        { text: "Red blood cells", isCorrect: false },
        { text: "Platelets", isCorrect: false },
        { text: "Plasma", isCorrect: false },
      ],
    },
    {
      text: "What is the function of ribosomes in a cell?",
      difficulty: "easy",
      options: [
        { text: "Protein synthesis", isCorrect: true },
        { text: "Lipid storage", isCorrect: false },
        { text: "Energy production", isCorrect: false },
        { text: "DNA replication", isCorrect: false },
      ],
    },
    {
      text: "What is the basic structural unit of all living organisms?",
      difficulty: "easy",
      options: [
        { text: "Cell", isCorrect: true },
        { text: "Tissue", isCorrect: false },
        { text: "Organ", isCorrect: false },
        { text: "Molecule", isCorrect: false },
      ],
    },
  ],
  Chemistry: [
    {
      text: "What is the most abundant gas in Earth's atmosphere?",
      difficulty: "easy",
      options: [
        { text: "Nitrogen", isCorrect: true },
        { text: "Oxygen", isCorrect: false },
        { text: "Carbon Dioxide", isCorrect: false },
        { text: "Argon", isCorrect: false },
      ],
    },
    {
      text: "What is the chemical formula for water?",
      difficulty: "easy",
      options: [
        { text: "H2O", isCorrect: true },
        { text: "O2", isCorrect: false },
        { text: "CO2", isCorrect: false },
        { text: "H2O2", isCorrect: false },
      ],
    },
    {
      text: "What is the pH of a neutral solution?",
      difficulty: "easy",
      options: [
        { text: "7", isCorrect: true },
        { text: "0", isCorrect: false },
        { text: "14", isCorrect: false },
        { text: "1", isCorrect: false },
      ],
    },
    {
      text: "What is the molar mass of carbon dioxide (CO2)?",
      difficulty: "medium",
      options: [
        { text: "44 g/mol", isCorrect: true },
        { text: "28 g/mol", isCorrect: false },
        { text: "18 g/mol", isCorrect: false },
        { text: "32 g/mol", isCorrect: false },
      ],
    },
    {
      text: "Which element is represented by the symbol 'Na'?",
      difficulty: "easy",
      options: [
        { text: "Sodium", isCorrect: true },
        { text: "Nitrogen", isCorrect: false },
        { text: "Neon", isCorrect: false },
        { text: "Nickel", isCorrect: false },
      ],
    },
    {
      text: "What type of bond is formed between two water molecules?",
      difficulty: "medium",
      options: [
        { text: "Hydrogen bond", isCorrect: true },
        { text: "Ionic bond", isCorrect: false },
        { text: "Covalent bond", isCorrect: false },
        { text: "Metallic bond", isCorrect: false },
      ],
    },
    {
      text: "What is the atomic number of oxygen?",
      difficulty: "easy",
      options: [
        { text: "8", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "7", isCorrect: false },
        { text: "9", isCorrect: false },
      ],
    },
    {
      text: "Which gas is commonly used in balloons because it is lighter than air?",
      difficulty: "medium",
      options: [
        { text: "Helium", isCorrect: true },
        { text: "Hydrogen", isCorrect: false },
        { text: "Nitrogen", isCorrect: false },
        { text: "Oxygen", isCorrect: false },
      ],
    },
    {
      text: "What is the main component of natural gas?",
      difficulty: "medium",
      options: [
        { text: "Methane", isCorrect: true },
        { text: "Propane", isCorrect: false },
        { text: "Butane", isCorrect: false },
        { text: "Ethane", isCorrect: false },
      ],
    },
    {
      text: "Which acid is found in vinegar?",
      difficulty: "medium",
      options: [
        { text: "Acetic acid", isCorrect: true },
        { text: "Citric acid", isCorrect: false },
        { text: "Lactic acid", isCorrect: false },
        { text: "Sulfuric acid", isCorrect: false },
      ],
    },
    {
      text: "What is the process of converting a liquid to a gas called?",
      difficulty: "easy",
      options: [
        { text: "Evaporation", isCorrect: true },
        { text: "Condensation", isCorrect: false },
        { text: "Sublimation", isCorrect: false },
        { text: "Freezing", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is an alkali metal?",
      difficulty: "medium",
      options: [
        { text: "Potassium", isCorrect: true },
        { text: "Calcium", isCorrect: false },
        { text: "Iron", isCorrect: false },
        { text: "Aluminum", isCorrect: false },
      ],
    },
    {
      text: "What is the name of the process in which plants produce glucose?",
      difficulty: "medium",
      options: [
        { text: "Photosynthesis", isCorrect: true },
        { text: "Respiration", isCorrect: false },
        { text: "Fermentation", isCorrect: false },
        { text: "Oxidation", isCorrect: false },
      ],
    },
    {
      text: "Which compound is known as the universal solvent?",
      difficulty: "easy",
      options: [
        { text: "Water", isCorrect: true },
        { text: "Ethanol", isCorrect: false },
        { text: "Acetone", isCorrect: false },
        { text: "Methanol", isCorrect: false },
      ],
    },
    {
      text: "What is the chemical formula for table salt?",
      difficulty: "easy",
      options: [
        { text: "NaCl", isCorrect: true },
        { text: "KCl", isCorrect: false },
        { text: "CaCl2", isCorrect: false },
        { text: "MgCl2", isCorrect: false },
      ],
    },
  ],
};

async function seedQuestions() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("🔗 Connected to MongoDB");

    const quizzes = await Quiz.find();

    for (const quiz of quizzes) {
      const quizTitle = quiz.title;
      const questions = questionsByQuiz[quizTitle];

      if (!questions) {
        console.warn(`⚠️ No questions found for: ${quizTitle}`);
        continue;
      }

      quiz.questions = questions;
      await quiz.save();

      console.log(
        `✅ Added ${questions.length} questions to quiz: ${quizTitle}`
      );
    }

    mongoose.connection.close();
    console.log("🌱 Question seeding complete.");
  } catch (err) {
    console.error("❌ Seeding error:", err);
    mongoose.connection.close();
  }
}

seedQuestions();
