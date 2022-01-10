import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLinks,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLinks to="/signin">How It Works</FooterLinks>
              <FooterLinks to="/signin">Testimonials</FooterLinks>
              <FooterLinks to="/signin">Careers</FooterLinks>
              <FooterLinks to="/signin">Investers</FooterLinks>
              <FooterLinks to="/signin">Terms Of Service</FooterLinks>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Contact Us</FooterLinksTitle>
              <FooterLinks to="/signin">Contact</FooterLinks>
              <FooterLinks to="/signin">Support</FooterLinks>
              <FooterLinks to="/signin">Destinations</FooterLinks>
              <FooterLinks to="/signin">Sponsorships</FooterLinks>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Videos</FooterLinksTitle>
              <FooterLinks to="/signin">Submit Videos</FooterLinks>
              <FooterLinks to="/signin">Ambassadors</FooterLinks>
              <FooterLinks to="/signin">Agency</FooterLinks>
              <FooterLinks to="/signin">Influence</FooterLinks>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Social Media</FooterLinksTitle>
              <FooterLinks to="/signin">Instagram</FooterLinks>
              <FooterLinks to="/signin">Facebook</FooterLinks>
              <FooterLinks to="/signin">Youtube</FooterLinks>
              <FooterLinks to="/signin">Twitter</FooterLinks>
              <FooterLinks to="/signin">LinkedIn</FooterLinks>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
