import { useParams } from 'react-router-dom';
import { DetailedPostItem } from '../../components/DetailedPostItem/DetailedPostItem';
import { Header } from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import { getPostById } from '../../services/api';
import { IPost } from '../../interfaces';

const DetailedPostPage = () => {
  const { key } = useParams();
  const [postData, setPostData] = useState<IPost>(Object);

  useEffect(() => {
    getPostById(Number(key))
      .then(data => setPostData(data))
      .catch(err => console.error(err));
  }, [key]);

  return (
    <>
      <Header />
      <DetailedPostItem postData={postData} />
    </>
  );
};

export { DetailedPostPage };
