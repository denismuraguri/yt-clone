import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './componenets/header/Header'
import SideBar from './componenets/sidebar/SideBar'
import HomeScreen from './screens/homescreen/HomeScreen'
import LoginScreen from './screens/loginscreens/LoginScreen'
import {BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"


import "./_app.scss";

const Layout = ({children}) =>{
    const [sidebar, toogleSidebar] = useState(false)

    const handleToggleSidebar = ()=> toogleSidebar(value=>!value)

    return(
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container border border-info">
                <SideBar 
                sidebar={sidebar}
                handleToggleSidebar={handleToggleSidebar}
                 />
                <Container fluid className="app__main border border-warning">
                    {children}
                </Container>
            </div>
        </>

    )

}

export default function App() {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Layout>
                        <HomeScreen />

                    </Layout>
                </Route>
                <Route path="/auth">
                    <LoginScreen />
                </Route>
                <Route path="/search">
                    <Layout>
                        <h1>Search Result</h1>
                    </Layout>
                </Route>
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>

        //<LoginScreen />
    )
}
 

/*import React, { useState } from 'react'
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
*/