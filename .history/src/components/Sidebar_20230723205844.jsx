
import { PencilLine} from '@phosphor-icons/react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar} >
            <img
                className={styles.cover} src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=50"
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="http://github.com/vndp.png" />

                <strong>Vitória Peres</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                   <PencilLine size={20}/>
                 Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}