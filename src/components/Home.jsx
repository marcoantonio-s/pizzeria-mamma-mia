import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardPizza from './CardPizza';
import Header from './Header';

function Home() {
    return (
        <>
        <Header/>
        <Container className="mt-5 mb-5">
            <Row className="justify-content-center text-align-right">
                <Col md={4}>
                    <CardPizza
                        name="Napolitana"
                        price={5950}
                        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                        img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>

                <Col md={4}>
                    <CardPizza
                        name="Española"
                        price={6950}
                        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                        img="https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>

                <Col md={4}>
                    <CardPizza
                        name="Pepperoni"
                        price={6950}
                        ingredients={["queso mozzarella", "pepperoni", "orégano"]}
                        img="https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home;