import { useEffect, useState } from "react"

function Pizza () {
    
    let productoSeleccionado = "p001";
    const [product, setProduct] = useState(productoSeleccionado);

    const apiURL = "http://localhost:5001/api/pizzas/" + productoSeleccionado;
    const getProduct = async() => {
        const res = await fetch(apiURL)
        const data = await res.json();
        setProduct(data)
    };

    useEffect(()=>{
        getProduct();
    }, [])

    return (
        <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card border-0 overflow-hidden">
            <div className="row g-0 border rounded">
              <div className="col-md-5 bg-white p-4 d-flex align-items-center justify-content-center">
                <img src={product.img} className="img-fluid rounded" alt={product.name} style={{ maxHeight: "400px" }}/>
              </div>
              <div className="col-md-7">
                <div className="card-body p-4 p-lg-5">
                  <h2 className="card-title fw-bold mb-3 text-capitalize">{product.name}</h2>
                  <h3 className="card-title fw-bold mb-3">Precio: ${product?.price?.toLocaleString()}</h3>
                  <h6 className="text-dark">Descripción:</h6>
                  <p className="card-text text-light-emphasis mt-3 blockquote-footer" style={{ lineHeight: "1.6" }}>{product.desc}</p>
                  <h6 className="text-dark">Ingredientes:</h6>
                  <div className='mb-4'>
                        {product?.ingredients?.map((ingrediente, indice) => (
                            <li key={indice} className='badge bg-dark me-1 fw-light'>
                            {ingrediente}
                            </li>
                        ))}
                        </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button className="btn btn-lg btn-dark">Comprar</button>
                    <button className="btn btn-lg btn-outline-dark">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Pizza;