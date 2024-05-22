import './global.css'
import styles from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Post from './components/Post/Post';

type Content = {
    type: 'paragraph' | 'link';
    content: string;
};

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/GBritoF.png',
            name: 'Gustavo Brito',
            role: 'Developer Front-End',
            date: new Date('2024-05-13T11:00:00')
        },
        content: [
            { type: 'paragraph', content: 'Fala galera 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa!' },
            { type: 'link', content: 'https://github.com/GBritoF' }
        ] as Content[]
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/GBritoF.png',
            name: 'Brito',
            role: 'Developer Back-End',
            date: new Date('2024-05-14T12:00:00')
        },
        content: [
            { type: 'paragraph', content: 'Fala galera 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa!' },
            { type: 'link', content: 'https://github.com/GBritoF' }
        ] as Content[]
    }
]

function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            date={post.author.date}
                        />
                    })}
                </main>
            </div>
        </div>
    )
}

export default App;
