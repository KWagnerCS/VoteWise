import { useState } from 'react'
import '../index.css'
import Header from '../components/Header'
import ArticleImageWithText from '../components/articleImageWithText'

const LandingPage = () => {

    // const lists = [
    //     {
    //         image: "https://images.pexels.com/photos/957769/pexels-photo-957769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //         article: 'React',
    //         buttonText: 'Start Learning'
    //     },
    //     {
    //         image: "https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //         article: 'Vite',
    //         buttonText: 'Learn More'
    //     }
    // ]


    return (
        <>
            <Header />
            {/* {
                lists.map((list, index) => (
                    <ArticleImageWithText key={index} image={list.image} article={list.article} buttonText={list.buttonText} />
                ))
            } */}
            <h1 className="text-2xl p-5 font-bold">Your voice matters. Let us help u express it or some shi.</h1>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Get Started</button>
        </>
    )
}

export default LandingPage;
