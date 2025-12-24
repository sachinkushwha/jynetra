import { useRef } from "react";
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
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `New project:\nName: ${name.current.value}\nEmail: ${email.current.value}\nPhone: ${mobile.current.value}\nService: ${service.current.value}`,
      }),
    });

    const data = await response.json();
    if (data.ok) {
      alert("thank you\nyour request submitted successfully");
      navigate("/");
    } else {
      alert("something went wrong\nplease try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      <form
        onSubmit={handlesubmit}
        className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 space-y-6 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold text-center text-white drop-shadow-lg">
          Get in Touch
        </h2>

        <div>
          <label className="block text-sm font-medium text-white/80">Name</label>
          <input
            type="text"
            ref={name}
            className="mt-1 block w-full rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition backdrop-blur-md p-3"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80">Email</label>
          <input
            type="email"
            ref={email}
            className="mt-1 block w-full rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition backdrop-blur-md p-3"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80">
            Mobile No
          </label>
          <input
            type="tel"
            ref={mobile}
            className="mt-1 block w-full rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition backdrop-blur-md p-3"
            placeholder="Enter your mobile number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80">
            Select Service
          </label>
          <select
            ref={service}
            className="mt-1 block w-full rounded-xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition backdrop-blur-md p-3"
          >
            <option className="text-black" value="Website development">
              Website Development
            </option>
            
            <option className="text-black" value="Business Website">
              Business Website
            </option>
            
            <option className="text-black" value="Landing Page">
              Landing Page
            </option>
            <option className="text-black" value="Website Redesign">
              Website Redesign
            </option>
            <option className="text-black" value="Website Maintenance">
              Website Maintenance
            </option>

            <option className="text-black" value="Basic SEO">
              Basic SEO
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-white/20 border border-white/30 text-white font-semibold rounded-xl shadow-xl hover:bg-white/30 transition backdrop-blur-lg hover:scale-[1.02] active:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
