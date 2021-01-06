import React from 'react'
import Navbar from "./Components/NavBar/Navbar"
import Main from "./Components/Main/Main"
import FirstSection from "./Components/FirstSection/FirstSection"
import SecondSection from "./Components/SecondSection/SecondSection"
import Contact from "./Components/Contact/Contact"


import "./style.css"

const App = () => {
    return (       
        <div>
            <Navbar />
            <Main />
            <FirstSection />
            <SecondSection />
            <Contact />

        </div>
    )
}

export default App
