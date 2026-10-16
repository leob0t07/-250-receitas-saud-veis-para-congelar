import React, { useState } from 'react';
import { X, Check, ShieldCheck, Lock, QrCode, CreditCard, Copy, ExternalLink, Settings } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: {
    name: string;
    price: string;
    link?: string;
  };
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState<boolean>(false);
  const [customCheckoutUrl, setCustomCheckoutUrl] = useState<string>('');
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const fakePixCode = "00020126580014BR.GOV.BCB.PIX0136receitas-congelar-pix@pagamento.com.br520400005303986540529.905802BR5925RECEITAS SAUDAVEIS LTDA6009SAO PAULO62070503***6304E8A2";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(fakePixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const isPremium = selectedPlan.name.toLowerCase().includes('premium') || selectedPlan.price.includes('29');
  const caktoUrl = selectedPlan.link || (isPremium ? 'https://pay.cakto.com.br/ttadqb9' : 'https://pay.cakto.com.br/xtrakpo_953780');

  const handleOpenDirectCheckout = () => {
    const targetUrl = customCheckoutUrl.trim() || caktoUrl;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto font-poppins">
      <div className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8">
        {/* Modal Header */}
        <div className="bg-emerald-700 text-white p-4 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[11px] font-montserrat font-black uppercase tracking-wider text-emerald-200 block">
              Checkout Seguro 100% Criptografado
            </span>
            <h3 className="font-montserrat text-lg sm:text-xl font-black text-white">
              {selectedPlan.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar checkout"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Top Summary Banner */}
        <div className="bg-emerald-50 px-4 sm:px-6 py-2.5 sm:py-3 border-b border-emerald-100 flex items-center justify-between">
          <span className="text-xs font-montserrat font-bold text-slate-700">Total a pagar:</span>
          <span className="text-lg sm:text-xl font-montserrat font-black text-emerald-800 tabular-nums">{selectedPlan.price}</span>
        </div>

        <div className="p-4 sm:p-6">
          {/* Direct Cakto Checkout Button */}
          <a
            href={caktoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-gold w-full py-3.5 px-4 rounded-xl font-montserrat font-black text-xs sm:text-sm text-neutral-950 uppercase tracking-wider flex items-center justify-center gap-2 shadow-md no-underline mb-4 text-center cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Ir Para Checkout Oficial Cakto ({selectedPlan.price})</span>
          </a>
          {/* Success State */}
          {isSuccess ? (
            <div className="py-6 sm:py-8 text-center space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-montserrat text-xl sm:text-2xl font-black text-slate-900">
                Pagamento Confirmado com Sucesso!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto font-medium">
                Seus dados de acesso ao acervo de <strong>+250 Receitas Saudáveis para Congelar</strong> foram enviados para seu e-mail e WhatsApp.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-montserrat font-extrabold text-xs sm:text-sm py-3 px-6 rounded-xl cursor-pointer"
                >
                  Concluir e Acessar E-book
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Payment Tabs: PIX or Credit Card */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-2.5 sm:p-3 rounded-xl border text-[11px] sm:text-xs md:text-sm font-montserrat font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all min-h-[44px] ${
                    paymentMethod === 'pix'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-2xs'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PIX (Acesso Imediato)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 sm:p-3 rounded-xl border text-[11px] sm:text-xs md:text-sm font-montserrat font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all min-h-[44px] ${
                    paymentMethod === 'card'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-2xs'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>

              {/* PIX View */}
              {paymentMethod === 'pix' && (
                <div className="space-y-3.5 text-center">
                  <div className="bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col items-center">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 bg-white p-2 rounded-xl border border-slate-300 shadow-2xs flex items-center justify-center">
                      <div className="w-full h-full border-2 border-dashed border-emerald-600 flex flex-col items-center justify-center text-slate-800">
                        <QrCode className="w-20 h-20 sm:w-24 sm:h-24 text-emerald-700" />
                        <span className="text-[9px] font-bold text-slate-500 uppercase mt-1">QR Code PIX</span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-600 font-medium mt-2">
                      Abra o app do seu banco, escolha <strong>Pagar via PIX</strong> e aponte a câmera.
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-montserrat font-bold text-slate-700 mb-1 text-left">
                      Ou utilize o Código PIX Copia e Cola:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value={fakePixCode}
                        className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-2.5 py-2 text-[11px] font-mono text-slate-600 truncate focus:outline-hidden"
                      />
                      <button
                        onClick={handleCopyPix}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-montserrat font-extrabold px-3 py-2 rounded-xl flex items-center gap-1 cursor-pointer shrink-0 transition-colors"
                      >
                        {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSuccess(true)}
                    className="btn-cta-gold w-full py-3.5 rounded-xl font-montserrat font-black text-xs sm:text-sm text-neutral-950 uppercase tracking-wider cursor-pointer shadow-md mt-2 min-h-[46px]"
                  >
                    Simular Confirmação do PIX
                  </button>
                </div>
              )}

              {/* Card View */}
              {paymentMethod === 'card' && (
                <form onSubmit={handleSimulatePayment} className="space-y-3 text-left">
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:outline-hidden font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                        Validade
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/AA"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:outline-hidden font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:outline-hidden font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-700 mb-1">
                      Nome Impresso no Cartão
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nome completo"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-emerald-600 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-cta-gold w-full py-3.5 rounded-xl font-montserrat font-black text-xs sm:text-sm text-neutral-950 uppercase tracking-wider cursor-pointer shadow-md mt-2 min-h-[46px]"
                  >
                    Confirmar Pagamento de {selectedPlan.price}
                  </button>
                </form>
              )}

              {/* Kiwify / Hotmart Direct Link Setup */}
              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowConfig(prev => !prev)}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-700 font-semibold cursor-pointer"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Configurar Link Direto da Kiwify / Hotmart</span>
                </button>

                {showConfig && (
                  <div className="mt-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <label className="block text-[10px] sm:text-[11px] font-bold text-slate-600">
                      Cole a URL do seu Checkout Externo:
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="url"
                        placeholder="https://pay.kiwify.com.br/seu-link"
                        value={customCheckoutUrl}
                        onChange={(e) => setCustomCheckoutUrl(e.target.value)}
                        className="flex-1 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs focus:outline-hidden font-mono"
                      />
                      <button
                        type="button"
                        onClick={handleOpenDirectCheckout}
                        className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-montserrat font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Abrir Link</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Footer Security Badges */}
          <div className="mt-4 pt-2.5 flex items-center justify-center gap-4 text-[11px] text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Garantia 30 Dias
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              SSL 256 Bits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
