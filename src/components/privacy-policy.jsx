import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8 font-medium">Last Updated: May 2026</p>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>Jynetra</strong>. Your privacy is critically important to us. This Privacy Policy document outlines the types of personal information that is received and collected by Jynetra and how it is used.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">1. Information We Collect</h2>
            <p>
              When you visit our website or use our services, we may collect the following information:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><strong>Personal Details:</strong> Name, email address, and phone number provided via contact forms.</li>
              <li><strong>Project Data:</strong> Information regarding your business requirements and service requests.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, and pages visited to improve user experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">2. How We Use Your Information</h2>
            <p>We use the collected data for various purposes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>To provide and maintain our IT services.</li>
              <li>To notify you about changes to our services or project updates.</li>
              <li>To provide customer support and handle inquiries.</li>
              <li>To improve the performance and UI/UX of our digital tools.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">3. Data Security</h2>
            <p>
              The security of your data is important to us. We use modern encryption and secure architecture to protect your personal information. However, please remember that no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">4. Third-Party Services</h2>
            <p>
              We may employ third-party companies (such as hosting providers or analytics tools) to facilitate our service. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p><strong>Email:</strong> sachinkushawaha349@gmail.com</p>
              <p><strong>Phone:</strong> +91-9334167296</p>
              <p><strong>Location:</strong> India</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 pt-6 border-t border-gray-100 text-center text-gray-500 text-sm">
          &copy; 2026 Jynetra. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;