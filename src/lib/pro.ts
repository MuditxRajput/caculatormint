"use client";

import { useState, useEffect } from "react";

export interface ContractorProfile {
  companyName?: string;
  email?: string;
  phone?: string;
  trade?: string;
  selectedFeature?: string;
  registeredAt?: string;
}

export function getProStatus(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const isPro = localStorage.getItem("cm_is_pro");
    if (isPro === "true") return true;
    const profile = localStorage.getItem("cm_contractor_profile");
    if (profile) {
      const parsed = JSON.parse(profile);
      if (parsed?.email) return true;
    }
  } catch {}
  return false;
}

export function getContractorProfile(): ContractorProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("cm_contractor_profile");
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

export function setProStatus(isPro: boolean, profile?: ContractorProfile) {
  if (typeof window === "undefined") return;
  try {
    if (isPro) {
      localStorage.setItem("cm_is_pro", "true");
      if (profile) {
        localStorage.setItem("cm_contractor_profile", JSON.stringify(profile));
      }
    } else {
      localStorage.removeItem("cm_is_pro");
      localStorage.removeItem("cm_contractor_profile");
      localStorage.removeItem("cm_company_logo");
    }
    window.dispatchEvent(new Event("cm_pro_status_changed"));
  } catch {}
}

export function useProStatus() {
  const [isPro, setIsPro] = useState(false);
  const [profile, setProfile] = useState<ContractorProfile | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => {
      const pro = getProStatus();
      setIsPro(pro);
      setProfile(getContractorProfile());
    };

    check();
    setMounted(true);

    const handleUpdate = () => check();
    window.addEventListener("cm_pro_status_changed", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("cm_pro_status_changed", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return { isPro, profile, mounted };
}
