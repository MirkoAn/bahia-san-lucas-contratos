import Image from "next/image";
import styles from "../../pages/home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <div className={inter.className}>
      <main className={styles.main}>
        <Image priority src={"/assets/icon.png"} alt="logo" width={120} height={120} />
        {children}
      </main>
    </div>  
  );
};
  
export default Layout;