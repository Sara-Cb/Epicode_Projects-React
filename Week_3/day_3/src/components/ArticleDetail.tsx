import { useState, useEffect } from "react";
import { useParams, Params, Link } from "react-router-dom";
import { Article } from "../types";
import { Container, Image, Row, Col } from "react-bootstrap";
import { format } from "date-fns";

interface ArticleParams extends Params {
  id: string;
}

const ArticleDetail = () => {
  const { id } = useParams<ArticleParams>();
  const [article, setArticle] = useState<Article | null>(null);

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      );
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="bg-white p-4 rounded">
      <Link to={"/"} className="btn btn-dark mb-3">
        Go back Home(land)
      </Link>
      <h1>{article.title}</h1>
      <h3 className=" text-muted">
        Published: {format(new Date(article.publishedAt), "dd-MM-yy - HH:mm")}
      </h3>
      <Row className="my-5 pb-2 border-bottom ">
        <Col xs={12} lg={5} className="mb-2 d-flex">
          <Image src={article.imageUrl} alt={article.title} />
        </Col>
        <Col>
          <p>{article.summary}</p>
        </Col>
      </Row>

      {article.launches.length > 0 && (
        <Container fluid>
          <h2>Launches:</h2>
          {article.launches.map((launch) => (
            <div key={launch.id}>
              <p>
                {launch.id}, from {launch.provider}
              </p>
            </div>
          ))}
        </Container>
      )}
      {article.events.length > 0 && (
        <Container fluid>
          <h2>Events:</h2>
          {article.events.map((event) => (
            <div key={event.id}>
              <p>
                {event.id}, {event.provider}
              </p>
            </div>
          ))}
        </Container>
      )}
      <p className="my-2 border-top border-bottom ">
        See the full article at:{" "}
        <a href={article.url} rel="noreferrer" target="_blank">
          {article.newsSite}
        </a>
      </p>
    </Container>
  );
};

export default ArticleDetail;
