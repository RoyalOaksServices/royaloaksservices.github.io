import React, { useState } from 'react';
import { ReactComponent as Underline} from '../royal.underline.svg';
import Container from '../components/Container';

export default function Donate() {
    const [showSurvey, setShowSurvey] = useState(false)
    const onShowSurvey = () => {
        setShowSurvey(!showSurvey)
    }
    const iframeStyles = {
        width: "640px",
        height: "2616px",
        frameborder: "0",
        marginheight: "0",
        marginwidth: "0",
        display: showSurvey ? "inline" : "none",
        flexGrow: "1",
    }
    return (
        <Container style={{ height: '100%' }}>
            <div style={{ flexGrow: showSurvey ? 0 : 1, fontSize: "64px", fontFamily: "Comic Sans MS", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <span>How You Can Help</span>
                <Underline style={{
                    width: "70%",
                    fill: "#CDD1C4",
                }}/>
            </div>
            <div style={{ flexGrow: 2, display: showSurvey ? "none" : "flex", flexDirection: "row", overflow: "auto", }}>
                <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "1vw",
                        width: "50%",
                    }}>                    
                    <div style={{ fontSize: "36px", fontFamily: "Comic Sans MS", margin: "1vw" }}>
                        Volunteer
                    </div>
                    <div style={ {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <span style={{ margin: "0.5vw 0" }}>Currently, we are seeking professional, qualified, caring, and passionate individuals to help our organization continue to grow. Volunteers will be compensated during their time working with the organization. For more information, please contact us at royaloaksenterprise@gmail.com</span>
                        <span style={{ margin: "0.2vw 0", textDecoration: "underline" }}>Registered Behavior Technicians (RBTs)</span>
                        <span>Are you an RBT looking to accrue supervised hours? We offer supervision (from a BCBA) in exchange for volunteer hours. Depending on your situation/flexibility, you could potentially accumulate supervised hours every weekend!</span>
                        <button style={{ margin: "1vw" }} onClick={onShowSurvey}>Fill out a survey and tells us more about yourself!</button>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "1vw",
                    width: "50%"
                }}>
                    <div style={{ fontSize: "36px", fontFamily: "Comic Sans MS", margin: "1vw" }}>
                        Donate
                    </div>
                    <div style={ {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <span style={{ margin: "0.5vw 0" }}>As we continue to grow, donations are always welcomed, and greatly appreciated! We take donations in the form of checks, school supplies, children’s clothing, toys, hygiene items, and etc.. </span>
                        <span style={{ margin: "0.5vw 0" }}>Licensed professionals/providers, even you can help! We are always looking for licensed professionals willing to donate their time to the organization. This includes Board Certified Behavior Analysts, physical therapists, occupational therapists, speech therapists, and licensed counselors.</span>
                        <span style={{ margin: "0.5vw 0" }}>If you’re interested in making donations or donating your time, please contact us at royaloaksdonations@gmail.com</span>
                    </div>
                </div>
            </div>
            <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSe7ENGz4bmn9lQmYyW_mYbd0ANOyS3Pd1stPdI2gdjAxLp3qA/viewform?embedded=true" style={iframeStyles}>Loading…</iframe>
        </Container>
    )
}