import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import features from '../assets/images/features-img/img-1.png';
import features2 from '../assets/images/features-img/img-2.png';
import features3 from '../assets/images/features-img/img-3.png';

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-features bg-light" id="features">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 fw-light text-uppercase">Nossos Recursos</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="features-content">
                                    <div className="features-icon">
                                        <i className="pe-7s-science text-primary"></i>
                                    </div>
                                    <h4 className="fw-normal text-dark mb-3 mt-4">Marketing Eficiente</h4>
                                    <p className="text-muted f-14">"Alcance seu público-alvo com precisão e impacto através de um marketing eficiente. Desde estratégias personalizadas até a escolha inteligente dos canais, o marketing eficiente direciona recursos para maximizar resultados. Ao compreender profundamente as necessidades do cliente e adaptar sua abordagem, você constrói conexões sólidas que impulsionam o crescimento e a fidelização.</p>
                                    <p className="text-muted f-14">Otimize seu alcance, engajamento e conversões, transformando cada ação em um passo significativo em direção ao sucesso.</p>
                                    <div className="mt-5">
                                    <a target='_blank' href='whats' type="submit" className="btn btn-custom">Falar agora</a>
                                            </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="features-img mt-32">
                                    <img src={features} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </section>
                <section className="section bg-features">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="features-img">
                                    <img src={features2} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="features-content mt-32">
                                    <div className="features-icon">
                                        <i className="pe-7s-shuffle text-primary"></i>
                                    </div>
                                    <h4 className="fw-normal text-dark mb-3 mt-4">Soluções de Ponta</h4>
                                    <p className="text-muted f-14">Com soluções estratégicas, enfrentar desafios se torna uma jornada simplificada rumo ao sucesso. Nossa expertise oferece insights perspicazes por meio de análises abrangentes, permitindo a tomada de decisões embasadas. Moldamos estratégias sob medida, alinhadas aos seus objetivos, e garantimos uma implementação eficaz para resultados tangíveis. Colaboramos de perto, convertendo obstáculos em degraus para o progresso.</p>
                                    <p className="text-muted f-14">Combinamos visão criativa e precisão analítica para soluções estratégicas que impulsionam o crescimento. Transforme seu panorama com abordagens que geram valor mensurável, liderando o caminho com confiança.</p>
                                    <div className="mt-5">
                                    <a target='_blank' href='whats' type="submit" className="btn btn-custom">Falar agora</a>
                                            </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section bg-features bg-light">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="features-content">
                                    <div className="features-icon">
                                        <i className="pe-7s-display1 text-primary"></i>
                                    </div>
                                    <h4 className="fw-normal text-dark mb-3 mt-4">Planejamento Empresarial</h4>
                                    <p className="text-muted f-14">O alicerce do sucesso corporativo reside em um planejamento empresarial bem estruturado. Nossa abordagem abrange desde a definição minuciosa de metas até a alocação inteligente de recursos, resultando em estratégias robustas. Compreendemos as nuances do mercado, o que nos permite identificar oportunidades e prever desafios.</p>
                                    <p className="text-muted f-14">O planejamento empresarial não apenas guia a jornada, mas também proporciona flexibilidade para adaptações ágeis. É a ferramenta que direciona a eficiência operacional e encaminha o progresso consistente em direção aos objetivos.</p>
                                    <div className="mt-5">
                                    <a target='_blank' href='whats' type="submit" className="btn btn-custom">Falar agora</a>
                                            </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="features-img mt-40">
                                    <img src={features3} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}
