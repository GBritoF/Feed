import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'; 
import Avatar from '../Avatar/Avatar';
import Comment from '../Comment/Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
    date: Date;
};

type PostProps = {
    author: Author;
    content: Content[];
    date: Date;
};

type Content = {
    type: "paragraph" | "link";
    content: string;
};

const Post = ({ author, content }: PostProps) => {
    const [comments, setComments] = useState<string[]>([]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedAtDateFormatted = format(author.date, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(author.date, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: FormEvent<HTMLTextAreaElement>) {
        const target = event.target as HTMLTextAreaElement;
        if (target.setCustomValidity) {
            target.setCustomValidity("Este campo é obrigatório!");
        }
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtDateFormatted} dateTime={author.date.toISOString()}> {/* Corrigido para 'dateTime' */}
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={index}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={index}><a href="#">{line.content}</a></p>;
                    }
                    return null;
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um comentário!'
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => (
                    <Comment key={index} content={comment} deleteComment={deleteComment} />
                ))}
            </div>
        </article>
    );
};

export default Post;
