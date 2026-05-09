import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardPizza from './CardPizza';
import Header from './Header';
import { useEffect, useState } from 'react';



function Home() {

    const [productList, setProductList] = useState([]);

    const getPizzas = async () => {
        const response = await fetch("http://localhost:5001/api/pizzas");
        const data = await response.json();

        console.log(data);

        setProductList(data);
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <>
            <Header />

            <div className='container mt-5 mb-5'>
                <div className='container mt-5'>
                    <div className='row'>

                        {productList.length > 0 ? productList.map((producto, indice) => (
                            <div className='col-md-4 my-3' key={indice}>
                                <CardPizza
                                    name={producto.name}
                                    desc={producto.desc}
                                    img={producto.img}
                                    price={producto.price}
                                    ingredients={producto.ingredients}
                                />
                            </div>
                        )) : (
                            <div className='container mt-5 mb-5'>
                                <p className='text-center'>🍕 Cargando productos...</p>
                            </div>
                        )
                    
                    }

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;