import React from 'react';
import posts from '../../../data/posts';

const Card = () =>

    posts.map((post, i) => {
        return (

            <React.Fragment key={post.id}>
                <div className="p-4 md:w-1/3" key={post.id}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.image} alt="blog" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.tags.join(" ")}</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
                            <p className="leading-relaxed mb-3">{post.content}</p>
                            <div className="flex items-center flex-wrap ">
                                <a href="/learn-more" className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0">Scopri di più</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    });

export default Card;

