import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";



const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-3 col-sm-6">
            <FooterH2>About Us</FooterH2>
            <FooterLink href="/">How it works</FooterLink>
            <FooterLink href="/">Testimonials</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="/">Terms of Service</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Contact Us</FooterH2>
            <FooterLink href="/ContactForm">Contact</FooterLink>
            <FooterLink href="https://discord.gg/2PCQFaQT">Support</FooterLink>
            <FooterLink href="#">Destinations</FooterLink>
            <FooterLink href="#">Our Locations</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Customers</FooterH2>
            <FooterLink href="https://discord.gg/2PCQFaQT">Our Customers</FooterLink>
            <FooterLink href="https://discord.gg/2PCQFaQT">How to reach us</FooterLink>
            <FooterLink href="https://discord.gg/2PCQFaQT">Video Samples</FooterLink>
            <FooterLink href="https://discord.gg/2PCQFaQT">Agency</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="https://discord.gg/2PCQFaQT">Discord</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
          </div>
        </div>
        <div className="row mt-3 copyright-social-links outer-container">
          <hr />
          <div className="col-md-6">
            Copyright &copy; 2022. All Rights Reserved By CyberSaviour
          </div>
          </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h1 className="logo-text gray-text center-align">- CyberSaviour -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
