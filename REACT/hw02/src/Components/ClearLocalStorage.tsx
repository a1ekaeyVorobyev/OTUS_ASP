import { Button, Col, Row } from "react-bootstrap";

function ClearLocalStorage() {
    const onClickOK = (event: React.MouseEvent<HTMLButtonElement>) => {
        localStorage.clear();
        event.preventDefault();
      };
  return (
    <Row>
      <Col className="btn-group d-flex">
        <Button variant="primary" size="lg" onClick={onClickOK}>
        Clear LocalStorage
        </Button>
      </Col>
    </Row>
  );
}

export default ClearLocalStorage;
