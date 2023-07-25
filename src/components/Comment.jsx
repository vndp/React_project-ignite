import styles from './Comment.modules.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src='http://github.com/vndp.png' />
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>

                        </div>
                    </header>
                </div>
                <footer>
                    Aplaudir
                </footer>


            </div>


        </div>
    )
}