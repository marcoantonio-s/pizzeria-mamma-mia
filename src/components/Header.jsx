import headerImg from "../assets/img/header.jpg";

function Header () {
    return (
            <section className="d-flex align-items-center justify-content-center text-center text-white"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${headerImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "40vh",
                    width: "100%",
                }}
                >
                <div className="container">
                    <h1 className="display-4 fw-bold">¡Pizzería Mamma Mia!</h1>
                    <p>Tenemos las mejores pizzas que podrás encontrar</p><hr />
                </div>
            </section>
    )
}

export default Header;