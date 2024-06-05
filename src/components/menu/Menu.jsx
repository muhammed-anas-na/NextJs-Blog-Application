import React from 'react'
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategoryList from '../menuCategoryList/MenuCategoryList';

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false}/>
      
      <h2 className={styles.subtitle}>{"Discover by topics"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategoryList/>
      <h2 className={styles.subtitle}>{"Choosen by the editor"}</h2>
      <h1 className={styles.title}>Editor&apos;s pick</h1>
     <MenuPosts withImage={true}/>
    </div>
  )
}
export default Menu;