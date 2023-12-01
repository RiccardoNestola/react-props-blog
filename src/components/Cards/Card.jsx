import React from 'react';
import posts from '../../data/posts';
import CardInfo from './CardInfo';

const Card = () => {
    
    
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto" >
                    <div className="flex flex-wrap -m-4">

                        {posts.map((post) => (       
                            post.published && <CardInfo key={post.id} {...post} />
                        ))}
                    </div>
                </div>

            </section>

        </>
    )
}

    

export default Card