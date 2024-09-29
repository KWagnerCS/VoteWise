import React, { useState } from 'react';

const ArticleImageWithText = ({ image, article, buttonText }) => {
    return ( 
        <div className="flex gap-5 mb-5 border p-4 items-center justify-center">
            <img src={image} className='w-[300px]' alt={article} />
            <p>
            Yes is a powerful word that can open up countless possibilities in our lives. It represents a willingness to take risks, to embrace change, and to step out of our comfort zones. Saying yes can lead us down new paths, introduce us to new people, and create unforgettable experiences. By being open to saying yes, we are showing a readiness to welcome new opportunities and growth into our lives. Yes is a word that can lead to endless adventures and endless possibilities.
            </p>
                
        </div>

     );
}
 
export default ArticleImageWithText;