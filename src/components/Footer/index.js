import React from 'react'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>About Us</FooterLinksTitle>
                                <FooterLinks to="/signin" >How It Works</FooterLinks>
                                <FooterLinks to="/signin" >Testimonials</FooterLinks>
                                <FooterLinks to="/signin" >Careers</FooterLinks>
                                <FooterLinks to="/signin" >Investers</FooterLinks>
                                <FooterLinks to="/signin" >Terms Of Service</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
