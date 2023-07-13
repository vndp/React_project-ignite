import { Post } from "./Post";
import { Header } from "./components/Header";
import styles from "./App.modules.css";

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className="wrapper"></div>
      <side>
        sidebar
      </side>
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
  );
} 4


