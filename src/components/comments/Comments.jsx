import Link from 'next/link'
import styles from './comments.module.css'
import Image from 'next/image'

function Comments() {
  const status = 'authenticated'
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {
        status == "authenticated" ? (
          <div className={styles.write}>
            <textarea placeholder='Write a comment...' className={styles.input}></textarea>
            <button className={styles.button}>Send</button>
          </div>
        ) : (<Link href="/login">Login to write a comment</Link>)
      }

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src={'/p1.jpeg'} alt='Image' width={50} height={50} className={styles.image}/>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.02.2024</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam itaque corrupti quaerat, incidunt nemo 
            velit temporibus molestias quia, assumenda rerum, quis aut perspiciatis veritatis ut.
            Eligendi laudantium nostrum laborum nemo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments
