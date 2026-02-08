import React from 'react';

interface AdBannerProps {
  className?: string;
  variant?: 'compact' | 'horizontal';
  label?: string;
  title?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  className = "", 
  variant = 'horizontal',
  label = "Dream Global Pro Network",
  title = "Elite Membership"
}) => {
  const isCompact = variant === 'compact';

  return (
    <div className={`adsense-banner-slot ${isCompact ? 'h-[120px] sm:h-[180px]' : 'h-[100px] sm:h-[160px]'} bg-slate-900/40 rounded-[35px] border border-dashed border-indigo-500/20 flex flex-col items-center justify-center p-4 text-center group overflow-hidden relative shadow-2xl transition-all duration-500 hover:border-indigo-500/40 ${className}`} dir="ltr">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2500ms] ease-in-out"></div>
      
      <div className={`relative z-10 ${isCompact ? 'space-y-1' : 'space-y-3'}`}>
        <div className="flex items-center justify-center gap-2">
          <span className="w-1 h-1 bg-indigo-500 rounded-full animate-ping"></span>
          <span className="text-[8px] font-black text-indigo-400 uppercase tracking-[0.4em]">{label}</span>
        </div>
        
        <div className={`${isCompact ? 'text-xs sm:text-sm' : 'text-sm sm:text-lg'} font-black text-white uppercase tracking-tighter group-hover:scale-105 transition-transform duration-500`}>
          {isCompact ? 'Boost' : 'Boost your sales with'} <span className="text-indigo-500">{title}</span>
        </div>
        
        {!isCompact && (
          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest opacity-60">
            Featured listings reach up to 10x more verified buyers
          </p>
        )}
      </div>

      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-indigo-500/20 rounded-tl-sm"></div>
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-indigo-500/20 rounded-br-sm"></div>
    </div>
  );
};

export default AdBanner;