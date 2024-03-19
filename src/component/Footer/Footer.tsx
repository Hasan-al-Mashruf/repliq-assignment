const Footer = () => {
  return (
    <footer className="bg-gray text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
