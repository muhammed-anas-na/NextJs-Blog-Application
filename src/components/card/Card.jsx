import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt="image" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
            <span className={styles.date}>11.02.2024 - </span>
            <span className={styles.category}>CULTURE</span>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, assumenda suscipit. Sint voluptate dolorum, ex laudantium quaerat blanditiis?
        </p>
        <Link href="/" className={styles.link}>Read more</Link>
      </div>
    </div>
  );
}
export default Card;