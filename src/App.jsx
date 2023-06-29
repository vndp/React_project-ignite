import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
     <Post
           author="Vitoria Peres" 
           content="dolor sit amet consectetur adipisicing elit. Fugiat placeat totam magnam dolor dolorem quasi velit possimus omnis, facilis error atque, cumque minima eaque quis tempora sequi aspernatur rem et."/>
    </div>
  );
}


 