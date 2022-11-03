
import Container from 'react-bootstrap/Container';

export default function App() {

  const posts = [
    {
      id: 1,
      text: 'Hello World!',
      timestamp: 'a minute ago',
      author: {
        username: 'cleo',
      },
    },

    {
      id: 1,
      text: 'second post',
      timestamp: 'an hour ago',
      author: {
        username: 'Noemi',
      },
    },
  ];
  return (
    <Container fluid className='"App'>
      <h1>Microblog</h1>
      {posts.length === 0 ?
        <p>There are no blog posts.</p>

        :

        posts.map(post => {
          return (
            <p key={post.id}>
              <b>{post.author.username}</b> &mdash;{post.timestamp}
              <br />
              {post.text}
            </p>
          );
        })
      }

    </Container>
  );
};
