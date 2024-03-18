import { useState } from "react";

const Registration = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !password) {
            alert("Please fill in all required fields.");
            return;
        }
        if (!isChecked) {
            alert("Please agree to the terms and conditions.");
            return;
        }

        setIsSubmitted(true);
    };

    console.log(name, email, password, isChecked);


    return (
        <div className="w-full min-h-screen bg-cyan-800 flex items-center justify-center">
            <form className="flex flex-col w-[30vw] shadow-2xl gap-4 items-start bg-white p-6 rounded-lg ">

                <h1 className="text-center w-full text-cyan-800 text-2xl font-bold">
                    Please sign up here
                </h1>

                <label className="text-xl font-bold font-sans" htmlFor="name">Enter your name :</label>
                <input
                    onChange={(event) => setName(event.currentTarget.value)}
                    className="w-full px-4 py-3 bg-gray-200 rounded-md outline-blue-400" type="text" placeholder="enter your name here" id="name"
                    required
                />


                <label className="text-xl font-bold font-sans" htmlFor="email">Enter your email address :</label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full px-4 py-3 bg-gray-200 rounded-md outline-blue-400" type="email" placeholder="enter your email here" id="email"
                    required
                />

                <label className="text-xl font-bold font-sans" htmlFor="password">Enter your password :</label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full px-4 py-3 bg-gray-200 rounded-md outline-blue-400" type="password" placeholder="enter your password here" id="password"
                    required
                />


                <div className="flex items-center gap-2">
                    <input onChange={(event) => setIsChecked(event.target.checked)} type="checkbox" name="" id="check" /> <span>I Agree, All the terms and conditions.</span>
                </div>
                <div className="text-end w-full">
                    <button onClick={handleSubmit} className="px-4 border border-transparent hover:border-cyan-500 hover:bg-transparent duration-300 hover:text-black py-2 bg-cyan-600 rounded-lg text-white font-bold ">Sign Up</button>
                </div>
            </form>

            {
                isSubmitted && <div className="fixed top-0 flex items-center justify-center min-h-screen w-full bg-cyan-800">
                    <div className="bg-white space-y-4 text-center rounded-lg shadow-2xl w-[40vw] h-[400px]">
                        <h1 className="text-2xl font-bold text-center text-cyan-800 my-4">
                            Your response submitted successfully
                        </h1>
                        <div className="flex flex-col text-start p-10">
                            <h2 className="text-xl font-semibold ">Name : {name}</h2>
                            <h2 className="text-xl font-semibold ">Email : {email}</h2>
                        </div>
                        <button className="px-4 py-2 border border-transparent hover:border-cyan-500 hover:text-black duration-300 hover:bg-transparent rounded-md bg-cyan-700 font-bold text-white" onClick={() => setIsSubmitted(false)}>
                            Close
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Registration;