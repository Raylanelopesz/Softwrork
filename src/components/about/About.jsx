import React from 'react'
import './about.css'
import aboutImg from '../../assets/aboutImg.jpg'
import { FiCheck } from "react-icons/fi"


function About() {

    return (
        <section className="about section" id="about">
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__img" />
                </div>

                <div className="about__container">
                    <h2 className="section__title title-left" data-title='About Us'>
                        Somos uma empresa de desenvolvimento de software especializada em soluções inovadoras e personalizadas.
                    </h2>

                    <p className="about__description">
                        Na Sofwork, somos impulsionados pela paixão por tecnologia e inovação
                        Nossa missão é transformar ideias em realidade através de soluções de software sob medida e de última geração.
                        Como especialistas em desenvolvimento de software, trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades exclusivas e desafios de negócios.

                        Nossa equipe altamente qualificada de engenheiros e desenvolvedores é movida pela busca incessante de excelência,
                        buscando constantemente as melhores práticas e as mais recentes tecnologias. Isso nos permite oferecer produtos de software altamente funcionais, escaláveis e seguros.
                    </p>

                    <div className="about__details grid">
                        <p className="about__details-description">
                            <FiCheck className='about__details icon' />
                            Antivírus Gerenciado
                        </p>

                        <p className="about__details-description">
                            <FiCheck className='about__details icon' />
                            Backup e Restauração Gerenciados

                        </p>

                        <p className="about__details-description">
                            <FiCheck className='about__details icon' />
                            Monitoramento 24/7
                        </p>
                    </div>

                    <a href="#team" className="btn">Nosso Time</a>
                </div>
            </div>
        </section>
    )
}

export default About;