import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Loader } from "../../../components";
import NewsCard from "../../../components/newsCard/NewsCard";
import { fetchNews } from "../../../store/crypto/cryptoAPI";
import styles from "./newsPageStyles.module.scss";

const NewsPage: React.FC = () => {
  /// hooks
  const allNews = useAppSelector((state) => state.crypto.news);
  const isLoading = useAppSelector(
    (state) => state.crypto.loadings.isLoadingNews
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  /// return
  if (!allNews || isLoading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h1>News</h1>
      <div className={styles.news}>
        {allNews.slice(0, 7).map((news, index) => (
          <NewsCard newsData={news} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
