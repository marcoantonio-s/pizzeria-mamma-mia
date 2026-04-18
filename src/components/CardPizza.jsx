import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPizza (props) {

    return (
         <Card>
            <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <h4>{props.name}</h4><hr />
                    <Card.Text>Ingredientes: </Card.Text>
                    <Card.Text>🍕 {props.ingredients.join(", ")}</Card.Text><hr />
                    <h4>Precio: ${props.price.toLocaleString()}</h4>
                    <Button className="m-1 mt-3" variant="outline-dark">Ver más</Button>
                    <Button className="m-1 mt-3" variant="dark">Añadir 🛒</Button>
                </Card.Body>
        </Card>
    )
}

export default CardPizza;