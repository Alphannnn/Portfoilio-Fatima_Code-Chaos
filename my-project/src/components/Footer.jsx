import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 mt-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <h2 className="text-2xl lg:text-1xl  font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent text-center md:text-left">
            Fatima_Code&Chaos
          </h2>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-purple-200">
              Connect
            </h3>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                className="text-gray-700 hover:text-violet-400 transition-colors"
                target="_blank"
                href="https://www.linkedin.com/in/fatima-naeem-ul-haq-251406264/"
                rel="noreferrer"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>

              <a
                className="text-gray-700 hover:text-violet-400 transition-colors"
                target="_blank"
                href="https://www.instagram.com/fatima_codenchaos/?hl=en"
                rel="noreferrer"
              >
                <FiInstagram className="w-5 h-5" />
              </a>

              <a
                className="text-gray-700 hover:text-violet-400 transition-colors"
                target="_blank"
                href="https://github.com/Alphannnn"
                rel="noreferrer"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Fatima_Code&Chaos. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              className="text-gray-500 hover:text-white text-sm transition-colors"
              href="#"
            >
              Privacy Policy
            </a>

            <a
              className="text-gray-500 hover:text-white text-sm transition-colors"
              href="#"
            >
              Terms of Service
            </a>

            <a
              className="text-gray-500 hover:text-white text-sm transition-colors"
              href="#"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
