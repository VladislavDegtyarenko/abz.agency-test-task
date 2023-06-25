// Sections
import Hero from "./components/sections/Hero";
import Get from "./components/sections/Get";
import Post from "./components/sections/Post";
import Header from "./components/sections/Header";

// SCSS
import { UsersContextProvider } from "./context/UsersContext";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <UsersContextProvider>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Get />
        <Post />
      </main>
    </UsersContextProvider>
  );
}
