import News_Item from "./News_Item";
import { useEffect, useState } from "react";

function News_Bord({ category }) {
  const [article, setArticle] = useState([]);
  let MY_API_KEY = "94fc7cf914ea4b1184dc0041436d90f6";

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&${category}&apiKey=${MY_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, [category]);
  return (
    <div>
      <h1 className="text-center">
        Latest <span className="badge bg-danger">NEWS</span>
      </h1>
      {article.map((news, index) => {
        return (
          <News_Item
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
}

export default News_Bord;
