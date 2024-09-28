import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../index.css'
import Header from '../components/Header'

function HomePage() {
    return (
        <>
        <div className="sans">
            <Header />
            <h1 className="text-2xl p-5 font-bold">Your voice matters. Let us help u express it or some shi.</h1>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Get Started</button>   
        </div>
        </>
    )
}

export default HomePage
