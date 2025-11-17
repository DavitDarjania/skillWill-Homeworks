import { useParams } from "react-router-dom";

const FactPage = () => {
  const facts = [
    {
      fact: "D'Artagnan was inspired by a real person — Charles de Batz-Castelmore d'Artagnan, a 17th-century French soldier who served in the Musketeers of the Guard. Alexandre Dumas adapted his life into the adventurous character we know today.",
    },
    {
      fact: "He starts the story as a young man from Gascony, arriving in Paris with little money and only a sword and a horse, showing that courage and determination matter more than wealth or status.",
    },
    {
      fact: "D'Artagnan is famous for the phrase “All for one, and one for all”, which symbolizes loyalty, friendship, and unity with his companions Athos, Porthos, and Aramis.",
    },
    {
      fact: "Almost every day, d'Artagnan engages in duels — sometimes three in a single day! His bravery and swordsmanship are legendary, earning him respect and friendships even among former rivals.",
    },
    {
      fact: "Beyond sword fighting, d'Artagnan often uses clever thinking, disguise, and negotiation to complete dangerous missions, proving he's not just brave, but also smart and resourceful.",
    },
  ];
  const { factId } = useParams();
  if (!facts[factId - 1]) {
    return <p className="info_p">Fact with this id does not exists!</p>;
  }

  return <p className="info_p">{facts[factId - 1].fact}</p>;
};

export default FactPage;
