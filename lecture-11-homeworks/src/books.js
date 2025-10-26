import HarryPotterImg from "./images/harry-potter.jpeg";
import GameOfThronesImg from "./images/game-of-thrones.jpg";
import LordOfRingsImg from "./images/The lord of rings.jpg";
import ToKillImg from "./images/to-kill-a-mockbird.jpg";

const books = [
  {
    id: 1,
    url: HarryPotterImg,
    title: "Harry Potter and the Sorcerer's Stone",
    description:
      "A young wizard discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
    characters: [
      "Harry Potter",
      "Hermione Granger",
      "Ron Weasley",
      "Albus Dumbledore",
    ],
  },
  {
    id: 2,
    url: LordOfRingsImg,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A hobbit embarks on a perilous quest to destroy a powerful ring that could doom Middle-earth.",
    characters: ["Frodo Baggins", "Gandalf", "Aragorn", "Legolas", "Gimli"],
  },
  {
    id: 3,
    url: ToKillImg,
    title: "To Kill a Mockingbird",
    description:
      "A story of racial injustice and childhood innocence in the Deep South during the 1930s.",
    characters: ["Scout Finch", "Atticus Finch", "Jem Finch", "Boo Radley"],
  },
  {
    id: 4,
    url: GameOfThronesImg,
    title: "A Game of Thrones",
    description:
      "Noble families vie for control of the Iron Throne in a fantasy world filled with political intrigue and betrayal.",
    characters: [
      "Eddard Stark",
      "Daenerys Targaryen",
      "Jon Snow",
      "Tyrion Lannister",
    ],
  },
];

export default books;
