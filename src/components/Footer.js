import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Yellow Info Bar */}
      <div className="bg-yellow-400 text-black py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="font-bold">0345 512 0024</p>
                <p className="text-sm">Need Help or Advice?</p>
              </div>
            </div>

            {/* Made in Britain */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <div>
                <p className="font-bold">Made In Britain</p>
                <p className="text-sm">Quality UK Products</p>
              </div>
            </div>

            {/* NBF Approved */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-bold">NBF Approved Products</p>
                <p className="text-sm">Highest UK Standards</p>
              </div>
            </div>

            {/* Warranty */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="font-bold">5 Year Warranty</p>
                <p className="text-sm">Extra peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Link */}
      <div className="bg-white py-2 text-center">
        <button 
          onClick={scrollToTop}
          className="text-black text-sm hover:text-yellow-500 transition-colors"
        >
          Back to top
        </button>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Categories */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#divan-sets" className="hover:text-yellow-400 transition-colors text-sm">Ottoman Divan Sets</a></li>
                <li><a href="#bed-frames" className="hover:text-yellow-400 transition-colors text-sm">Ottoman Bed Frames</a></li>
                <li><a href="#mattresses" className="hover:text-yellow-400 transition-colors text-sm">Mattresses</a></li>
                <li><a href="#headboards" className="hover:text-yellow-400 transition-colors text-sm">Headboards</a></li>
                <li><a href="#storage-boxes" className="hover:text-yellow-400 transition-colors text-sm">Ottoman Storage Boxes</a></li>
                <li><a href="#recycling" className="hover:text-yellow-400 transition-colors text-sm">Mattress Recycling</a></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Information</h3>
              <ul className="space-y-2">
                <li><a href="#contact" className="hover:text-yellow-400 transition-colors text-sm">Contact us</a></li>
                <li><a href="#about" className="hover:text-yellow-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#delivery" className="hover:text-yellow-400 transition-colors text-sm">Delivery Information</a></li>
                <li><a href="#nbf" className="hover:text-yellow-400 transition-colors text-sm">NBF Approved Beds</a></li>
                <li><a href="#tension" className="hover:text-yellow-400 transition-colors text-sm">Mattress Tension Buying Guide</a></li>
                <li><a href="#making" className="hover:text-yellow-400 transition-colors text-sm">How We Make Our Beds</a></li>
                <li><a href="#privacy" className="hover:text-yellow-400 transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#size" className="hover:text-yellow-400 transition-colors text-sm">Size Guide</a></li>
                <li><a href="#terms" className="hover:text-yellow-400 transition-colors text-sm">Terms and Conditions</a></li>
                <li><a href="#blog" className="hover:text-yellow-400 transition-colors text-sm">Blog</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Newsletter</h3>
              <p className="text-sm mb-4">
                Sign up for exclusive offers, original stories, events and more.
              </p>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-2 text-black rounded-lg pr-12 outline-none"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
                >
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Head Office */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Head Office</h3>
              <div className="space-y-3 text-sm">
                <p>Online Sales Group Ltd T/A OttomanBedStore.co.uk</p>
                <p>Jupiter House</p>
                <p>Shrewsbury Business Park</p>
                <p>Shrewsbury</p>
                <p>SY2 6LG</p>
                <p className="pt-2">Company Reg: 16288494</p>
                <p>VAT No: 487940241</p>
                
                <div className="flex items-center gap-2 pt-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0345 512 0024</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@ottomanbedstore.co.uk</span>
                </div>

                <p className="pt-2">Mon - Fri: 9am - 5pm</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">AMEX</div>
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Apple Pay</div>
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Google Pay</div>
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Klarna</div>
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Shop Pay</div>
              <div className="bg-white px-4 py-2 rounded text-black font-bold text-xs">Visa</div>
            </div>

            <div className="text-center text-sm text-gray-400">
              © 2025 Ottoman Bed Store.
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full shadow-2xl animate-pulse hover:animate-none hover:scale-110 transition-transform cursor-pointer">
          <div className="flex items-center gap-2">
            <span>Extra 20% OFF Today</span>
            <span>🔥</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

