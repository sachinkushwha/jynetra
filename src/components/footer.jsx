export const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, index) => (
          <ul key={index}>
            <li className="text-xl font-semibold mb-2">Contact Us</li>
            <li>Email: contact@jynetra.com</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Location: India</li>
          </ul>
        ))}
      </div>

      <div className="mt-10 border-t border-cyan-400 pt-4 text-center text-sm sm:text-base">
        <p>© 2025 <span className="font-semibold">Jynetra</span>. All rights reserved.</p>
        <p className="mt-1">Developed by <span className="font-semibold">Sachin Kushwaha</span></p>
      </div>
    </footer>
  );
};
