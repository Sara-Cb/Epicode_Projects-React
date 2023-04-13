import { Link } from "react-router-dom";
import { Article } from "../types";
import { Card, Col } from "react-bootstrap";
import { format } from "date-fns";

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <Col className="mb-2">
      <Card
        style={{
          height: "100%",
        }}
      >
        <Link to={`/article/${article.id}`}>
          <Card.Img
            variant="top"
            src={article.imageUrl}
            alt={article.title}
            style={{
              height: "150px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Link>
        <Card.Body>
          <Link to={`/article/${article.id}`}>
            <Card.Title>{article.title}</Card.Title>
          </Link>{" "}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {format(new Date(article.publishedAt), "dd-MM-yy - HH:mm")}
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ArticleCard;
