import "./services.css"
import Image1 from "../../assets/logoo.png";
import Image2 from "../../assets/logoo.png";
import Image3 from "../../assets/logoo.png";

const data = [
    {
        id: 1,
        image: Image1,
        title: "Desenvolvimento de Software",
        description:
            `Utilizamos as
            mais recentes tecnologias e melhores práticas de
            desenvolvimento de software, para garantir que nossos serviços sejam
            robustos, seguros e escaláveis.`,
    },
    {
        id: 2,
        image: Image2,
        title: "Integração de Sistema ",
        description:
            `Ajudamos as empresas a integrar seus sistemas existentes,
            garantindo a comunicação eficiente entre diferentes
            plataformas e aplicativos.`,
    },
    {
        id: 3,
        image: Image3,
        title: "Consultoria de TI ",
        description:
            `Nossos consultores experientes trabalham em
            estreita colaboração com os clientes para identificar
            oportunidades de melhoria e implementar soluções
            tecnológicas eficazes.`,
    },
    {
        id: 3,
        image: Image3,
        title: "Aplicações Desktop, Web e Mobile ",
        description:
            `Desenvolvemos aplicativos desktop, web e mobile
            intuitivos e de alto desempenho. Desde aplicativos de
            negócios até soluções de comércio eletrônico e aplicativos
            de consumo.`,
    },
    {
        id: 3,
        image: Image3,
        title: "Soluções de Arquitetura",
        description:
            `Analisaremos todas as necessidades do negócio
            para propor as melhores ferramentas para uma solução
            eficiente e alta performance buscando o que há de
            melhor e moderno em programas e tecnologia.`,
    },
    {
        id: 3,
        image: Image3,
        title: "Gerenciamento de Projeto ",
        description:
            ` Nossa equipe desenvolvimento seguem o
            processo estruturado, colaborativo e adaptativo para
            garantir que as partes interessadas estejam em
            conformidades e garantir que os projetos sejam entregues
            dentro do prazo estabelecidos.`,
    },
];



const Services = () => {

    return (

        <section className="services container section" id="services-section">
            <h2 className="section__title" data-title="Services">
                Nossos Serviços
            </h2>

            <div className="services__container grid">

                {data.map(({ img, title, description }, index) => {
                    return (
                        <div className="services__card" key={index}>
                            <img src={img} alt="" className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>



                        </div>
                    )

                })}
            </div>
        </section>

    )
}

export default Services;
