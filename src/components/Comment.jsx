import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/robertoufpa19.png" alt='' />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Roberto Rodrigues</strong>
                            <time title='11 de Maio ás 08:13h' dateTime='24-07-23 10:34:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>

                </div>

                <footer>

                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>

                    </button>

                </footer>
            </div>
        </div>
    )
}