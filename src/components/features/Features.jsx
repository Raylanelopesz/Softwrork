import React from 'react'
import './features.css'
import { features } from '../../Data';
import shape from '../../assets/shape2.png';
function Features() {

    return (
        <section className='features section' id=" features">
            <h2 className="section__title" data-title="Features">
                Nossos Valores!
            </h2>

            <div className="features__grid container grid">
                {features.map(({ img, title, description, cla }, index) => {
                    return (
                        <div className="features__item" key={index}>
                            <img src={img} alt="" className={`feature__img ${cla ?? cla}`} />
                            <h3 className="feature__title">{title}</h3>
                            <p className="feature__description">{description}</p>


                            <img src={shape} alt="" className="feature__shape" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Features;
