import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="http://github.com/vndp.png" alt=''/>

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vitória Peres</strong>
                            <time title='11 de Maio ás 08:13h' dateTime='24-07-23 10:34:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                        <Trash size={24} />
                       
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>

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