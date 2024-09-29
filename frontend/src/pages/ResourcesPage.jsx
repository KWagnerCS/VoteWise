import { useState } from 'react'
import '../index.css'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import DiscussionBoard from '../components/DiscussionBoard'
import RelevantArticles from '../components/RelevantArticles'
import UsefulLinks from '../components/UsefulLinks'

const ResourcesPage = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <MainHeader />
                <main className="flex-grow flex gap-6 p-6 pl-10 pr-10">
                    <RelevantArticles />
                    <DiscussionBoard />
                    <UsefulLinks />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default ResourcesPage;