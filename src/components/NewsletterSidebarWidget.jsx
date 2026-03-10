export default function NewsletterSidebarWidget() {
  return (
    <div className="bg-[#B9C1B3]/10 border border-[#B9C1B3]/30 p-5 shadow-sm">
      <h3 className="text-[15px] font-bold text-[var(--gw-primary)] mb-3 tracking-widest uppercase">
        Newsletter
      </h3>
      
      <form 
        action="YOUR_BREVO_FORM_ACTION_URL"
        method="POST" 
        target="_blank" 
      >
        <div className="flex flex-col gap-2">
          <input 
            type="email" 
            name="EMAIL"
            placeholder="Email Address" 
            required 
            className="w-full px-4 py-2.5 text-[13px] border border-gray-200 focus:outline-none focus:border-[var(--gw-primary)] transition-all bg-white rounded-none"
          />
          <button 
            type="submit" 
            className="w-full bg-[var(--gw-primary)] text-[var(--gw-gold)] text-[11px] font-bold uppercase tracking-widest py-3 hover:bg-[var(--gw-blue)] hover:text-white transition-all rounded-none"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
