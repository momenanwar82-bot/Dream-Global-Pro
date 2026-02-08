import React from 'react';

interface LegalModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<LegalModalProps> = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
    <div className="bg-slate-900 w-full max-w-2xl rounded-[32px] shadow-2xl border border-slate-800 overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[85vh]">
      <div className="flex justify-between items-center p-6 border-b border-slate-800 shrink-0">
        <h2 className="text-xl font-black text-white uppercase tracking-tight">{title}</h2>
        <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-8 overflow-y-auto custom-scrollbar text-slate-400 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  </div>
);

export const TermsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <ModalWrapper title="Terms & Conditions" onClose={onClose}>
    <div className="space-y-6">
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">1. Marketplace Integrity & Synchronization</h3>
        <p>Dream Global Pro operates on a high-frequency synchronization engine. By publishing a listing, you initiate an immediate global broadcast. To maintain the prestige of our marketplace, <span className="text-indigo-400 font-bold">deletion is absolute</span>—all data is purged from our active high-availability clusters instantly upon request.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">2. Automated Quality Governance</h3>
        <p>To preserve the elite visual standard of Dream Global Pro, all submissions undergo processing via <span className="text-indigo-400 font-bold">Proprietary Vision Systems</span>. These algorithms automatically categorize items and generate high-conversion descriptions. Dream Global Pro reserves the right to restrict listings that do not meet our automated quality and safety benchmarks.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">3. Merchant Conduct</h3>
        <p>Engagement on this platform is a privilege reserved for professional and verified sellers. We facilitate direct interaction but require all users to adhere to international trade laws. The listing of prohibited items results in immediate and permanent account revocation from the Dream Global Pro ecosystem.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">4. Financial Responsibility</h3>
        <p>Dream Global Pro provides the gateway for connection; however, final transaction fulfillment and tax compliance remain the sole responsibility of the merchant and buyer. We recommend using our secure "Dream Global Pro Verified" channels for all high-value asset exchanges.</p>
      </section>
    </div>
  </ModalWrapper>
);

export const PrivacyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <ModalWrapper title="Privacy Policy" onClose={onClose}>
    <div className="space-y-6">
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Data Sovereignty & Encryption</h3>
        <p>Your personal identifiers—including contact information and merchant metadata—are secured within our <span className="text-indigo-400 font-bold">Encrypted Cloud Architecture</span>. We employ enterprise-grade security protocols to ensure your data is shielded from unauthorized access at every touchpoint within Dream Global Pro.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Automated Algorithmic Decision-Making</h3>
        <p>Dream Global Pro utilizes <span className="text-indigo-400 font-bold">Advanced Neural Networks</span> to facilitate categorization and content optimization. These automated processes are designed to enhance your listing's performance. By using the service, you acknowledge that certain descriptive attributes are generated via these proprietary intelligence models to ensure marketplace consistency.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Temporal Data Lifecycle</h3>
        <p>We adhere to a strict <span className="text-indigo-400 font-bold">Data Minimization Principle</span>. Active listings remain in high-priority caches for the duration of the sale. Inactive account data is systematically sunsetted after 24 months of dormancy to ensure your digital footprint remains clean and secure.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Cookie & Session Tokenization</h3>
        <p>Our platform utilizes secure, encrypted session tokens to maintain your login state and facilitate the "Sync" functionality. We do not engage in cross-site behavioral tracking or the sale of browsing history to external marketing syndicates.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Global Jurisdictional Compliance</h3>
        <p>Dream Global Pro is designed to respect the spirit of global privacy standards (including GDPR and CCPA). Users maintain the absolute right to access their data, request portability, or initiate a <span className="text-red-500 font-bold">Total Purge</span> of their records at any time through the Account Dashboard.</p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Minor Safety Standards</h3>
        <p>Dream Global Pro is an elite professional marketplace. Access is strictly limited to individuals aged 18 and above. Our proprietary safety filters actively monitor for and remove content that violates minor safety regulations or platform age requirements.</p>
      </section>
    </div>
  </ModalWrapper>
);

export const ContactModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <ModalWrapper title="Concierge Support" onClose={onClose}>
    <div className="space-y-8 text-center py-4">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-indigo-600/20 text-indigo-400 rounded-3xl flex items-center justify-center mb-4 border border-indigo-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-white uppercase tracking-tight">Executive Liaison</h3>
        <p className="text-indigo-400 font-bold mt-1">momen_anwar_82@gmail.com</p>
        <p className="text-slate-500 text-xs mt-2 max-w-xs mx-auto">Our dedicated support desk provides professional oversight for all high-value merchant inquiries at Dream Global Pro.</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-emerald-600/20 text-emerald-400 rounded-3xl flex items-center justify-center mb-4 border border-emerald-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-white uppercase tracking-tight">Technical Direct Line</h3>
        <p className="text-emerald-400 font-bold mt-1">+20 121 287 7847</p>
        <p className="text-slate-500 text-xs mt-2">Direct secure line for urgent merchant assistance and Dream Global Pro platform synchronization support.</p>
      </div>
    </div>
  </ModalWrapper>
);