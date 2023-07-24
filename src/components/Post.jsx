import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="http://github.com/vndp.png" />
                    <div className={styles.authorInfo}>
                        <strong>Vitória Peres</strong>
                        <span>Web develop</span>
                    </div>
                </div>
                <time title="11 de Maio ás 08:13h" dateTime="24-07-23 10:34:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p> <a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href=""> #nlw </a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>
                <textarea
                    placeholder="Deixe um comentário :)"
                />
                <button type="submit"></button>
            </form>
        </article>
    )
}