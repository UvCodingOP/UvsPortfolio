import React from 'react'

const Card = (props) => {
    return (
        <div className="h-full">
            <div
                className="p-4 sm:p-6 rounded-xl bg-[#121212] h-25 flex flex-col justify-center
                shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#161616] 
                hover:shadow-[4px_4px_8px_#0e0e0e,-4px_-4px_8px_#161616] 
                transition-all duration-300 cursor-pointer"
            >

                <div className="flex items-center gap-3">
                    {props.icon}
                    <h1 className="text-lg sm:text-xl">{props.title}</h1>
                </div>


                <p className="text-sm sm:text-base text-gray-400 ml-[calc(25px+0.75rem)] mt-2">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card
