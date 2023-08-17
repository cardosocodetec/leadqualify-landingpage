import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import FooterLink from './FooterLink';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    id: 1,
                    title: "COMPANY",
                    child: [
                        { title: "Monitoring Grader", link: "/" },
                        { title: "Job Opening", link: "/" },
                        { title: "Customers", link: "/" },
                        { title: "Privacy", link: "/" },
                    ],
                },
                {
                    id: 2,
                    title: "SUPPORT",
                    child: [
                        { title: "Get Started", link: "/" },
                        { title: "Blog", link: "/" },
                        { title: "Knowledge Base", link: "/" },
                    ],
                },
                {
                    id: 3,
                    title: "LEGAL",
                    child: [
                        { title: "Terms & Conditions", link: "/" },
                        { title: "Privacy Policy", link: "/" },
                        { title: "Customers", link: "/" },
                        { title: "Pricing", link: "/" },
                    ]
                }
            ]
        };
    };
    render() {
        return (
            <React.Fragment>
                
                <FooterLink />
            </React.Fragment>
        );
    };
};
