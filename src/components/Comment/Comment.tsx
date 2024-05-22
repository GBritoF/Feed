import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'

type CommentProps = {
    content: string,
    deleteComment: (comment: string) => void
}

const Comment = ({ content, deleteComment }: CommentProps) => {
    
    const [like, setLikeCount] = useState(0)

    function handleDeleteComment(comment: string) {
        deleteComment(comment)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/GBritoF.png' alt= ""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='27 de abril as 23:44' dateTime="2024-04-27T23:44:27">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={() => handleDeleteComment(content)} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />   
                        <p>Aplaudir</p> <span>{like}</span>
                    </button> 
                </footer>
            </div>
        </div>
    )
}

export default Comment;
