import { useState } from 'react';
import '../index.css';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-100">
                <MainHeader />
                <main className="flex-grow p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center">About WiseVote</h1>
                    <h2 className="text-xl font-semibold mb-2 text-center">Created by Kevin Wagner and Alexander Aziz</h2>
                    <section className="bg-white p-5 rounded-lg shadow-md max-w-3xl mx-auto mt-6">
                        <p className="mt-2 text-gray-700">
                            WiseVote is designed to empower voters with the information they need to make informed decisions. In a world where the voting process can often seem overwhelming, our goal is to simplify access to vital voting information, including eligibility requirements, polling locations, and candidate details.
                        </p>
                        <p className="mt-2 text-gray-700">
                            We believe that an informed electorate is crucial for a functioning democracy. That's why we created WiseVote—to help you navigate the voting landscape with ease and confidence. Whether you’re a first-time voter or a seasoned participant, our platform is here to support you.
                        </p>
                        <p className="mt-2 text-gray-700">
                            Join us in making voting more accessible and informed for everyone. Together, let's make our voices heard!
                        </p>
                    </section>
                    <section className="text-center mt-6">
                        <h3 className="text-lg font-semibold">Connect with Us</h3>
                        <div className="flex justify-center mt-2 space-x-4">
                            <a href="https://www.linkedin.com/in/kevin-wagner" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Kevin Wagner
                            </a>
                            <span>|</span>
                            <a href="https://www.linkedin.com/in/alexanderaziz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Alexander Aziz
                            </a>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default AboutPage;
