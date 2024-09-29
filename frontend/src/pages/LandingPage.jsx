import { useState } from 'react'
import '../index.css'
import Header from '../components/Header'
import EligibilityQuestionnaire from '../components/eligibilityQuestionnaire'
import ArticleImageWithText from '../components/articleImageWithText'

const LandingPage = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Header />
            {/* First Section */}
            <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
                <h1 className="text-4xl mb-4 font-medium">Your voice matters. Let us help u express it or some shi.</h1>
                <button
                    onClick={() => scrollToSection('section2')}
                    className="px-6 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Get Started
                </button>
            </div>

            {/* Second Section */}
            <div id="section2" className="h-screen flex flex-col justify-center items-center bg-gray-300 p-8">
                <EligibilityQuestionnaire />
            </div>



            
        </>
    );
};

export default LandingPage;