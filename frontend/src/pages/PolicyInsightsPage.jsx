import { useState } from 'react'
import '../index.css'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'

const PolicyInsightsPage = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <MainHeader />
                <main className="flex-grow">
                    <h1 className="text-2xl p-5 font-bold">placeholder.</h1>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default PolicyInsightsPage;