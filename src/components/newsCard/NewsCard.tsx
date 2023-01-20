import { MdOutlineImageNotSupported } from "react-icons/md";
import moment from "moment";

import { News } from "../../app/types";
import { Opacity } from "../";
import styles from "./newsCardStyles.module.scss";

interface Props {
  newsData: News;
}

const NewsCard: React.FC<Props> = (props) => {
  /// props
  const { newsData } = props;
  const { name, url, image, description, provider, datePublished } = newsData;

  /// return
  return (
    <Opacity>
      <a href={url} target={"_blank"} rel="noreferrer" style={{ all: "unset" }}>
        <div className={`${styles.container} card`}>
          <div className={styles.header}>
            <div className={styles.title}>{name}</div>
            {image ? (
              <img
                className={styles.image}
                src={image.thumbnail.contentUrl}
                alt="crypto news"
              />
            ) : (
              <MdOutlineImageNotSupported />
            )}
          </div>
          <div className={styles.description}>
            {description.slice(0, 150)}...
          </div>
          <div className={styles.footer}>
            <div className={styles.providerName}>
              Provided By: {provider?.[0].name}
            </div>

            {datePublished && (
              <div className={styles.time}>
                {moment(datePublished).format("MMM Do")}
              </div>
            )}
          </div>
        </div>
      </a>
    </Opacity>
  );
};

export default NewsCard;
