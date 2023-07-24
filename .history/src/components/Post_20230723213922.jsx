import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="http://github.com/vndp.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Vitória Peres</strong>
                        <span></span>
                    </div>
                </div>
            </header>
        </article>     
    )
}