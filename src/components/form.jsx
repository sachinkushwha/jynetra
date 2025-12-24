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
      alert("Thank you!\nYour request has been submitted successfully.");
      navigate("/");
    } else {
      alert("Something went wrong.\nPlease try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-6">
      <form
        onSubmit={handlesubmit}
        className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-6 md:p-8 space-y-6 animate-fadeIn"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">
            Get in Touch
          </h2>
          <p className="text-white/80 text-sm">
            Fill out the form and we'll get back to you shortly
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Full Name
            </label>
            <input
              type="text"
              ref={name}
              required
              className="w-full rounded-xl bg-white/15 text-white placeholder-white/50 border border-white/30 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 backdrop-blur-md p-3.5 text-base hover:bg-white/20"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              ref={email}
              required
              className="w-full rounded-xl bg-white/15 text-white placeholder-white/50 border border-white/30 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 backdrop-blur-md p-3.5 text-base hover:bg-white/20"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              ref={mobile}
              required
              className="w-full rounded-xl bg-white/15 text-white placeholder-white/50 border border-white/30 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 backdrop-blur-md p-3.5 text-base hover:bg-white/20"
              placeholder="+1 234 567 8900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Select Service
            </label>
            <select
              ref={service}
              required
              className="w-full rounded-xl bg-white/15 text-white border border-white/30 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 backdrop-blur-md p-3.5 text-base hover:bg-white/20 appearance-none cursor-pointer"
            >
              <option value="" disabled selected className="text-white/50 bg-gray-800">
                Choose a service
              </option>
              <option className="text-gray-900 bg-white" value="Website development">
                Website Development
              </option>
              <option className="text-gray-900 bg-white" value="Business Website">
                Business Website
              </option>
              <option className="text-gray-900 bg-white" value="Landing Page">
                Landing Page
              </option>
              <option className="text-gray-900 bg-white" value="Website Redesign">
                Website Redesign
              </option>
              <option className="text-gray-900 bg-white" value="Website Maintenance">
                Website Maintenance
              </option>
              <option className="text-gray-900 bg-white" value="Basic SEO">
                Basic SEO
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 backdrop-blur-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 mt-2"
        >
          Submit Request
        </button>

        <p className="text-white/60 text-xs text-center pt-2">
          We'll contact you within 24 hours
        </p>
      </form>
    </div>
  );
};