import Avatar from '../Avatar/Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%20" alt="" />
        
            <div className={styles.profile}>
                <Avatar src="https://github.com/GBritoF.png"/>

                <strong>Gustavo Brito</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}

export default Sidebar