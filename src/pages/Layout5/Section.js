import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section home-5-bg" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={7}>
                                        <div className="mt-40 text-center home-5-content">
                                            <div className="home-icon mb-4">
                                                <i className="mdi mdi-pinwheel mdi-spin text-white h1"></i>
                                            </div>
                                            <h1 className="text-white fw-normal home-5-title mb-0">Sites Tecnologicos e com Designs Ousados
                                            </h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">Transforme visitantes em clientes. Design envolvente, conteúdo persuasivo e experiência única para impulsionar o crescimento do seu negócio. Aumente sua taxa de conversão hoje mesmo!</p>
                                            <div className="mt-5">
                                                <a target='_blank' href='whats' type="submit" className="btn btn-custom">Falar agora</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
