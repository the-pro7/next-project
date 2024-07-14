import styles from "./user.module.css";
import Image from "next/image";

interface UserProps {
  image: string;
  name: string;
}

export const User = ({ image, name }: UserProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image src={image} alt={name} fill />
      </div>
      <div className={styles.text_container}>
        <h3>{name}</h3>
        <p>
          Rated: <b>4.5 stars</b>
        </p>
      </div>
    </div>
  );
};
