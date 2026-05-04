import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardPizza from './CardPizza';
import Header from './Header';
import { pizzas } from '../data/pizzas';

function Home() {
    return (
        <>
        <Header/>
            <div className='container mt-5 mb-5'>
                <div className='container mt-5'>
                    <div className='row'>
                        {pizzas.map((producto, indice) => 
                        <div className='col-md-4 my-3' key={indice}>
                            <CardPizza
                                name={producto.name}
                                desc={producto.desc}
                                img={producto.img}
                                price={producto.price}
                                ingredients={producto.ingredients}
                            />
                        </div> )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;