import React from 'react';

const TagColor = {
    "html": "bg-red-500",
    "css": "bg-blue-500",
    "js": "bg-yellow-500",
    "php": "bg-violet-500"
};

const CardInfo = (props) => {

        return (

            <React.Fragment key={props.id}>
                <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={props.image} alt="blog" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                {props.tags.map(tag => (
                                    <span key={tag} className={`${TagColor[tag]} mr-2 p-1 rounded text-white`}>{tag}</span>
                                ))}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.title}</h1>
                            <p className="leading-relaxed mb-3">{props.content}</p>
                            <div className="flex items-center flex-wrap ">
                                <a href="/learn-more" className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0">Scopri di più</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    };

export default CardInfo;
