import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';

const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  console.log(isMounted.current);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dispatch = await loadPosts(postsDispatch);

        if (isMounted.current) {
          dispatch();
        }
      } catch (error) {
        console.log('error');
      }
    };

    fetchData();

    return () => {
      // se o objeto for desmontado seta o isMounted como false
      // isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};

export default Posts;
