import React from 'react';
import logo from '../logo.png'
import Container from '../components/Container'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const mainTextContent = [
    "Everyone needs a helping hand from time to time. Unfortunately, when that time comes, there’s not always a hand available. Royal Oaks strives to be that forever helping hand. The one thing families, communities, and even broken homes can always count on. Whether you’re sick or just need to take a trip, Royal Oaks is here to support you!",
    "Our dedicated team, and professional guests, provide high quality in-home services for every household with a need. Services range from providing traditional babysitting to helping teens develop essential daily living skills, as well as supporting with concerning behaviors. Every team member is equipped with their own set of skills, from First Aid Certified to Board Certified Behavior Analysts, to serve our community in every way possible. You ask, we deliver! Prices? Cheapest in town! Financial help? We got you! Anything you need, we aim to please!",
    "For rates, availability, questions, or feedback, please feel free to reach us at royaloaksenterprise@gmail.com. Also, please reach out for any special accommodations or requests, we’ll do our best to meet every need! We look forward to hearing from you!"
]

export default function Home() {
    return (
        <Container>
            <div style={{
                height: "20vh",
                display: "flex",
                alignItems: "center"
            }}>
                <div style={{ flexGrow: 1, fontSize: "64px", fontFamily: "Comic Sans MS", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <span>Who Are We?</span>
                </div>            
            </div>
            <div>
                {mainTextContent.map(text => <div style={{ padding: '8px', textAlign: 'center' }}>{text}</div>)}
            </div>
            <div style={{ width: "100%", margin: "16px", border: "1px solid white" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <div style={{
                    height: "30vh",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <div>
                        <span>Roy Patterson (he/him/his), Founder, Behavior Consultant</span>
                        <div style={{ width: "100%", margin: "16px 0px", border: "1px solid white" }}></div>
                    </div>
                    <img style={{ height: "30vh", borderRadius: "100%" }}src={logo} className="App-logo" alt="logo" />
                </div>
                <div style={{ padding: "16px", maxWidth: "50vw" }}>After saving his first life at the age of 16, there has been a hunger growing inside of Roy. A hunger to save lives, and to protect those around him. Starting his career off as a lifeguard, quickly taught him how precious life can be, as well as how abruptly our lives can change. One second, we are living our best lives, smiling, and laughing. The next second, we are drowning, trying to grab ahold of anything available around us. Roy soon realized how the smallest things can turn our world upside down. It wasn’t until he began undergrad, that he finally understood that drowning not only meant physically but could mean cognitively as well. During this time, Roy found himself in many unfortunate situations, and on the verge of drowning several times. Having to reach out to several different resources, trying to get any support he could. But what if the school didn’t have those resources available? What if he couldn’t go to someone for help? Roy has stated that without the resources provided for him, and readily available, he truly believes there would have been little hope for his success. Therefore, Roy believes every individual deserves the right to access any resource necessary to be successful. That’s when the thought of Royal Oaks came into play. After working in the field of Applied Behavior Analysis (ABA) for several years, Roy quickly realized the need for more resources within the community. Seeing firsthand the struggles and challenges families face on a day-to-day bases, made him want to do something right away. Unfortunately, Roy felt he didn’t have what it took to be t a true resource, due to his lack of knowledge. This was all the motivation he needed to purse a master’s degree in ABA.  Once completing his Masters, Roy finally felt he had obtained the knowledge needed to truly help those around him. By applying ABA to different environments & situations, Roy has been able to successfully improve lives of thousands! It is his personal mission to help as many individuals as he possible can throughout his lifetime. To this day, Roy continues to make efforts to improve his skills, and better the lives around him. As of now, he's currently pursuing a PhD in ABA, in hopes of staying up to date with the best/most suitable practices, to help improve an individual’s overall quality of life. </div>
            </div>
        </Container>
    )
}