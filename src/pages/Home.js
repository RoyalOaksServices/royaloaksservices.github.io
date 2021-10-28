import React from 'react';
import logo from '../logo.png'
import Container from '../components/Container'

export default function Home() {
    return (
        <Container>
            <div style={{
                height: "20vh",
                display: "flex",
                alignItems: "center"
            }}>
                <div style={{ flexGrow: 1, fontSize: "64px", fontFamily: "Comic Sans MS", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <span>Royal Oaks In Home Services</span>
                </div>            
            </div>
            <div style={{
                height: "30vh",
                display: "flex",
                alignItems: "center"
            }}>
                <img style={{ height: "30vh", borderRadius: "100%" }}src={logo} className="App-logo" alt="logo" />
            </div>
            <div style={{
                width: "50vw",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}>
                <span style={{ fontSize: "48px", paddingTop: "48px" }}>The Mission</span>
                <div style={{ width: "100%", margin: "16px", border: "1px solid white" }}></div>
                <span>“It starts with the Home”</span>
                <span>We have made it our mission to bring high quality in-home services to every community, more specifically, to every household. Royal Oaks In-Home Services makes every effort to be a helpful resource for any household in need of support. We believe every home & family deserves the right to feel supported, and to receive the support they need. As a result, we have made it our mission to be a resourceful tool, for anyone in need of support in the home.</span>
                <span style={{ fontSize: "48px", paddingTop: "48px" }}>The Vision</span>
                <div style={{ width: "100%", margin: "16px", border: "1px solid white" }}></div>
                <span style={{ paddingBottom: "48px" }}>We have a vision of a community with the resources and ability to attend to every household need.</span>
            </div>
        </Container>
    )
}