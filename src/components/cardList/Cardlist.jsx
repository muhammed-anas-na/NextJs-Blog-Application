import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

function Cardlist() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent posts</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}

export default Cardlist
