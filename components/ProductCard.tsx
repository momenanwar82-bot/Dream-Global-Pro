import React from 'react';
import { Product, Currency } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (e: React.MouseEvent) => void;
  currency: Currency;
  onShowToast?: (message: string, type?: 'success' | 'error') => void;
  currentUserEmail?: string;
  onDelete?: (productId: string) => void;
  showDeleteButton?: boolean; 
  onStartChat?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onClick, 
  isWishlisted = false, 
  onToggleWishlist,
  currency,
  onShowToast,
  currentUserEmail,
  onDelete,
  showDeleteButton = false,
  onStartChat
}) => {
  const rate = currency?.rate || 1;
  const symbol = currency?.symbol || '$';
  const convertedPrice = Math.round(product.price * rate);
  
  const isOwner = currentUserEmail && product.sellerEmail && currentUserEmail === product.sellerEmail;
  const canDelete = showDeleteButton && isOwner;

  const handleChatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onStartChat) onStartChat(product);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    let digits = product.phoneNumber.replace(/\D/g, '');
    const message = encodeURIComponent(`Hi, I'm interested in: ${product.title}`);
    window.open(`https://wa.me/${digits}?text=${message}`, '_blank');
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onDelete) return;
    const confirmDelete = window.confirm("Are you sure? This listing will be permanently removed.");
    if (confirmDelete) onDelete(product.id);
  };

  const handleShareClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = window.location.origin + window.location.pathname;
    const shareData = {
      title: `Bazaar: ${product.title}`,
      text: `🔥 Check out this deal: ${product.title} on Bazaar!\n💰 Price: ${convertedPrice.toLocaleString()} ${symbol}`,
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') console.error("Share failed");
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        onShowToast?.("Link copied!", "success");
      } catch (err) {
        onShowToast?.("Failed to copy link.", "error");
      }
    }
  };

  return (
    <div 
      onClick={onClick}
      className="group bg-gradient-to-br from-indigo-950/80 via-indigo-900/30 to-slate-950/90 rounded-[35px] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full active:scale-[0.98] relative text-left backdrop-blur-sm"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-indigo-950/50 flex items-center justify-center">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[1.05]"
          loading="lazy"
        />
        
        {canDelete && (
          <button
            onClick={handleDeleteClick}
            className="absolute top-4 right-4 p-3 rounded-full bg-red-600 shadow-2xl border border-white/20 z-30 hover:bg-red-500 hover:scale-110 active:scale-90 transition-all flex items-center justify-center"
          >
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}

        <button
          onClick={onToggleWishlist}
          className={`absolute top-4 left-4 p-2.5 rounded-xl backdrop-blur-xl transition-all z-10 border ${
            isWishlisted ? 'bg-red-500 text-white border-red-400' : 'bg-black/40 text-white/70 border-white/10 hover:bg-black/60'
          }`}
        >
          <svg className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-lg text-[9px] font-black uppercase tracking-[0.2em]">
            {product.category}
          </span>
        </div>

        <div className="mb-4 text-left">
          <h3 className="text-sm font-bold text-white uppercase tracking-tight line-clamp-1 mb-1">
            {product.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors">
              {convertedPrice.toLocaleString()} {symbol}
            </span>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <button 
            onClick={handleChatClick}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-[11px] font-black flex items-center justify-center gap-2 transition-all shadow-xl active:scale-95 border border-white/10 uppercase tracking-widest"
          >
            Contact Now
          </button>
          
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={handleWhatsAppClick}
              className="py-3 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 rounded-2xl text-[10px] font-black flex items-center justify-center gap-1.5 transition-all border border-emerald-500/20 uppercase tracking-widest"
            >
              WhatsApp
            </button>
            <button 
              onClick={handleShareClick}
              className="py-3 bg-white/5 hover:bg-white/10 text-slate-400 rounded-2xl text-[10px] font-black flex items-center justify-center gap-1.5 transition-all border border-white/5 uppercase tracking-widest"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;