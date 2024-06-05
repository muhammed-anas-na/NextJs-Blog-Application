import Cardlist from '@/components/cardList/Cardlist'
import styles from './blogPage.module.css'
import Menu from '@/components/menu/Menu'

function BlogPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        
        <div className={styles.content}>
            <Cardlist/>
            <Menu/>
        </div>
    </div>
  )
}

export default BlogPage
