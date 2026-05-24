import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

function Home() {

    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    return (
        <>
            <NavBar />
            <Header />
            <div className='container mt-5 mb-5'>
                <div className='container mt-5'>
                    <div className='row'>
                        {products.length > 0 ? products.map((producto, indice) => (
                            <div className='col-md-4 my-3' key={indice}>
                                <CardPizza
                                    id={producto.id}
                                    name={producto.name}
                                    desc={producto.desc}
                                    img={producto.img}
                                    price={producto.price}
                                    ingredients={producto.ingredients}
                                    addToCart={addToCart}
                                />
                            </div>
                        )) : (
                            <div className='container mt-5 mb-5'>
                                <h4 className='text-center'>
                                    🍕 Cargando productos...
                                </h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;