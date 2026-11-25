"use client";

import React, { useState } from "react";

interface ClientEsignModalProps {
  isOpen: boolean;
  onClose: () => void;
  contractorName: string;
  clientName: string;
  clientEmail: string;
  estimateNumber: string;
  grandTotal: number;
  tradeName: string;
  onSignNow: () => void;
}

export function ClientEsignModal({
  isOpen,
  onClose,
  contractorName,
  clientName,
  clientEmail,
  estimateNumber,
  grandTotal,
  tradeName,
  onSignNow,
}: ClientEsignModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalFormatted = `$${grandTotal.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  const messageText = `Hi ${clientName || "there"}, this is ${contractorName || "your contractor"}. Your itemized estimate #${estimateNumber || "EST-1042"} for ${tradeName} (${totalFormatted}) is ready for your review and digital e-signature acceptance. Let me know if you have any questions!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const emailSubject = encodeURIComponent(
    `Estimate #${estimateNumber || "Quote"} from ${contractorName || "Contractor"} (${tradeName})`
  );
  const emailBody = encodeURIComponent(
    `Hello ${clientName || "Client"},\n\nPlease find your itemized quote for ${tradeName} totaling ${totalFormatted}.\n\nEstimate #: ${estimateNumber}\nContractor: ${contractorName}\nTotal Amount: ${totalFormatted}\n\nKindly review the attached proposal. You may digitally sign or reply with approval to lock in your project schedule.\n\nThank you,\n${contractorName}`
  );
  const mailtoUrl = `mailto:${clientEmail || ""}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(messageText)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden text-left">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="text-emerald-400 text-lg">✍️</span>
            <div>
              <p className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                Client e-Signature & Proposal Dispatch
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white text-lg leading-none p-1 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Quick Summary Card */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                Estimate #{estimateNumber}
              </span>
              <p className="text-sm font-bold text-emerald-950 mt-0.5">
                Client: {clientName || "Valued Client"}
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-emerald-700 block uppercase font-bold">Total Bid</span>
              <span className="text-base font-mono font-black text-emerald-950">{totalFormatted}</span>
            </div>
          </div>

          {/* Option 1: In-Person Sign Now */}
          <div className="p-4 rounded-xl border border-zinc-300 bg-zinc-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-zinc-950 flex items-center gap-1.5">
                <span>📱 In-Person Client e-Signature</span>
                <span className="text-[9px] bg-emerald-600 text-white font-mono px-1.5 py-0.2 rounded font-bold">
                  FASTEST
                </span>
              </p>
              <p className="text-[11px] text-zinc-600 mt-0.5">
                With your client on site? Have them draw or type their acceptance on this screen right now.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSignNow();
              }}
              style={{ color: "#ffffff", backgroundColor: "#059669" }}
              className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold shrink-0 transition shadow-sm cursor-pointer"
            >
              e-Sign Now →
            </button>
          </div>

          {/* Option 2: Dispatch via SMS / Email */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-600 uppercase tracking-wider mb-1.5">
              SMS / WhatsApp / Email Dispatch Message
            </label>
            <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-zinc-800 leading-relaxed font-sans relative">
              <p>{messageText}</p>
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="py-2 px-3 rounded-lg border border-zinc-300 hover:bg-zinc-50 text-xs font-semibold text-zinc-800 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copied ? <span className="text-emerald-600 font-bold">✓ Copied!</span> : <span>📋 Copy Message</span>}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-xs font-bold text-emerald-900 transition flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <span>💬 WhatsApp</span>
              </a>

              <a
                href={mailtoUrl}
                className="py-2 px-3 rounded-lg border border-zinc-300 hover:bg-zinc-50 text-xs font-semibold text-zinc-800 transition flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <span>✉️ Open Email</span>
              </a>
            </div>
          </div>

          {/* Notice */}
          <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
            <span>Legally binding under US ESIGN Act</span>
            <button
              type="button"
              onClick={onClose}
              className="text-zinc-500 hover:text-zinc-950 font-medium cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
