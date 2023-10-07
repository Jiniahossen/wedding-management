import  { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card"; // Import your Card component

const CardDetails = () => {
  const [card, setCardDetails] = useState(null); 

  const { id } = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    const getCardDetails = cards.find((card) => card.id === id);
    setCardDetails(getCardDetails);
  }, [id, cards]);

  return (
    <div>
      {card ? (
        <Card card={card} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardDetails;
