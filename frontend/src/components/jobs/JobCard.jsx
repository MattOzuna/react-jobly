import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const jobCard = ({ job }) => {
  return (
    <Card style={{ width: "18rem", margin: "4px" }}>
      <Card.Body>
        <Card.Title>
          <div>{job.title}</div>
        </Card.Title>
        <Link to={`/companies/${job.companyHandle}`} key={job.companyHandle}>
            <div>{job.companyHandle}</div>
          </Link>
      </Card.Body>
    </Card>
  );
};

export default jobCard;
