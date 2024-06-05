import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev here!</b>
        Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="image" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            voluptate rerum quo praesentium numquam labore sit. Molestias quidem
            ipsum, ducimus in, nihil id dolores ullam quae corrupti, excepturi
            ad odio?
          </p>
          <button className={styles.button}>Ream more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
