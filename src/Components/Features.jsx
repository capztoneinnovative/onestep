import React from 'react'

import { useNavigate } from "react-router-dom";

const integrations = [
    {
        title: "Free Screener",
        desc: "1Step offers the M-CHAT-R and CAST autism screener tools, which are clinically-validated and widely used by healthcare professionals. The results will let you know if a further evaluation may be needed.",
        icon: <img src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg" />

    },

]

const Features = () => {
    const navigate = useNavigate()
    return (
        <section className="py-4">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl space-y-3 md:mx-auto">
                    <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">Free Screeners</h1>
                    <p className="text-gray-600 mt-2">Wondering if your child may be on the spectrum? We can help.</p>
                </div>
                <ul className="mt-4 grid flex-1 max-w-xl mx-auto  xl:mt-0">
                    {
                        integrations.map((item, idx) => (
                            <li className="border rounded-lg">
                                <div className="flex items-start justify-between p-4">
                                    <div className="space-y-2">
                                        {item.icon}
                                        <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>

                                </div>

                                <div class="py-5 px-4 border-t text-right flex justify-between items-center">
                                    <button onClick={() => { navigate("/") }} class="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 border-stone-800 hover:bg-gray-100">Back</button>
                                    <a href="javascript:void(0)" onClick={() => { navigate("/question") }} class="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                                        Let's Get Started
                                    </a>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Features