import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './componenets/header/Header'
import SideBar from './componenets/sidebar/SideBar'
import HomeScreen from './screens/homescreen/HomeScreen'

import "./_app.scss";

export default function App() {
    const [sidebar, toogleSidebar] = useState(false)

    const handleToggleSidebar = ()=> toogleSidebar(value=>!value)
    return (
        <div>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container border border-info">
                <SideBar 
                sidebar={sidebar}
                handleToggleSidebar={handleToggleSidebar}
                 />
                <Container fluid className="app__main border border-warning">
                    <HomeScreen />
                </Container>
            </div>
        </div>
    )
}
