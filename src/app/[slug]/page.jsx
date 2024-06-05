import Menu from "@/components/menu/Menu";
import Image from "next/image";
import styles from './singlePage.module.css';
import Comments from "@/components/comments/Comments";

function SinglePage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src={'/p1.jpeg'} alt="profile" fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>10.02.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src={'/p1.jpeg'} alt="image" fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure accusantium ducimus nobis nihil corrupti laudantium temporibus, ex assumenda fuga? Voluptatem quibusdam distinctio officia vel? Explicabo voluptates tempore in omnis!</p>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure accusantium ducimus nobis nihil corrupti laudantium temporibus, ex assumenda fuga? Voluptatem quibusdam distinctio officia vel? Explicabo voluptates tempore in omnis!</p>
                </div>

                <div className={styles.comment}>
                    <Comments/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default SinglePage
