import { useState } from "react";

const Registration = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <div className="w-full min-h-screen bg-cyan-800 flex items-center justify-center">
            <form className="flex flex-col w-[30vw] shadow-2xl gap-4 items-start bg-white p-6 rounded-lg ">

                <h1 className="text-center w-full text-cyan-800 text-2xl font-bold">
                    Please sign up here
                </h1>

                <label className="text-xl font-bold font-sans" htmlFor="name">Enter your name :</label>
                <input required className="w-full px-4 py-3 bg-gray-200 rounded-md outline-blue-400" type="text" placeholder="enter your name here" id="name" />


                <label className="text-xl font-bold font-sans" htmlFor="email">Enter your name :</label>
                <input required className="w-full px-4 py-3 bg-gray-200 rounded-md outline-blue-400" type="email" placeholder="enter your email here" id="email" />

                <label className="text-xl font-bold font-sans" htmlFor="password">Enter your password :</label>
                <input required className="w-full px-4 py-3 bg-gray-200 rounded-md outline-blue-400" type="password" placeholder="enter your password here" id="password" />


                <div className="flex items-center gap-2">
                    <input required type="checkbox" name="" id="check" /> <span>I Agree, All the terms and conditions.</span>
                </div>
                <div className="text-end w-full">
                    <button onClick={()=>setIsSubmitted(true)} className="px-4 py-2 bg-cyan-600 rounded-lg text-white font-bold ">Sign Up</button>
                </div>
            </form>

            {
                isSubmitted && <div className="fixed top-0 flex items-center justify-center min-h-screen w-full bg-cyan-800">
                <div className="bg-white rounded-lg shadow-2xl w-[40vw] h-[400px]">
                    <h1 className="text-2xl font-bold text-center text-cyan-800 my-4">
                        Your response submitted successfully
                    </h1>
                </div>
            </div>
            }
        </div>
    );
};

export default Registration;