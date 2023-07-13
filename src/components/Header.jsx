 import styles from './header.module.css'
 
 import IgniteLogo from "../assets/ignite_logo.svg";



export function Header(){
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} />
            
        </header>

        );
}