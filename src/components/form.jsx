import { useRef } from "react"
import { useNavigate } from "react-router-dom";
export const Form = () => {
    const navigate = useNavigate();
    const name = useRef();
    const email = useRef();
    const mobile = useRef();
    const service = useRef();
    const handlesubmit = async (e) => {
        e.preventDefault();
        const CHAT_ID = import.meta.env.VITE_CHAT_ID;
        const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        const response = await fetch(url, {
            method: 'POST', headers: { 'Content-type': 'application/json' }, body: JSON.stringify({
                chat_id: CHAT_ID,
                text: `New project:\nName: ${name.current.value}\nEmail: ${email.current.value}\nPhone: ${mobile.current.value}\nService: ${service.current.value}`
            })
        })
        const data = await response.json();
        if (data.ok) {
            alert('thank you\nyour request submit successfully');
            navigate('/');
        } else {
            alert('something went worng\nplease try again')
        }


    }
    return (
        <form
            onSubmit={handlesubmit}
            className="max-w-md mx-auto mt-10 p-8 bg-white shadow-2xl rounded-2xl space-y-6 mb-5"
        >
            <h2 className="text-2xl font-bold text-center text-gray-800">Get in Touch</h2>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    ref={name}
                    id="name"
                    className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    ref={email}
                    id="email"
                    className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter your email"
                />
            </div>

            <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No</label>
                <input
                    type="tel"
                    ref={mobile}
                    id="mobile"
                    className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter your mobile number"
                />
            </div>

            <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Select Service</label>
                <select
                    ref={service}
                    id="service"
                    className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option value="Website development">Website Development</option>
                    <option value="App development">App Development</option>
                    <option value="SEO">SEO</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition"
            >
                Submit
            </button>
        </form>

    )
}