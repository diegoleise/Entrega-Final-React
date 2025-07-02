import React from 'react'
import plantas from '../assets/plantas.avif'
import NavBar from '../Componentes/NavBar'
import Footer from '../Componentes/Footer'

const QuienesSomos = () => {

    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">

                        <img
                            src={plantas}
                            className="img-fluid rounded shadow"
                        />
                    </div>

                    
                    <h2 className="mb-3">Acerca de Plant-Shop</h2>
                    <p className="lead">
                        Nuestro e-commerce es un vivero online diseñado para acercar la naturaleza a tu hogar u oficina. Ofrecemos una amplia variedad de plantas, desde las más comunes y fáciles de cuidar, hasta especies exóticas y de colección, satisfaciendo tanto a principiantes como a entusiastas de la jardinería.
                    </p>

                    <p className="fw-bold text-primary">
                        Calidad garantizada: Nos comprometemos a entregar plantas sanas y vigorosas. Trabajamos con productores confiables y cada planta es inspeccionada antes de ser enviada para asegurar su óptimo estado
                    </p>

                </div>
                <div className="col-md-6">

                </div>
            </div>
            <div style={{ marginTop: '150px' }}>
                <Footer />
            </div>

        </>
    )
}

export default QuienesSomos