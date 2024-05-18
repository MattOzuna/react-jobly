import { Redirect, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import Spinner from "react-bootstrap/Spinner";

const CompanyDetails = ({ companies, cantFind }) => {
  const { handle } = useParams();
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async (handle) => {
        let res = await JoblyApi.getCompany(handle);
        setCompany(res);
        setIsLoading(false);
    };
    fetchCompany(handle);
  }, [isLoading]);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Container className="justify-content-md-center">
      <Card>
        <Card.Body>
          <Card.Title>{company.name}</Card.Title>
          <Card.Text>{company.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CompanyDetails;