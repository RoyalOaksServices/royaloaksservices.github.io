import React from 'react';
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
                    <span>How To Reach Us</span>
                </div>            
            </div>
            <div style={{
                height: "20vh",
                display: "flex",
                alignItems: "center"
            }}>
               <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
            </div>
        </Container>
    )
}