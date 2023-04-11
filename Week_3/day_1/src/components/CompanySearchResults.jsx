import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { fetchCompanies } from "../redux/actions/fetch";
import { useDispatch, useSelector } from "react-redux";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies(params.companyName));
    console.log(params.companyName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const jobsList = useSelector((state) => state.fetch.jobs.list);

  return (
    <Container>
      <Row>
        <Col>
          {jobsList.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
