"use client";

import React, { useRef, useState, useEffect } from "react";

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (signatureDataUrl: string, signerName: string) => void;
  title: string;
  defaultName?: string;
}

export function SignatureModal({
  isOpen,
  onClose,
  onSave,
  title,
  defaultName = "",
}: SignatureModalProps) {
  const [tab, setTab] = useState<"draw" | "type">("draw");
  const [signerName, setSignerName] = useState(defaultName);
  const [typedFont, setTypedFont] = useState<"cursive" | "serif" | "sans">("cursive");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    if (defaultName) setSignerName(defaultName);
  }, [defaultName]);

  // Set up canvas when modal opens
  useEffect(() => {
    if (isOpen && tab === "draw") {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.strokeStyle = "#0f172a";
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    }
  }, [isOpen, tab]);

  if (!isOpen) return null;

  // Drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  // Generate data URL for typed signature
  const createTypedSignatureDataUrl = (text: string): string => {
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = 400;
    tempCanvas.height = 120;
    const ctx = tempCanvas.getContext("2d");
    if (!ctx) return "";

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    ctx.fillStyle = "#0f172a";
    let fontStyle = "italic 38px 'Brush Script MT', 'Dancing Script', cursive";
    if (typedFont === "serif") fontStyle = "italic 32px Georgia, serif";
    if (typedFont === "sans") fontStyle = "bold italic 30px 'Segoe UI', sans-serif";
    ctx.font = fontStyle;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 200, 60);

    return tempCanvas.toDataURL("image/png");
  };

  const handleApply = () => {
    if (tab === "draw") {
      const canvas = canvasRef.current;
      if (!canvas || !hasDrawn) {
        alert("Please draw your signature first or switch to Type Signature.");
        return;
      }
      const dataUrl = canvas.toDataURL("image/png");
      onSave(dataUrl, signerName || "Signer");
      onClose();
    } else {
      if (!signerName.trim()) {
        alert("Please enter a signer name.");
        return;
      }
      const dataUrl = createTypedSignatureDataUrl(signerName.trim());
      onSave(dataUrl, signerName.trim());
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden text-left">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-base">✍️</span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
              {title}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white text-lg leading-none p-1 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Signer Name Input */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-600 uppercase tracking-wider mb-1">
              Full Legal Name
            </label>
            <input
              type="text"
              value={signerName}
              onChange={(e) => setSignerName(e.target.value)}
              placeholder="e.g. Michael Jenkins"
              className="w-full px-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950"
            />
          </div>

          {/* Draw / Type Tabs */}
          <div className="flex rounded-lg bg-zinc-100 p-1 border border-zinc-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setTab("draw")}
              className={`flex-1 py-1.5 rounded-md transition cursor-pointer ${
                tab === "draw" ? "bg-white text-zinc-950 shadow-2xs font-bold" : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              Draw Signature
            </button>
            <button
              type="button"
              onClick={() => setTab("type")}
              className={`flex-1 py-1.5 rounded-md transition cursor-pointer ${
                tab === "type" ? "bg-white text-zinc-950 shadow-2xs font-bold" : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              Type Signature
            </button>
          </div>

          {tab === "draw" ? (
            <div>
              <div className="relative border border-zinc-300 rounded-xl bg-zinc-50 overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={380}
                  height={130}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-32 cursor-crosshair touch-none bg-white"
                />
                {!hasDrawn && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-xs text-zinc-400 font-medium">
                    Sign with finger or mouse here
                  </div>
                )}
              </div>
              <div className="mt-2 flex justify-between items-center text-xs text-zinc-500">
                <span>Draw on screen</span>
                <button
                  type="button"
                  onClick={clearCanvas}
                  className="text-red-600 hover:underline cursor-pointer font-medium"
                >
                  Clear Drawing
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-5 rounded-xl border border-zinc-300 bg-white flex items-center justify-center min-h-[120px]">
                <p
                  className={`text-2xl text-zinc-950 truncate ${
                    typedFont === "cursive"
                      ? "italic font-serif tracking-wide"
                      : typedFont === "serif"
                      ? "font-serif italic"
                      : "font-sans font-bold italic"
                  }`}
                >
                  {signerName || "Your Signature Preview"}
                </p>
              </div>
              <div className="flex gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setTypedFont("cursive")}
                  className={`px-3 py-1 rounded border text-xs font-serif italic ${
                    typedFont === "cursive" ? "bg-zinc-900 text-white border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  }`}
                >
                  Script
                </button>
                <button
                  type="button"
                  onClick={() => setTypedFont("serif")}
                  className={`px-3 py-1 rounded border text-xs font-serif ${
                    typedFont === "serif" ? "bg-zinc-900 text-white border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  }`}
                >
                  Classic Serif
                </button>
                <button
                  type="button"
                  onClick={() => setTypedFont("sans")}
                  className={`px-3 py-1 rounded border text-xs font-sans ${
                    typedFont === "sans" ? "bg-zinc-900 text-white border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  }`}
                >
                  Modern
                </button>
              </div>
            </div>
          )}

          {/* Legal Notice */}
          <p className="text-[10px] text-zinc-400 leading-relaxed">
            By clicking &ldquo;Apply e-Signature&rdquo;, you agree this digital signature has the same legal validity as a handwritten signature under the US ESIGN Act.
          </p>

          {/* Actions */}
          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-zinc-200 hover:bg-zinc-50 text-xs font-semibold text-zinc-700"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApply}
              style={{ color: "#ffffff", backgroundColor: "#059669" }}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold transition shadow-sm"
            >
              Apply e-Signature →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
