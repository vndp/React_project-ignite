import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="http://github.com/vndp.png"/>
                </div>
            </header>
        </article>     
    )
}