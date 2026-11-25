"use client";

import { useState, useEffect } from "react";

export interface ContractorProfile {
  id?: number;
  companyName?: string;
  email?: string;
  phone?: string;
  license?: string;
  trade?: string;
  isPro?: boolean;
  logoUrl?: string;
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
      if (parsed?.isPro === true) return true;
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

export function setContractorProfile(profile: ContractorProfile | null) {
  if (typeof window === "undefined") return;
  try {
    if (profile) {
      localStorage.setItem("cm_contractor_profile", JSON.stringify(profile));
      if (profile.isPro) {
        localStorage.setItem("cm_is_pro", "true");
      }
      if (profile.logoUrl) {
        localStorage.setItem("cm_company_logo", profile.logoUrl);
      }
    } else {
      localStorage.removeItem("cm_contractor_profile");
      localStorage.removeItem("cm_is_pro");
      localStorage.removeItem("cm_company_logo");
    }
    window.dispatchEvent(new Event("cm_pro_status_changed"));
  } catch {}
}

export function setProStatus(isPro: boolean, profile?: ContractorProfile) {
  if (typeof window === "undefined") return;
  try {
    if (isPro) {
      localStorage.setItem("cm_is_pro", "true");
      if (profile) {
        const merged = { ...getContractorProfile(), ...profile, isPro: true };
        localStorage.setItem("cm_contractor_profile", JSON.stringify(merged));
      }
    } else {
      localStorage.removeItem("cm_is_pro");
      const current = getContractorProfile();
      if (current) {
        current.isPro = false;
        localStorage.setItem("cm_contractor_profile", JSON.stringify(current));
      }
    }
    window.dispatchEvent(new Event("cm_pro_status_changed"));
  } catch {}
}

export async function logoutContractor() {
  try {
    await fetch("/api/auth/logout", { method: "POST" });
  } catch {}
  setContractorProfile(null);
}

export function useProStatus() {
  const [isPro, setIsPro] = useState(false);
  const [profile, setProfile] = useState<ContractorProfile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => {
      const p = getContractorProfile();
      setProfile(p);
      setIsPro(getProStatus());
      setIsLoggedIn(Boolean(p?.email));
    };

    check();
    setMounted(true);

    // Sync with server session if present
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data?.user) {
          setContractorProfile(data.user);
          setIsLoggedIn(true);
          setProfile(data.user);
          if (data.user.isPro) setIsPro(true);
        }
      })
      .catch(() => {});

    const handleUpdate = () => check();
    window.addEventListener("cm_pro_status_changed", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("cm_pro_status_changed", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return { isPro, profile, isLoggedIn, mounted };
}
