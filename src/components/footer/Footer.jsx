import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'
export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src={'/logo.png'} alt='Logo' width={50} height={50}/>
                    <h1 className={styles.logoText}>Lamablog</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quisquam repellendus architecto accusantium nesciunt recusandae ipsum fugit error, nobis odio, nihil exercitationem ea doloribus rerum eum. Rerum pariatur harum cum.
                </p>

                <div className={styles.icon}>
                    <Image src={'/facebook.png'} alt='facebook' height={18} width={18}/>
                    <Image src={'/instagram.png'} alt='facebook' height={18} width={18}/>
                    <Image src={'/tiktok.png'} alt='facebook' height={18} width={18}/>
                    <Image src={'/youtube.png'} alt='facebook' height={18} width={18}/> 
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href={'/'}>Homepage</Link>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact</Link>
                </div>

                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href={'/'}>Style</Link>
                    <Link href={'/'}>Fahion</Link>
                    <Link href={'/'}>Coding</Link>
                    <Link href={'/'}>Travel</Link>
                </div>

                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href={'/'}>Facebook</Link>
                    <Link href={'/'}>Instagram</Link>
                    <Link href={'/'}>Tiktok</Link>
                    <Link href={'/'}>Youtube</Link>
                </div>
            </div>
        </div>
    )
}