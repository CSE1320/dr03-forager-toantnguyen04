'use client';
import Link from 'next/link';
import { FaHome, FaCamera } from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import { usePathname } from 'next/navigation';
import styles from '../styles/NavBar.module.css'; // Import the styles for the NavBar

export default function NavBar() {
  const pathname = usePathname(); // Get current path
  
  if (pathname === "/photosearch") {
    return null; // Hide NavBar on PhotoSearchPage
  }
  
  return (
    <div className={styles.navbar}>
      <Link href="/mushroom" passHref>
        <div className={styles.navItem}>
          <TbMushroom />
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div className={styles.navItem}>
          <FaHome />
        </div>
      </Link>
      <Link href="/photosearch" passHref>
        <div className={styles.navItem}>
          <FaCamera />
        </div>
      </Link>
    </div>
  );
}
