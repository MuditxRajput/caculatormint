"use client";

import React, { useState, useRef, useEffect } from "react";
import type { TradeConfig, LineItem } from "@/data/trades";
import { ProOnboardingModal } from "@/components/ProOnboardingModal";
import { SignatureModal } from "@/components/SignatureModal";
import { ClientEsignModal } from "@/components/ClientEsignModal";
import { useProStatus } from "@/lib/pro";

interface EstimateBuilderProps {
  trade: TradeConfig;
}

export function EstimateBuilder({ trade }: EstimateBuilderProps) {
  // Mobile active tab: 'edit' | 'preview'
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

  // Contractor state
  const [contractorName, setContractorName] = useState("Apex Trades LLC");
  const [contractorPhone, setContractorPhone] = useState("(555) 234-5678");
  const [contractorEmail, setContractorEmail] = useState("bids@apextrades.com");
  const [contractorLicense, setContractorLicense] = useState("Licensed & Insured #CT-88941");

  // Client state
  const [clientName, setClientName] = useState("Sarah & Michael Jenkins");
  const [clientAddress, setClientAddress] = useState("1428 Oakridge Blvd, Austin, TX 78704");
  const [clientEmail, setClientEmail] = useState("s.jenkins@example.com");

  // Meta state
  const today = new Date().toISOString().split("T")[0];
  const thirtyDaysOut = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const [estimateNumber, setEstimateNumber] = useState("EST-1042");
  const [estimateDate, setEstimateDate] = useState(today);
  const [validUntil, setValidUntil] = useState(thirtyDaysOut);

  // Document Type Switcher: Estimate vs Invoice
  const [docType, setDocType] = useState<"estimate" | "invoice">("estimate");
  const [paymentDueTerms, setPaymentDueTerms] = useState<string>("Due Upon Receipt");
  const [paymentInstructions, setPaymentInstructions] = useState<string>(
    "Payment accepted via Check, Bank Transfer / ACH, Zelle, or Credit Card. Please reference Invoice # on remittance."
  );

  // Line items state (pre-filled with trade defaults)
  const [lineItems, setLineItems] = useState<LineItem[]>(() =>
    trade.defaultLineItems.map((item) => ({ ...item }))
  );

  // Tax & Discount
  const [taxPercent, setTaxPercent] = useState<number>(0);
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  // Notes & terms
  const [terms, setTerms] = useState(trade.defaultTerms);

  // UI state for PDF download
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Pro State & Profile
  const { isPro, profile, isLoggedIn, mounted } = useProStatus();
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [proModalReason, setProModalReason] = useState<string>("logo");
  const [companyLogo, setCompanyLogo] = useState<string | null>(null);

  // Digital e-Signatures state
  const [contractorSignature, setContractorSignature] = useState<string | null>(null);
  const [contractorSignatureDate, setContractorSignatureDate] = useState<string | null>(null);
  const [clientSignature, setClientSignature] = useState<string | null>(null);
  const [clientSignatureDate, setClientSignatureDate] = useState<string | null>(null);
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [signatureTarget, setSignatureTarget] = useState<"contractor" | "client">("contractor");
  const [isClientEsignModalOpen, setIsClientEsignModalOpen] = useState(false);

  const handleSaveSignature = (dataUrl: string) => {
    const formattedDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    if (signatureTarget === "contractor") {
      setContractorSignature(dataUrl);
      setContractorSignatureDate(formattedDate);
    } else {
      setClientSignature(dataUrl);
      setClientSignatureDate(formattedDate);
    }
  };

  // Restore contractor profile & logo from localStorage if exists
  useEffect(() => {
    try {
      const savedLogo = localStorage.getItem("cm_company_logo");
      if (savedLogo) setCompanyLogo(savedLogo);

      const saved = localStorage.getItem("cm_contractor_profile");
      if (saved) {
        const p = JSON.parse(saved);
        if (p.companyName) setContractorName(p.companyName);
        if (p.email) setContractorEmail(p.email);
        if (p.phone) setContractorPhone(p.phone);
        if (p.license) setContractorLicense(p.license);
      }
    } catch {}
  }, []);

  // Update contractor info whenever profile updates
  useEffect(() => {
    if (profile?.companyName) setContractorName(profile.companyName);
    if (profile?.email) setContractorEmail(profile.email);
    if (profile?.phone) setContractorPhone(profile.phone);
    if (profile?.license) setContractorLicense(profile.license);
  }, [profile]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Please select an image smaller than 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCompanyLogo(result);
        try {
          localStorage.setItem("cm_company_logo", result);
        } catch {}
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setCompanyLogo(null);
    try {
      localStorage.removeItem("cm_company_logo");
    } catch {}
  };

  // Quick Action Handlers for Onboarding
  const handleClearSampleData = () => {
    setContractorName("");
    setContractorPhone("");
    setContractorEmail("");
    setContractorLicense("");
    setClientName("");
    setClientAddress("");
    setClientEmail("");
  };

  const handleResetDefaults = () => {
    setContractorName("Apex Trades LLC");
    setContractorPhone("(555) 234-5678");
    setContractorEmail("bids@apextrades.com");
    setContractorLicense("Licensed & Insured #CT-88941");
    setClientName("Sarah & Michael Jenkins");
    setClientAddress("1428 Oakridge Blvd, Austin, TX 78704");
    setClientEmail("s.jenkins@example.com");
    setLineItems(trade.defaultLineItems.map((item) => ({ ...item })));
    setTerms(trade.defaultTerms);
    setTaxPercent(0);
    setDiscountAmount(0);
  };

  // Re-sync when trade changes
  useEffect(() => {
    setLineItems(trade.defaultLineItems.map((item) => ({ ...item })));
    setTerms(trade.defaultTerms);
  }, [trade.slug, trade.defaultLineItems, trade.defaultTerms]);

  // Calculations
  const subtotal = lineItems.reduce((sum, item) => {
    const itemTotal = (Number(item.quantity) || 0) * (Number(item.rate) || 0);
    return sum + itemTotal;
  }, 0);

  const discount = Math.min(Number(discountAmount) || 0, subtotal);
  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = taxableAmount * ((Number(taxPercent) || 0) / 100);
  const grandTotal = Math.max(0, subtotal - discount + tax);

  // Handlers for line items
  const handleItemChange = (
    index: number,
    field: keyof LineItem,
    val: string | number
  ) => {
    setLineItems((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: val };
      return copy;
    });
  };

  const handleAddItem = () => {
    setLineItems((prev) => [
      ...prev,
      {
        id: `item-${Date.now()}`,
        description: "Additional labor or material item",
        quantity: 1,
        unit: "unit",
        rate: 100,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (lineItems.length <= 1) return;
    setLineItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Track event helper
  const fireAnalytics = (eventName: string, params: Record<string, unknown>) => {
    try {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent(eventName, { detail: params }));
        const win = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (typeof win.gtag === "function") {
          win.gtag("event", eventName, params);
        }
      }
    } catch {
      // ignore
    }
  };

  // Instant Spreadsheet (Excel / Google Sheets / Numbers CSV) Export
  const handleExportSpreadsheet = () => {
    fireAnalytics("spreadsheet_downloaded", {
      trade: trade.slug,
      docType,
      estimateNumber,
      total: grandTotal,
    });

    const docTitle = docType === "invoice" ? "INVOICE" : "ESTIMATE & PROPOSAL";
    const numLabel = docType === "invoice" ? "Invoice #" : "Estimate #";
    const dueLabel = docType === "invoice" ? "Payment Due Date" : "Valid Until";

    const rows: (string | number)[][] = [
      [docTitle, `Trade: ${trade.tradeName}`, `CalculatorMint (calculatormint.online)`],
      [],
      ["Contractor / Business:", contractorName || "Contractor Name", "License / Insured:", contractorLicense || "Licensed & Insured"],
      ["Contact Info:", [contractorPhone, contractorEmail].filter(Boolean).join(" | ") || "N/A"],
      [],
      ["Client Name:", clientName || "Client Name", numLabel, estimateNumber || (docType === "invoice" ? "INV-1042" : "EST-1042")],
      ["Project Location:", clientAddress || "Project Address", "Date Issued:", estimateDate || today],
      ["Client Email:", clientEmail || "N/A", dueLabel, `${validUntil || thirtyDaysOut} (${paymentDueTerms})`],
      [],
      ["Item #", "Scope Description", "Quantity", "Unit", "Unit Rate ($)", "Total Amount ($)"],
    ];

    lineItems.forEach((item, idx) => {
      rows.push([
        idx + 1,
        `"${(item.description || "Scope item").replace(/"/g, '""')}"`,
        item.quantity || 1,
        item.unit || "unit",
        (Number(item.rate) || 0).toFixed(2),
        ((Number(item.quantity) || 0) * (Number(item.rate) || 0)).toFixed(2),
      ]);
    });

    rows.push([]);
    rows.push(["", "", "", "", "Subtotal:", subtotal.toFixed(2)]);
    if (discountAmount > 0) {
      rows.push(["", "", "", "", "Discount:", `-${discountAmount.toFixed(2)}`]);
    }
    if (taxPercent > 0) {
      rows.push(["", "", "", "", `Sales Tax (${taxPercent}%):`, tax.toFixed(2)]);
    }
    rows.push(["", "", "", "", docType === "invoice" ? "Total Due:" : "Estimated Total:", grandTotal.toFixed(2)]);
    rows.push([]);
    rows.push(["Terms & Conditions:", `"${(terms || "").replace(/"/g, '""')}"`]);
    if (docType === "invoice" && paymentInstructions) {
      rows.push(["Payment Instructions:", `"${paymentInstructions.replace(/"/g, '""')}"`]);
    }

    const csvContent = "data:text/csv;charset=utf-8," + rows.map((r) => r.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${docType}-${(estimateNumber || "1042").toLowerCase()}-${trade.slug}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 100% Reliable Vector PDF Generation using jsPDF
  // This draws vector elements directly from state, eliminating canvas render / blank page bugs.
  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    fireAnalytics("pdf_downloaded", {
      trade: trade.slug,
      docType,
      estimateNumber,
      total: grandTotal,
    });

    try {
      const { jsPDF } = await import("jspdf");

      // Letter size: 612 x 792 pt
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "letter",
      });

      const pageWidth = 612;
      const leftMargin = 40;
      const rightMargin = 572;
      const contentWidth = rightMargin - leftMargin;

      // 1. Header: Contractor Info (Left)
      let contractorY = 52;
      if (companyLogo && isPro) {
        try {
          const format = companyLogo.startsWith("data:image/png") ? "PNG" : "JPEG";
          doc.addImage(companyLogo, format, leftMargin, 30, 85, 26, undefined, "FAST");
          contractorY = 70;
        } catch (imgErr) {
          console.warn("Could not draw logo in PDF:", imgErr);
        }
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(companyLogo && isPro ? 15 : 18);
      doc.setTextColor(9, 9, 11);
      doc.text(contractorName || "Contractor Name", leftMargin, contractorY);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(113, 113, 122);
      doc.text(contractorLicense || "Licensed & Insured", leftMargin, contractorY + 12);

      const contactLine = [contractorPhone, contractorEmail].filter(Boolean).join("  •  ");
      if (contactLine) {
        doc.text(contactLine, leftMargin, contractorY + 23);
      }

      // Header: Estimate / Invoice Meta (Right)
      const docHeaderTitle = docType === "invoice" ? "INVOICE" : "ESTIMATE";
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(9, 9, 11);
      doc.text(docHeaderTitle, rightMargin, 52, { align: "right" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(82, 82, 91);
      const numLabel = docType === "invoice" ? "Invoice #:" : "Estimate #:";
      doc.text(`${numLabel} ${estimateNumber || (docType === "invoice" ? "INV-1042" : "EST-1042")}`, rightMargin, 66, { align: "right" });
      doc.text(`Date: ${estimateDate || today}`, rightMargin, 79, { align: "right" });
      const dueLabel = docType === "invoice" ? `Due: ${validUntil || today} (${paymentDueTerms})` : `Valid Until: ${validUntil || thirtyDaysOut}`;
      doc.text(dueLabel, rightMargin, 92, { align: "right" });

      // Divider line
      const dividerY = Math.max(104, contractorY + 34);
      doc.setDrawColor(228, 228, 231);
      doc.setLineWidth(1);
      doc.line(leftMargin, dividerY, rightMargin, dividerY);

      // 2. Client & Project Details (Two Columns)
      const col2Left = 320;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(161, 161, 170);
      doc.text("PREPARED FOR", leftMargin, dividerY + 18);
      doc.text("PROJECT LOCATION & TRADE", col2Left, dividerY + 18);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(9, 9, 11);
      doc.text(clientName || "Client Name", leftMargin, dividerY + 32);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(82, 82, 91);
      if (clientEmail) {
        doc.text(clientEmail, leftMargin, dividerY + 45);
      }

      // Project Location text wrapped if long
      const locationLines = doc.splitTextToSize(clientAddress || "Service Address", 230);
      doc.text(locationLines, col2Left, dividerY + 32);
      const locHeight = locationLines.length * 11;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(24, 24, 27);
      doc.text(`Trade Category: ${trade.category}`, col2Left, dividerY + 34 + locHeight);

      // 3. Line Items Table Header
      const tableTopY = Math.max(175, dividerY + 70);
      doc.setFillColor(24, 24, 27);
      doc.rect(leftMargin, tableTopY, contentWidth, 20, "F");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(255, 255, 255);
      doc.text("ITEM & SCOPE DESCRIPTION", leftMargin + 8, tableTopY + 13);
      doc.text("QTY", 330, tableTopY + 13, { align: "center" });
      doc.text("UNIT", 375, tableTopY + 13, { align: "center" });
      doc.text("RATE ($)", 455, tableTopY + 13, { align: "right" });
      doc.text("AMOUNT ($)", rightMargin - 8, tableTopY + 13, { align: "right" });

      // 4. Line Items Rows
      let currentY = tableTopY + 28;
      doc.setTextColor(24, 24, 27);

      lineItems.forEach((item) => {
        const rowTotal = (Number(item.quantity) || 0) * (Number(item.rate) || 0);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);

        // Description with automatic wrapping
        const descLines = doc.splitTextToSize(item.description || "Service item", 270);
        doc.text(descLines, leftMargin + 8, currentY);

        doc.text(String(item.quantity || 1), 330, currentY, { align: "center" });
        doc.text(String(item.unit || "unit"), 375, currentY, { align: "center" });
        doc.text(
          Number(item.rate || 0).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          455,
          currentY,
          { align: "right" }
        );

        doc.setFont("helvetica", "bold");
        doc.text(
          rowTotal.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          rightMargin - 8,
          currentY,
          { align: "right" }
        );

        const rowHeight = Math.max(16, descLines.length * 11 + 6);
        currentY += rowHeight;

        // Row border
        doc.setDrawColor(244, 244, 245);
        doc.line(leftMargin, currentY - 4, rightMargin, currentY - 4);
      });

      // 5. Totals Box
      currentY += 8;
      const totalsBoxWidth = 200;
      const totalsLeft = rightMargin - totalsBoxWidth;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(82, 82, 91);

      doc.text("Subtotal:", totalsLeft, currentY);
      doc.text(`$${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, rightMargin - 8, currentY, { align: "right" });
      currentY += 14;

      if (discount > 0) {
        doc.text("Discount:", totalsLeft, currentY);
        doc.text(`-$${discount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, rightMargin - 8, currentY, { align: "right" });
        currentY += 14;
      }

      if (taxPercent > 0) {
        doc.text(`Sales Tax (${taxPercent}%):`, totalsLeft, currentY);
        doc.text(`$${tax.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, rightMargin - 8, currentY, { align: "right" });
        currentY += 14;
      }

      // Estimated Total Bar
      doc.setFillColor(24, 24, 27);
      doc.rect(totalsLeft - 8, currentY, totalsBoxWidth + 8, 24, "F");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(255, 255, 255);
      doc.text("ESTIMATED TOTAL:", totalsLeft, currentY + 16);
      doc.text(
        `$${grandTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        rightMargin - 8,
        currentY + 16,
        { align: "right" }
      );
      currentY += 36;

      // 6. Terms & Conditions Box
      if (terms) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        doc.setTextColor(113, 113, 122);
        doc.text("TERMS & CONDITIONS", leftMargin, currentY);
        currentY += 10;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(63, 63, 70);

        const termsLines = doc.splitTextToSize(terms, contentWidth - 16);
        const termsHeight = termsLines.length * 10 + 12;

        doc.setFillColor(250, 250, 250);
        doc.setDrawColor(228, 228, 231);
        doc.rect(leftMargin, currentY, contentWidth, termsHeight, "FD");

        doc.text(termsLines, leftMargin + 8, currentY + 12);
        currentY += termsHeight + 20;
      }

      // 7. Signatures
      const sigY = Math.max(currentY + 10, 680);
      const sigWidth = 220;

      // Draw Contractor Signature if present
      if (contractorSignature) {
        try {
          doc.addImage(contractorSignature, "PNG", leftMargin + 5, sigY - 26, 110, 22, undefined, "FAST");
        } catch (sigErr) {
          console.warn("Could not draw contractor signature in PDF:", sigErr);
        }
      }

      // Draw Client Signature if present
      if (clientSignature) {
        try {
          doc.addImage(clientSignature, "PNG", rightMargin - sigWidth + 5, sigY - 26, 110, 22, undefined, "FAST");
        } catch (sigErr) {
          console.warn("Could not draw client signature in PDF:", sigErr);
        }
      }

      doc.setDrawColor(161, 161, 170);
      doc.line(leftMargin, sigY, leftMargin + sigWidth, sigY);
      doc.line(rightMargin - sigWidth, sigY, rightMargin, sigY);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(82, 82, 91);
      doc.text("Contractor Signature", leftMargin, sigY + 12);
      doc.text("Client Acceptance Signature", rightMargin - sigWidth, sigY + 12);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(161, 161, 170);
      doc.text(
        contractorSignatureDate ? `Digitally Signed: ${contractorSignatureDate}` : "Date: ____________________",
        leftMargin,
        sigY + 24
      );
      doc.text(
        clientSignatureDate ? `Accepted via e-Sign: ${clientSignatureDate}` : "Date: ____________________",
        rightMargin - sigWidth,
        sigY + 24
      );

      // 8. Footer Brand Mark
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(161, 161, 170);
      if (!isPro) {
        doc.text(
          docType === "invoice"
            ? "Generated with CalculatorMint • Free US Contractor Invoice & Estimate Generator"
            : "Generated with CalculatorMint • Free US Contractor Estimate Generator",
          pageWidth / 2,
          760,
          { align: "center" }
        );
      } else {
        doc.text(
          docType === "invoice"
            ? "Official Client Invoice • Thank you for your business!"
            : "Authorized Client Estimate • Valid for 30 Days",
          pageWidth / 2,
          760,
          { align: "center" }
        );
      }

      const filename = `${trade.slug}-${docType}-${estimateNumber || "doc"}.pdf`;
      doc.save(filename);
    } catch (err) {
      console.warn("Direct vector PDF error, falling back to window.print():", err);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const openProModal = (reason: "logo" | "esign") => {
    setProModalReason(reason);
    setIsProModalOpen(true);
    fireAnalytics("pro_cta_clicked", {
      trade: trade.slug,
      feature: reason === "logo" ? "remove_watermark_logo" : "esign_invoice_link",
    });
  };

  return (
    <div className="w-full">
      {/* Contractor Quick-Start Onboarding Banner */}
      <div className="mb-6 p-4 sm:p-5 bg-zinc-50 border border-zinc-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="w-8 h-8 rounded-lg bg-zinc-950 text-white flex items-center justify-center text-sm shrink-0 font-mono shadow-sm">
            ⚡
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-zinc-950">
                Quick-Start: 2026 US {trade.tradeName} Pricing Benchmarks Pre-Loaded
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 text-zinc-800 font-bold font-mono">
                Live
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed">
              Step 1: Edit your business info. Step 2: Customize line items. Step 3: Export vector PDF.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleClearSampleData}
            className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 text-xs font-semibold transition cursor-pointer shadow-2xs"
          >
            Clear Sample Info
          </button>
          <button
            type="button"
            onClick={handleResetDefaults}
            className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold transition cursor-pointer"
          >
            Reset Template
          </button>
        </div>
      </div>

      {/* Mobile Tab Toggle */}
      <div className="flex md:hidden mb-4 bg-slate-100 p-1 rounded-xl text-xs font-semibold border border-slate-200">
        <button
          type="button"
          onClick={() => setActiveTab("edit")}
          className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
            activeTab === "edit"
              ? "bg-emerald-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-950"
          }`}
        >
          1. Edit Estimate
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
            activeTab === "preview"
              ? "bg-emerald-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-950"
          }`}
        >
          2. Live Preview & PDF
        </button>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT PANEL: Editor */}
        <div
          className={`lg:col-span-6 space-y-6 ${
            activeTab === "preview" ? "hidden md:block" : "block"
          }`}
        >
          {/* Document Type Switcher: Estimate vs Invoice */}
          <div className="bg-slate-900 text-white rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm border border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Mode: {docType === "invoice" ? "Billable Invoice" : "Estimate / Quote"}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {docType === "invoice"
                  ? "Generate a formal bill with payment due date and remittance details"
                  : "Draft a client-ready proposal and job cost estimate with e-signatures"}
              </p>
            </div>
            <div className="flex items-center p-1 bg-slate-800 rounded-lg border border-slate-700 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  setDocType("estimate");
                  if (estimateNumber.startsWith("INV-")) {
                    setEstimateNumber(estimateNumber.replace("INV-", "EST-"));
                  }
                }}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  docType === "estimate"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                📄 Estimate / Bid
              </button>
              <button
                type="button"
                onClick={() => {
                  setDocType("invoice");
                  if (estimateNumber.startsWith("EST-")) {
                    setEstimateNumber(estimateNumber.replace("EST-", "INV-"));
                  }
                }}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  docType === "invoice"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                💳 Final Invoice
              </button>
            </div>
          </div>

          {/* Section: Contractor & Client Info */}
          <div className="bg-white rounded-xl border border-zinc-200 p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
              <h3 className="text-sm font-bold text-zinc-950 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-zinc-950 text-white flex items-center justify-center text-[10px] font-mono">
                  1
                </span>
                Contractor & Client Info
              </h3>
              {mounted && isLoggedIn ? (
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <span>✓ Auto-Filled from Profile</span>
                </span>
              ) : (
                <span className="text-xs text-zinc-400 font-mono">Step 1 of 3</span>
              )}
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                  Your Business / Company Name
                </label>
                <input
                  type="text"
                  value={contractorName}
                  onChange={(e) => setContractorName(e.target.value)}
                  placeholder="e.g. Apex Painting LLC"
                  className="w-full px-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                    Business Phone
                  </label>
                  <input
                    type="text"
                    value={contractorPhone}
                    onChange={(e) => setContractorPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    value={contractorEmail}
                    onChange={(e) => setContractorEmail(e.target.value)}
                    placeholder="quotes@company.com"
                    className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                  License / Bonding / Insurance Credential
                </label>
                <input
                  type="text"
                  value={contractorLicense}
                  onChange={(e) => setContractorLicense(e.target.value)}
                  placeholder="e.g. Licensed & Insured #ROC-340192"
                  className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950"
                />
              </div>

              {/* Pro Custom Logo Upload */}
              {mounted && isPro && (
                <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[11px] font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                      <span>Company Logo</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-600 text-white font-mono font-bold">PRO</span>
                    </label>
                    {companyLogo && (
                      <button
                        type="button"
                        onClick={handleRemoveLogo}
                        className="text-[11px] text-red-600 hover:underline cursor-pointer"
                      >
                        Remove Logo
                      </button>
                    )}
                  </div>
                  {companyLogo ? (
                    <div className="flex items-center gap-3">
                      <img
                        src={companyLogo}
                        alt="Company Logo Preview"
                        className="h-10 w-auto max-w-[140px] object-contain border border-zinc-200 rounded p-1 bg-white"
                      />
                      <span className="text-[11px] text-emerald-800 font-medium">✓ Logo active on quote header</span>
                    </div>
                  ) : (
                    <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-emerald-300 hover:border-emerald-600 bg-white text-xs font-semibold text-emerald-800 transition">
                      <span>+ Upload Company Logo (PNG/JPG)</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleLogoUpload}
                      />
                    </label>
                  )}
                </div>
              )}

              <div className="pt-3 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                    Client Email
                  </label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="client@gmail.com"
                    className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                  Job Site / Property Address
                </label>
                <input
                  type="text"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  placeholder="123 Oakridge St, City, ST 00000"
                  className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950"
                />
              </div>

              {/* Estimate / Invoice Meta */}
              <div className="pt-3 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">
                    {docType === "invoice" ? "Invoice #" : "Estimate #"}
                  </label>
                  <input
                    type="text"
                    value={estimateNumber}
                    onChange={(e) => setEstimateNumber(e.target.value)}
                    className="w-full px-2 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-md font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">
                    Date Issued
                  </label>
                  <input
                    type="date"
                    value={estimateDate}
                    onChange={(e) => setEstimateDate(e.target.value)}
                    suppressHydrationWarning
                    className="w-full px-2 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">
                    {docType === "invoice" ? "Payment Due Date" : "Valid Until"}
                  </label>
                  <input
                    type="date"
                    value={validUntil}
                    onChange={(e) => setValidUntil(e.target.value)}
                    suppressHydrationWarning
                    className="w-full px-2 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-md"
                  />
                </div>
              </div>

              {docType === "invoice" && (
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">
                      Payment Terms
                    </label>
                    <select
                      value={paymentDueTerms}
                      onChange={(e) => setPaymentDueTerms(e.target.value)}
                      className="w-full px-2 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-md text-zinc-800"
                    >
                      <option value="Due Upon Receipt">Due Upon Receipt</option>
                      <option value="Net 15 Days">Net 15 Days</option>
                      <option value="Net 30 Days">Net 30 Days</option>
                      <option value="Net 60 Days">Net 60 Days</option>
                      <option value="50% Deposit / 50% Completion">50% Deposit / 50% Completion</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-1">
                      Payment Remittance Notes
                    </label>
                    <input
                      type="text"
                      value={paymentInstructions}
                      onChange={(e) => setPaymentInstructions(e.target.value)}
                      placeholder="e.g. Zelle: bids@company.com, ACH, Check"
                      className="w-full px-2 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-md text-zinc-800"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section: Line Items */}
          <div className="bg-white rounded-xl border border-zinc-200 p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
              <h3 className="text-sm font-bold text-zinc-950 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-zinc-950 text-white flex items-center justify-center text-[10px] font-mono">
                  2
                </span>
                Trade Scope Items ({trade.tradeName})
              </h3>
              <button
                type="button"
                onClick={handleAddItem}
                className="text-xs font-bold px-2.5 py-1 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-zinc-300 rounded-md transition"
              >
                + Add Item
              </button>
            </div>

            <div className="space-y-3">
              {lineItems.map((item, index) => {
                const rowTotal =
                  (Number(item.quantity) || 0) * (Number(item.rate) || 0);

                return (
                  <div
                    key={item.id || index}
                    className="p-3 bg-zinc-50 rounded-lg border border-zinc-200 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) =>
                          handleItemChange(index, "description", e.target.value)
                        }
                        placeholder="Description of work or material"
                        className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-200 rounded-md font-medium text-zinc-900 focus:outline-none focus:border-zinc-950"
                      />
                      {lineItems.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(index)}
                          className="text-zinc-400 hover:text-red-600 p-1 text-xs"
                          title="Remove row"
                          aria-label="Remove item"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-3">
                        <label className="block text-[10px] font-bold text-zinc-500 mb-0.5">
                          Qty
                        </label>
                        <input
                          type="number"
                          step="any"
                          value={item.quantity}
                          onChange={(e) =>
                            handleItemChange(
                              index,
                              "quantity",
                              parseFloat(e.target.value) || 0
                            )
                          }
                          className="w-full px-2 py-1 text-xs bg-white border border-zinc-200 rounded-md font-mono"
                        />
                      </div>
                      <div className="col-span-3">
                        <label className="block text-[10px] font-bold text-zinc-500 mb-0.5">
                          Unit
                        </label>
                        <input
                          type="text"
                          value={item.unit}
                          onChange={(e) =>
                            handleItemChange(index, "unit", e.target.value)
                          }
                          placeholder="sq ft / hrs"
                          className="w-full px-2 py-1 text-xs bg-white border border-zinc-200 rounded-md text-zinc-800"
                        />
                      </div>
                      <div className="col-span-3">
                        <label className="block text-[10px] font-bold text-zinc-500 mb-0.5">
                          Rate ($)
                        </label>
                        <input
                          type="number"
                          step="any"
                          value={item.rate}
                          onChange={(e) =>
                            handleItemChange(
                              index,
                              "rate",
                              parseFloat(e.target.value) || 0
                            )
                          }
                          className="w-full px-2 py-1 text-xs bg-white border border-zinc-200 rounded-md font-mono"
                        />
                      </div>
                      <div className="col-span-3 text-right">
                        <span className="block text-[10px] font-bold text-zinc-500 mb-0.5">
                          Amount
                        </span>
                        <span className="text-xs font-bold text-zinc-950 font-mono">
                          ${rowTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Adjustments */}
            <div className="mt-4 pt-4 border-t border-zinc-100 grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                  Discount ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={discountAmount || ""}
                  onChange={(e) => setDiscountAmount(parseFloat(e.target.value) || 0)}
                  placeholder="0.00"
                  className="w-full px-3 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-md font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                  Sales Tax (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="any"
                  value={taxPercent || ""}
                  onChange={(e) => setTaxPercent(parseFloat(e.target.value) || 0)}
                  placeholder="e.g. 8.25"
                  className="w-full px-3 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-md font-mono"
                />
              </div>
            </div>
          </div>

          {/* Section: Terms & Payment Notes */}
          <div className="bg-white rounded-xl border border-zinc-200 p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
              <h3 className="text-sm font-bold text-zinc-950 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-zinc-950 text-white flex items-center justify-center text-[10px] font-mono">
                  3
                </span>
                Contract Terms & Payment Policy
              </h3>
              <button
                type="button"
                onClick={() => setTerms(trade.defaultTerms)}
                className="text-[11px] text-zinc-500 hover:text-zinc-950 underline"
              >
                Reset to default
              </button>
            </div>
            <textarea
              rows={4}
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-800 focus:outline-none focus:border-zinc-950 leading-relaxed"
            />
          </div>
        </div>

        {/* RIGHT PANEL: Live Quote Preview & Actions */}
        <div
          className={`lg:col-span-6 space-y-4 ${
            activeTab === "edit" ? "hidden md:block" : "block"
          }`}
        >
          {/* Action Bar Header */}
          <div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                style={{ color: "#ffffff", backgroundColor: "#059669" }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 !text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition disabled:opacity-70 cursor-pointer"
              >
                {isGeneratingPdf ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    <span style={{ color: "#ffffff" }} className="!text-white">Generating Vector PDF...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span style={{ color: "#ffffff" }} className="!text-white">Download PDF (Instant)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsClientEsignModalOpen(true)}
                className="px-4 py-3 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold inline-flex items-center justify-center gap-1.5 transition cursor-pointer"
                title="Send estimate to client for review and digital e-signature"
              >
                <span className="text-sm">✍️</span>
                <span>Send e-Sign</span>
              </button>

              <button
                type="button"
                onClick={handleExportSpreadsheet}
                className="px-3.5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-100 bg-white text-zinc-900 text-xs font-bold inline-flex items-center justify-center gap-1.5 transition cursor-pointer shadow-2xs"
                title="Download estimate line items as Excel/Sheets compatible CSV spreadsheet"
              >
                <span className="text-emerald-700 font-mono font-black text-xs">📊</span>
                <span>Excel / Sheets</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-3.5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-900 text-xs font-bold inline-flex items-center justify-center gap-1.5 transition cursor-pointer"
                title="Print or save via system printer dialog"
              >
                <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print / Dialog
              </button>
            </div>

            {/* Pro Gates: Only show upsell if NOT Pro! */}
            {mounted && !isPro ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openProModal("logo")}
                  className="px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition text-left cursor-pointer"
                >
                  <span>Remove Watermark & Add Logo</span>
                  <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold font-mono">Pro</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsClientEsignModalOpen(true)}
                  className="px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition text-left cursor-pointer"
                >
                  <span>Send 1-Click e-Sign & Proposal</span>
                  <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold font-mono">e-Sign</span>
                </button>
              </div>
            ) : mounted && isPro ? (
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="font-bold text-emerald-950">Pro Account Active</span>
                  <span className="text-[11px] text-emerald-700 hidden sm:inline">• Logo Enabled & Watermark-Free Export</span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-600 text-white rounded">
                  PRO
                </span>
              </div>
            ) : null}
          </div>

          {/* Printable / Canvas Sheet Container */}
          <div className="rounded-xl shadow-sm border border-zinc-200 bg-zinc-50 p-2 sm:p-4 overflow-hidden">
            <div
              ref={previewRef}
              id="estimate-printable"
              className="bg-white rounded-lg border border-zinc-300 p-6 sm:p-8 text-zinc-950 shadow-sm"
              style={{ minHeight: "680px" }}
            >
              {/* Document Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b-2 border-zinc-950">
                <div>
                  {companyLogo && isPro && (
                    <img
                      src={companyLogo}
                      alt={contractorName || "Company Logo"}
                      className="h-12 w-auto max-w-[160px] object-contain mb-3"
                    />
                  )}
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950">
                    {contractorName || "Contractor Name"}
                  </h2>
                  <p className="text-xs text-zinc-500 font-medium mt-0.5">
                    {contractorLicense || "Licensed & Insured"}
                  </p>
                  <div className="mt-2 text-xs text-zinc-600 space-y-0.5">
                    {contractorPhone && <p>Tel: {contractorPhone}</p>}
                    {contractorEmail && <p>Email: {contractorEmail}</p>}
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="inline-block px-2.5 py-1 bg-zinc-950 text-white font-mono text-xs font-bold tracking-widest uppercase rounded">
                    {docType === "invoice" ? "INVOICE" : "ESTIMATE"}
                  </span>
                  <div className="mt-3 text-xs space-y-1">
                    <p className="font-semibold text-zinc-900">
                      {docType === "invoice" ? "Invoice #:" : "Estimate #:"}{" "}
                      <span className="font-mono text-zinc-700">{estimateNumber}</span>
                    </p>
                    <p className="text-zinc-500">
                      Date: <span className="text-zinc-900" suppressHydrationWarning>{estimateDate}</span>
                    </p>
                    <p className="text-zinc-500">
                      {docType === "invoice" ? "Payment Due:" : "Valid Until:"}{" "}
                      <span className="text-zinc-900" suppressHydrationWarning>
                        {validUntil} {docType === "invoice" ? `(${paymentDueTerms})` : ""}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Client & Job Address */}
              <div className="py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-zinc-100 text-xs">
                <div>
                  <p className="font-bold uppercase tracking-wider text-zinc-400 text-[10px] mb-1">
                    Prepared For
                  </p>
                  <p className="text-sm font-bold text-zinc-950">{clientName || "Client Name"}</p>
                  {clientEmail && <p className="text-zinc-600 mt-0.5">{clientEmail}</p>}
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-zinc-400 text-[10px] mb-1">
                    Project Location / Service Address
                  </p>
                  <p className="text-xs font-medium text-zinc-800 leading-relaxed">
                    {clientAddress || "Client Property Address"}
                  </p>
                  <p className="text-[11px] text-zinc-600 font-bold mt-1">
                    Trade: {trade.tradeName}
                  </p>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="py-5">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-950 bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-wider">
                      <th className="py-2.5 px-3">Item & Scope Description</th>
                      <th className="py-2.5 px-2 text-center w-16">Qty</th>
                      <th className="py-2.5 px-2 text-center w-16">Unit</th>
                      <th className="py-2.5 px-2 text-right w-24">Rate</th>
                      <th className="py-2.5 px-3 text-right w-24">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-xs">
                    {lineItems.map((item, idx) => {
                      const rowTotal =
                        (Number(item.quantity) || 0) * (Number(item.rate) || 0);

                      return (
                        <tr key={item.id || idx} className="hover:bg-zinc-50">
                          <td className="py-3 px-3 font-medium text-zinc-900">
                            {item.description || "Service item"}
                          </td>
                          <td className="py-3 px-2 text-center text-zinc-600 font-mono">
                            {item.quantity}
                          </td>
                          <td className="py-3 px-2 text-center text-zinc-500">
                            {item.unit}
                          </td>
                          <td className="py-3 px-2 text-right text-zinc-600 font-mono">
                            ${(Number(item.rate) || 0).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="py-3 px-3 text-right font-bold text-zinc-950 font-mono">
                            ${rowTotal.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Totals Summary */}
              <div className="pt-2 pb-6 border-t border-zinc-200 flex justify-end">
                <div className="w-64 space-y-2 text-xs">
                  <div className="flex justify-between text-zinc-600">
                    <span>Subtotal:</span>
                    <span className="font-mono text-zinc-900">
                      ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-zinc-700">
                      <span>Discount:</span>
                      <span className="font-mono font-bold">
                        -${discount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  )}

                  {taxPercent > 0 && (
                    <div className="flex justify-between text-zinc-600">
                      <span>Sales Tax ({taxPercent}%):</span>
                      <span className="font-mono text-zinc-900">
                        ${tax.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between pt-2 border-t-2 border-zinc-950 text-sm font-bold text-zinc-950">
                    <span>Estimated Total:</span>
                    <span className="font-mono text-base text-zinc-950">
                      ${grandTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Terms and Sign-off */}
              <div className="pt-4 border-t border-zinc-100 text-[11px] text-zinc-600 space-y-4">
                <div>
                  <p className="font-bold text-zinc-700 uppercase tracking-wider text-[10px] mb-1">
                    Terms & Conditions:
                  </p>
                  <p className="leading-relaxed bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                    {terms}
                  </p>
                </div>

                {docType === "invoice" && paymentInstructions && (
                  <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-200 text-xs">
                    <p className="font-bold text-emerald-950 uppercase tracking-wider text-[10px] mb-1">
                      Payment Remittance Instructions:
                    </p>
                    <p className="leading-relaxed text-emerald-900 font-medium">
                      {paymentInstructions}
                    </p>
                  </div>
                )}

                {/* Sign-off box with interactive e-Signatures */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[11px] text-zinc-500">
                  <div className="border-t border-zinc-300 pt-2">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-zinc-800">Contractor Signature</p>
                      {contractorSignature && (
                        <button
                          type="button"
                          onClick={() => {
                            setContractorSignature(null);
                            setContractorSignatureDate(null);
                          }}
                          className="text-[10px] text-red-500 hover:underline cursor-pointer"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                    {contractorSignature ? (
                      <div>
                        <img
                          src={contractorSignature}
                          alt="Contractor Digital Signature"
                          className="h-10 w-auto max-w-[140px] object-contain mb-1"
                        />
                        <p className="text-[10px] text-emerald-700 font-medium">
                          ✓ Digitally Signed • {contractorSignatureDate}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            setSignatureTarget("contractor");
                            setIsSignatureModalOpen(true);
                          }}
                          className="mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold transition cursor-pointer text-xs"
                        >
                          <span>✍️ Click to e-Sign</span>
                        </button>
                        <p className="text-[10px] text-zinc-400 mt-2">Date: _______________</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-zinc-300 pt-2">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-zinc-800">Client Acceptance Signature</p>
                      {clientSignature && (
                        <button
                          type="button"
                          onClick={() => {
                            setClientSignature(null);
                            setClientSignatureDate(null);
                          }}
                          className="text-[10px] text-red-500 hover:underline cursor-pointer"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                    {clientSignature ? (
                      <div>
                        <img
                          src={clientSignature}
                          alt="Client Digital Signature"
                          className="h-10 w-auto max-w-[140px] object-contain mb-1"
                        />
                        <p className="text-[10px] text-emerald-700 font-medium">
                          ✓ Client Accepted • {clientSignatureDate}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSignatureTarget("client");
                              setIsSignatureModalOpen(true);
                            }}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold transition cursor-pointer text-xs"
                          >
                            <span>✍️ e-Sign In-Person</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsClientEsignModalOpen(true)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold transition cursor-pointer text-xs"
                          >
                            <span>📱 Send to Client</span>
                          </button>
                        </div>
                        <p className="text-[10px] text-zinc-400 mt-2">Date: _______________</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Watermark / Brand Footer: Hidden for Pro users */}
              {(!mounted || !isPro) ? (
                <div className="mt-8 pt-4 border-t border-zinc-100 text-center">
                  <p className="text-[10px] text-zinc-400 tracking-wide font-medium">
                    Generated with <span className="font-bold text-zinc-900">CalculatorMint</span> — Free US Contractor Estimate & Bid Generator
                  </p>
                </div>
              ) : (
                <div className="mt-8 pt-4 border-t border-zinc-100 text-center">
                  <p className="text-[10px] text-zinc-400 tracking-wide font-medium">
                    Authorized Client Estimate • Valid for 30 Days
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CalculatorMint Pro Onboarding Modal */}
      <ProOnboardingModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
        defaultTrade={trade.slug}
        defaultFeature={proModalReason === "logo" ? "logo" : "esign"}
        onSuccess={(data) => {
          if (data.companyName) {
            setContractorName(data.companyName);
          }
          if (data.email) {
            setContractorEmail(data.email);
          }
        }}
      />

      {/* Digital e-Signature Modal */}
      <SignatureModal
        isOpen={isSignatureModalOpen}
        onClose={() => setIsSignatureModalOpen(false)}
        onSave={handleSaveSignature}
        title={signatureTarget === "contractor" ? "Contractor Digital e-Signature" : "Client Acceptance e-Signature"}
        defaultName={signatureTarget === "contractor" ? contractorName : clientName}
      />

      {/* Client e-Signature Dispatch Modal */}
      <ClientEsignModal
        isOpen={isClientEsignModalOpen}
        onClose={() => setIsClientEsignModalOpen(false)}
        contractorName={contractorName}
        clientName={clientName}
        clientEmail={clientEmail}
        estimateNumber={estimateNumber}
        grandTotal={grandTotal}
        tradeName={trade.tradeName}
        onSignNow={() => {
          setSignatureTarget("client");
          setIsSignatureModalOpen(true);
        }}
      />
    </div>
  );
}
