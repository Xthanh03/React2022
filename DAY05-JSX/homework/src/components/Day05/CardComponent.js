import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/188335896_680381333359401_5894744678971621297_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pyn2KSt7goIAX9bjh2L&_nc_ht=scontent.fhan5-11.fna&oh=00_AT-letN6AUqjlmpJjrICL7XNcjMLRdfrojim819vrtLjog&oe=62E37ED0" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Follow me</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;