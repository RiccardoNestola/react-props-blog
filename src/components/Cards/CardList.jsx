import React from 'react'
import Card from './Card'

const CardList = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto" >
                    <div className="flex flex-wrap -m-4">
                        <Card />
                    </div>
                </div>

            </section>

        </>

    )

}

export default CardList