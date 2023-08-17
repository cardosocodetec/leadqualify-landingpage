import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import about from '../assets/images/alta-performance.jpg';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section className={this.props.isPrimary ? "section bg-about" : "section bg-about bg-light-about bg-light"} id="about">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className={this.props.isPrimary ? "text-white mb-1 fw-light text-uppercase" : "text-dark mb-1 fw-light text-uppercase"}>Sobre</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className={this.props.isPrimary ? "about-box text-center p-3" : "about-box about-light text-center p-3"}>
                                    <div className="about-icon mb-4">
                                        <i className="mdi mdi-lightbulb"></i>
                                    </div>
                                    <h4 className="fw-light"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}>Design Criativo</Link></h4>
                                    <p className={this.props.isPrimary ? "text-white-50 f-14" : "text-muted f-14"}>Desperte a imaginação com nosso design criativo. Cada projeto é uma obra de arte única, cuidadosamente elaborada para transmitir sua mensagem com originalidade e impacto.</p>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className={this.props.isPrimary ? "about-box text-center p-3" : "about-box about-light text-center p-3"}>
                                    <div className="about-icon mb-4">
                                        <i className="mdi mdi-projector-screen"></i>
                                    </div>
                                    <h4 className="fw-light"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}>Soluções Estratégicas</Link></h4>
                                    <p className={this.props.isPrimary ? "text-white-50 f-14" : "text-muted f-14"}>Nossas soluções oferecem o caminho certo para o sucesso do seu negócio. Abordagens personalizadas que resolvem desafios complexos e impulsionam resultados duradouros.</p>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className={this.props.isPrimary ? "about-box text-center p-3" : "about-box about-light text-center p-3"}>
                                    <div className="about-icon mb-4">
                                        <i className="mdi mdi-nature"></i>
                                    </div>
                                    <h4 className="fw-light"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}>Crescimento Dinâmico</Link></h4>
                                    <p className={this.props.isPrimary ? "text-white-50 f-14" : "text-muted f-14"}>Alimente um crescimento contínuo com nossas estratégias inovadoras. Adaptamos suas metas em impulsores de sucesso, impulsionando sua jornada rumo à excelência.</p>
                                </div>
                            </Col>
                        </Row>


                        <Row className="align-items-center mt-5">
                            <Col md={6}>
                                <div className="about-desc">
                                    <h3 className={this.props.isPrimary ? "text-white mb-3 fw-light" : "text-dark mb-3 fw-light"}>Soluções de Alta Performance para Pequenos Negócios</h3>
                                    <p className={this.props.isPrimary ? "text-white-50 f-15" : "text-muted f-15"}>Maximize o potencial do seu pequeno negócio com nossas soluções de alta performance. Estratégias personalizadas impulsionam visibilidade, conversões e lucratividade, garantindo resultados tangíveis. Seja parceiro na busca pela excelência e destaque no mercado com nossas soluções acessíveis e eficazes.</p>
                                    <div className="about-by">
                                    <div className="mt-5">
                                    <a target='_blank' href='whats' type="submit" className="btn btn-custom">Falar agora</a>
                                            </div>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className={this.props.isPrimary ? "about-img position-relative p-4" : "about-img light-img position-relative p-4"}>
                                    <img src={about} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>

                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
