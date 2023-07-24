import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar} >
            <img 
                className= {styles.cover} src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=50" />

            <div className={styles.profile}>
                <img src='https://scontent-for1-1.cdninstagram.com/v/t51.2885-19/359729605_1017763689593949_4363657495984182462_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=OZaPj72Moq0AX9fFUTT&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBbro48sHN2L5qZwLd7nLsPR9AV7XzRkQbbKYv9C97m_Q&oe=64C2CAD7&_nc_sid=ee9879.png'/>
                <strong>Vitória Peres</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="a">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}