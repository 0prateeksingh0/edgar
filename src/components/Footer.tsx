export default function Footer() {
    return (
      <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white px-6 py-10 md:px-20 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
  
          {/* Logo & tagline */}
          <div className="space-y-4">
            <img src="/src/assets/Logo1.svg" alt="Edgar Logo" className="mx-auto md:mx-0 w-20 md:w-24" />
            <p className="text-sm leading-relaxed">Transforming Transactions - Empowering Businesses</p>
          </div>
  
          {/* Useful Links */}
          <div>
            <h4 className="font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Design Services</li>
              <li>Products</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Need Help */}
          <div>
            <h4 className="font-semibold mb-3">Need Help?</h4>
            <ul className="space-y-2 text-sm">
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Support</li>
              <li>Terms</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Whatsapp</li>
            </ul>
          </div>
  
          {/* Address */}
          <div className="text-sm space-y-3">
            <h4 className="font-semibold mb-1">Address</h4>
            <p>Head office<br/> Casa Maria, Bengaluru</p>
            <p>Branch office<br/> Mangalore - K.S.Rao Road</p>
            <p>📞 +91 9008010671 / +91 7411503007</p>
            <p>📧 sales@edgarinteractive.in<br/> balaji@edgarinteractive.com</p>
          </div>
        </div>
  
        {/* Footer bottom */}
        <div className="mt-10 text-xs text-gray-300 text-center">
          © 2003. Edgar Interactive. All Rights Reserved
        </div>
      </footer>
    );
  }
  