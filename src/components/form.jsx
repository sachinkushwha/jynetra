import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export const Form = () => {
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const mobile = useRef();
  const service = useRef();
  const [loading, setLoading] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const CHAT_ID = import.meta.env.VITE_CHAT_ID;
    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: `🚀 New Project Inquiry:\n\n👤 Name: ${name.current.value}\n📧 Email: ${email.current.value}\n📱 Phone: ${mobile.current.value}\n🛠 Service: ${service.current.value}`,
        }),
      });

      const data = await response.json();
      if (data.ok) {
        // Aap yahan SweetAlert ya Custom Toast bhi use kar sakte hain
        alert("Success! Your request has been sent.");
        navigate("/");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#111827]/5">
        
        {/* Left Side: Contact Info (Dark Section) */}
        <div className="md:w-2/5 bg-[#111827] p-10 md:p-14 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">Let's build something <span className="text-[#2563EB]">great.</span></h2>
            <p className="text-gray-400 mb-10 text-lg">Have a project in mind? Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-6">
              {/* <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-[#2563EB]"><Mail size={20}/></div>
                <span className="text-gray-300">support@jynetra.com</span>
              </div> */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-[#2563EB]"><Phone size={20}/></div>
                <span className="text-gray-300">+91 9334167296</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-[#2563EB]"><MapPin size={20}/></div>
                <span className="text-gray-300">Bihar, India</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-2 text-[#F97316] font-bold">
            <CheckCircle size={18} />
            <span className="text-sm tracking-widest uppercase">Trusted Service</span>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form onSubmit={handlesubmit} className="md:w-3/5 p-10 md:p-14 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111827]">Full Name</label>
              <input
                type="text"
                ref={name}
                required
                placeholder="Deepak Kumar"
                className="w-full bg-[#F3F4F6] border-2 border-transparent focus:border-[#2563EB] focus:bg-white rounded-xl p-4 transition-all outline-none text-[#111827]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111827]">Email Address</label>
              <input
                type="email"
                ref={email}
                required
                placeholder="deepak@example.com"
                className="w-full bg-[#F3F4F6] border-2 border-transparent focus:border-[#2563EB] focus:bg-white rounded-xl p-4 transition-all outline-none text-[#111827]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#111827]">Mobile Number</label>
            <input
              type="tel"
              ref={mobile}
              required
              placeholder="+91 00000 00000"
              className="w-full bg-[#F3F4F6] border-2 border-transparent focus:border-[#2563EB] focus:bg-white rounded-xl p-4 transition-all outline-none text-[#111827]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-[#111827]">Required Service</label>
            <select
              ref={service}
              required
              className="w-full bg-[#F3F4F6] border-2 border-transparent focus:border-[#2563EB] focus:bg-white rounded-xl p-4 transition-all outline-none text-[#111827] appearance-none cursor-pointer"
            >
              <option value="" disabled selected>Select a service...</option>
              <option value="Website development">Website Development</option>
              <option value="Business Website">Business Website</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Website Redesign">Website Redesign</option>
              <option value="Basic SEO">Basic SEO</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-extrabold text-white flex items-center justify-center gap-3 transition-all shadow-lg ${
              loading 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-[#F97316] hover:bg-[#ea580c] hover:shadow-[#F97316]/30 hover:-translate-y-1"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <Send size={20} />}
          </button>

          <p className="text-center text-xs text-gray-400 font-medium">
            By submitting this form, you agree to our privacy policy.
          </p>
        </form>
      </div>
    </div>
  );
};