import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const router = useRouter();

  const scrollToPizzaList = () => {
  router.push('#pizza-list', undefined, { scroll: true });
};


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
        <Image src="/img/logo2.png" alt="" width="160px" height="69px" />
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>

          
          
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default Navbar;
