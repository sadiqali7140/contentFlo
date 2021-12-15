import React from "react"
import "./home.css"
import "../../index.css"
import QuickView from "../../components/quickView/quickView"
import Calendar from "../../components/calendar/calendar"

function Home() {
    return(
        <div>
            <QuickView />,
            <Calendar />
        </div>
    )
}

export default Home