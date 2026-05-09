import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPizza (props) {

    return (
         <Card>
            <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <h4 className='fw-bold text-capitalize'>{props.name}</h4><hr />
                    <Card.Text>Descripción: </Card.Text>
                    <Card.Text className='blockquote-footer mt-2'> {props.desc}</Card.Text>
                    <Card.Text>Ingredientes: </Card.Text>
                    {props.ingredients.map((lista, indice) => (
                        <li key={indice} className='badge bg-dark me-1 fw-light'>
                            {lista}
                        </li>
                    )
                    )}
                    <h4 className='fw-bold mt-3'>Precio: ${props.price.toLocaleString()}</h4>
                    <Button className="m-1 mt-3" variant="outline-dark">Ver más</Button>
                    <Button className="m-1 mt-3" variant="dark">Añadir 🛒</Button>
                </Card.Body>
        </Card>
    )
}
export default CardPizza;