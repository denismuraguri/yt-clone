import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './componenets/header/Header'
import SideBar from './componenets/sidebar/SideBar'
import HomeScreen from './screens/homescreen/HomeScreen'
import LoginScreen from './screens/loginscreens/LoginScreen'
import {
    //BrowserRouter as Router,
    Redirect, Route, Switch, useHistory } from "react-router-dom"


import "./_app.scss";
import { useSelector } from 'react-redux'

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

     const {accessToken, loading} = useSelector(state=> state.auth)
    //const {accessToken, loading} = useSelector(state => state.auth);
    
    const history = useHistory()

    useEffect(() => {
        if(!loading && !accessToken){
            history.push('/auth')       
        }
    }, [accessToken, loading, history])
    return (
        //<Router>
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
        //</Router>

        //<LoginScreen />
    )
}
 
