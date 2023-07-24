import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";

import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
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


