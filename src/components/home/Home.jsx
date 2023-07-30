import React from 'react'
import './home.css'

function Home() {

    return (
        <section className="home" id="home">
            <div className="home__container container">
                <div className="home__content">
                    <span className="home__subtitle">
                        <h1 className="home__title">Softwork Solutions</h1>
                        <p className="home__description">Transformando ideias em realidade, através do código e da inovação.
                        </p>
                    </span>
                    <div className="home__btns">
                        <a href="Orcamento" className="btn">
                            Faça seu Orçamento
                        </a>
                        <a href="Não Sei" className="btn home__btn">
                            Não Sei
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
