import { useState } from 'react'
import '../index.css'
import LandingHeader from '../components/LandingHeader'
import Footer from '../components/Footer'
import EligibilityQuestionnaire from '../components/eligibilityQuestionnaire'

const LandingPage = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <LandingHeader />
            {/* First Section */}
            <div className="h-screen flex flex-col justify-center items-center bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/flagrealsky.jpg')" }}>
            </div>
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
            <div id="section2" className="h-screen justify-center items-center">
                <EligibilityQuestionnaire />
                </div>
        </>
    );
};

export default LandingPage;