
import styles from "../styles/Home.module.css";
import SubscribeButton from "../components/SubscribeButton";
import Navbar from "../components/Navbar";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
// import EntryPoints from "../components/EntryPoints";
import EndCard from "../components/EndCard";
import TwoButtons from "../components/TwoButtons";


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar />
        <div></div>
        <div></div>
        <TwoButtons />
        {/* <SubscribeButton /> */}
        <Hero1 />
        <Hero2 />
        
      </main>
    </div>
  );
}
