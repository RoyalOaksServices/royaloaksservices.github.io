import React, { useState } from 'react';
import Container from '../components/Container'
import ServiceTile from '../components/ServiceTile'
import TemporaryDrawer from '../components/CartDrawer'
import { addOns, generalServices } from '../Services';

export default function Services() {
    const Shop = () => {
        const [cartData, setCartData] = useState([]);
        const updateCartData = (item, toggle = "add") => {
            if (toggle === "add") {
                let newData = [...cartData]
                newData.push(item)
                setCartData(newData)
            } else if (toggle === "remove") {
                console.log(cartData, item)
            }
        }
        const renderGeneralServices = () => {
            return generalServices.map((service, index) => {
                return <ServiceTile {...{ service, updateCartData, key:index }} />
            })
        }
        const renderAddOns = () => {
            return addOns.map((service, index) => {
                return <ServiceTile {...{ service, updateCartData, key: index }} />
            })
        }
        const headerStyles = {
            fontSize: "36px",
            fontFamily: "Comic Sans MS",
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
        }

        return (
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', width: '80vw', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={headerStyles}>
                        <div style={{ width: "50vw" }}>
                            General Services
                        </div>
                        <TemporaryDrawer {...{ cartData }} />
                    </div>
                    <div style={{ display: 'flex '}}>
                        {renderGeneralServices()}
                    </div>
                    <div style={{ ...headerStyles, justifyContent: 'center' }}>Additional Services</div>
                    <div style={{ display: 'flex '}}>
                        {renderAddOns()}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <Container>
            <Shop />
        </Container>
    )
}