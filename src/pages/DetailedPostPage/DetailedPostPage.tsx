import { useParams } from 'react-router-dom';
import { DetailedPostItem } from '../../components/DetailedPostItem/DetailedPostItem';
import { Header } from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import { getCommentsByPostId, getPostById } from '../../services/api';
import { IComment, IPost } from '../../interfaces';
import { CommentList } from '../../components/CommentList/CommentList';
import { CommentForm } from '../../components/CommentForm/CommentForm';
import { Loader } from '../../components/Loader/Loader';

const DetailedPostPage = () => {
  const { key } = useParams();
  const [postData, setPostData] = useState<IPost>(Object);
  const [isPostLoading, setIsPostLoading] = useState<boolean>(false);
  const [commentsData, setCommentsData] = useState<IComment[]>([]);

  useEffect(() => {
    getPostById(Number(key), setIsPostLoading)
      .then(data => setPostData(data))
      .catch(err => console.error(err));

    getCommentsByPostId(Number(key))
      .then(data => setCommentsData(data))
      .catch(err => console.error(err));
  }, [key]);

  return (
    <>
      <Header />
      {isPostLoading ? <Loader /> : <DetailedPostItem postData={postData} />}
      <CommentForm setCommentsData={setCommentsData} />
      <CommentList commentsData={commentsData} />
    </>
  );
};

export { DetailedPostPage };
