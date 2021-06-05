import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './componenets/header/Header'
import SideBar from './componenets/sidebar/SideBar'
import HomeScreen from './screens/homescreen/HomeScreen'

import "./_app.scss";

export default function App() {
    return (
        <div>
            <Header />
            <div className="app__container border border-info">
                <SideBar />
                <Container fluid className="app__main border border-warning">
                    <HomeScreen />
                </Container>
            </div>
        </div>
    )
}
