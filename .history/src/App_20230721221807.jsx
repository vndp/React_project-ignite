import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <aside></aside>
      <main>

        <Post 
           author="Vitória Peres"
           content="Contrary to popular belief, Lorem Ipsum is not simply "
        />

        <Post
          author="Thais Caldas"
          content="Uiii Post legal!"

        />
      </main>
      </div>
    </div>
  );
} 


