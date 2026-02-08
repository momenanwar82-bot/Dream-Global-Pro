import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenContact: () => void;
  onOpenSell: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenContact, onOpenSell }) => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 sm:py-20 mt-10" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8 text-left">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3 justify-start">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-xl font-black text-white uppercase tracking-tight">Dream Global Pro</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The leading platform to buy and sell cars, phones, and luxury goods globally. We provide a secure environment for direct connection between buyers and sellers in your region through Dream Global Pro technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Home</button></li>
              <li><button onClick={onOpenSell} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Post Ad</button></li>
              <li><button className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Elite Membership</button></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">Support</h4>
            <ul className="space-y-3">
              <li><button onClick={onOpenContact} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Contact Us</button></li>
              <li><button onClick={onOpenPrivacy} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Privacy Policy</button></li>
              <li><button onClick={onOpenTerms} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          {/* Social / Extra */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848s.012-3.584.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.338-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.337-2.617-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
            All Rights Reserved &copy; {new Date().getFullYear()} Dream Global Pro Elite Market
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;