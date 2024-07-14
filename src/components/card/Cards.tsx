import { cardData } from "@/src/utils/cardData";
import React from "react";
import styles from "./card.module.css";
import { CardData } from "@/src/utils/cardData";
import Image from "next/image";

export const Cards = () => {
  const imageDimensions = 75;

  return (
    <div className={styles.container}>
      {cardData.map((card: CardData) => (
        <div key={card.id} className={styles.card_content}>
          <div>
            <Image
              src={card.image}
              alt={card.alt}
              width={imageDimensions}
              height={imageDimensions}
            />
          </div>
          <h1 className={styles.card_title}>{card.title}</h1>
          <p className={styles.card_description}>{card.desc}</p>
        </div>
      ))}
    </div>
  );
};
