import { useState, useEffect } from "react";
import { Article } from "../types";
import { Container, Row } from "react-bootstrap";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Row>
    </Container>
  );
};

export default ArticleList;
