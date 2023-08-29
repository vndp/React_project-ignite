import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

//author: {avatar_url:"", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thaiscaldas.png',
      name: 'Thais Caldas',
      role: 'Developer - LABEX'
    },
    content: [
      { type: "paragraph", content: ' Fala galeraa 👋', },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2023-09-29 11:06:06'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return( <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
              )
          })}
        </main>
      </div>
    </div>
  );
}


