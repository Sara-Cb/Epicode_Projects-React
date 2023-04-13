import React from "react";
import { Container } from "react-bootstrap";
import ArticleList from "./ArticleList";

function Home() {
  return (
    <Container>
      <Container className="bg-white mb-5 p-3 rounded">
        <h1>Spaceflight News</h1>
        <h3 className="text-muted">
          The first website for journalistic information on spaceflight and
          space missions.
        </h3>
      </Container>
      <ArticleList />
    </Container>
  );
}

export default Home;
