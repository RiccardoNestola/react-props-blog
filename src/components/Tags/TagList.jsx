import React from 'react'



const TagList = (props) => {
    return (
        <>
            <ul className="flex flex-wrap justify-center">
                <h1 className="text-2xl font-bold">Tags:</h1>

               
                    <li className="mr-3 mb-2">

                        <a key={index} href="/" className="inline-block px-3 py-1 mx-2 text-white bg-gray-500 rounded-full">{tag}</a>
                    </li>
                

            </ul>
        </>
    )
}

export default TagList