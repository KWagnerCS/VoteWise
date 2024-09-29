import { useState } from 'react'
import '../index.css'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import VotingFlowchart from '../components/VotingFlowChart'

const VotingGuidePage = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <MainHeader />
                <main className="flex-grow">
                    <VotingFlowchart />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default VotingGuidePage;