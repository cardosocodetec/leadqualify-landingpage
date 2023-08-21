import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesData: [
                {
                    id: 1,
                    icon: 'mdi-database',
                    title: 'Suporte Incrível',
                    description: 'Experimente nosso serviço e desfrute de crescimento exponencial com suporte incrível para alcançar seus objetivos.'
                },
                {
                    id: 2,
                    icon: 'mdi-palette',
                    title: 'Cores Ilimitadas',
                    description: 'Liberte sua criatividade com nossa paleta de cores ilimitadas e dê vida à sua visão como nunca antes.'
                },
                {
                    id: 3,
                    icon: 'mdi-finance',
                    title: 'Soluções Estratégicas',
                    description: 'Nossas soluções sob medida são projetadas para guiar seu caminho rumo ao sucesso, com respostas precisas para o seu negócio.'
                },
                {
                    id: 4,
                    icon: 'mdi-yin-yang',
                    title: 'Design Digital',
                    description: 'Transforme sua presença online com nosso design digital inovador, criando experiências envolventes e visualmente impactantes.'
                },
                {
                    id: 5,
                    icon: 'mdi-apple-keyboard-command',
                    title: 'Fácil de Costumizar',
                    description: 'Personalize com facilidade cada detalhe, graças à nossa plataforma intuitiva que torna a customização um processo simples e rápido.'
                },
                {
                    id: 6,
                    icon: 'mdi-hexagon-multiple',
                    title: 'Verdadeiramente Versátil',
                    description: 'Uma solução versátil para atender a todas as suas necessidades, proporcionando flexibilidade e eficiência incomparáveis.'
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section" id="services">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 fw-light text-uppercase">Nossos Serviços</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            {this.state.servicesData.map((services, key) => (
                                <Col lg={4} md={6} key={key}>
                                    <div className="service-box rounded mt-4 p-4">
                                        <div className="service-icon mb-3">
                                            <i className={"mdi " + services.icon}></i>
                                        </div>
                                        <div className="services-desc">
                                            <div className="service-title mb-2 position-relative">
                                                <h5 className="fw-normal mb-3"><a href='whats' className="text-dark">{services.title}</a></h5>
                                            </div>
                                            <p className="text-muted mb-3 f-14">{services.description}</p>
                                            <p className="mb-0 text-uppercase f-13"><a target='_blank' href="https://wa.me/55119194424759?text=Desejo+saber+mais+sobre+sites" className="text-primary">Saiba mais<i
                                                className="mdi mdi-arrow-right ms-2"></i></a></p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}
