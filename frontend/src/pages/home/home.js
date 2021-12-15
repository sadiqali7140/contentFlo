import React from "react"
import "./home.css"
import "../../index.css"
import QuickView from "../../components/quickView/quickView"
import Calendar from "../../components/calendar/calendar"
import Card from "../../components/card/card"
import Carousel from "../../components/carousel/carousel"

function Home() {
    return(
        <div>
            <QuickView />,
            <Calendar />,
            {/* <Card />, */}
            <Carousel />
        </div>
    )
}

export default Home