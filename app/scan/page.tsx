"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Globe, CheckCircle2, LinkIcon, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ScanState = "idle" | "scanning" | "error" | "complete";

interface ScanStep {
  label: string;
  completed: boolean;
}

export default function ScanPage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [scannedUrl, setScannedUrl] = useState("");
  const [scanSteps, setScanSteps] = useState<ScanStep[]>([
    { label: "Analyzing for Critical SEO Errors...", completed: false },
    { label: "Checking for Costly Speed Issues...", completed: false },
    { label: "Finding broken links", completed: false },
  ]);
  const [progressPercent, setProgressPercent] = useState(0);

  const validateUrl = (input: string): boolean => {
    // Remove trailing whitespace
    const trimmed = input.trim();

    if (!trimmed) {
      setError("Please enter a URL");
      return false;
    }

    // Add protocol if missing
    let urlToTest = trimmed;
    if (!urlToTest.startsWith("http://") && !urlToTest.startsWith("https://")) {
      urlToTest = "https://" + urlToTest;
    }

    try {
      const parsedUrl = new URL(urlToTest);

      // Check if it has a valid hostname
      if (!parsedUrl.hostname || !parsedUrl.hostname.includes(".")) {
        setError("Invalid link. Please try again");
        return false;
      }

      // Check for valid TLD
      const parts = parsedUrl.hostname.split(".");
      const tld = parts[parts.length - 1];
      if (tld.length < 2) {
        setError("Invalid link. Please try again");
        return false;
      }

      setError("");
      return true;
    } catch {
      setError("Invalid link. Please try again");
      return false;
    }
  };

  const formatDisplayUrl = (input: string): string => {
    let urlToFormat = input.trim();
    if (
      !urlToFormat.startsWith("http://") &&
      !urlToFormat.startsWith("https://")
    ) {
      urlToFormat = "https://" + urlToFormat;
    }
    return urlToFormat;
  };

  const handleStartScan = () => {
    if (!validateUrl(url)) return;

    const formattedUrl = formatDisplayUrl(url);
    setScannedUrl(formattedUrl);
    setScanState("scanning");
    setProgressPercent(0);
    setScanSteps([
      { label: "Analyzing for Critical SEO Errors...", completed: false },
      { label: "Checking for Costly Speed Issues...", completed: false },
      { label: "Finding broken links", completed: false },
    ]);
  };

  // Simulate scanning progress
  useEffect(() => {
    if (scanState !== "scanning") return;

    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      if (stepIndex < scanSteps.length) {
        setScanSteps((prev) =>
          prev.map((step, i) =>
            i === stepIndex ? { ...step, completed: true } : step
          )
        );
        setProgressPercent(((stepIndex + 1) / scanSteps.length) * 100);
        stepIndex++;
      } else {
        clearInterval(stepInterval);
        // For now, simulate completion
        setTimeout(() => {
          router.push(`/scan/results?url=${encodeURIComponent(scannedUrl)}`);
        }, 500);
      }
    }, 2000);

    return () => clearInterval(stepInterval);
  }, [scanState, scanSteps.length, scannedUrl, router]);

  const handleTryAgain = () => {
    setScanState("idle");
    setError("");
    setProgressPercent(0);
    setScanSteps([
      { label: "Analyzing for Critical SEO Errors...", completed: false },
      { label: "Checking for Costly Speed Issues...", completed: false },
      { label: "Finding broken links", completed: false },
    ]);
  };

  const handleScanAnother = () => {
    setUrl("");
    setScannedUrl("");
    handleTryAgain();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large floating circles */}
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-[#FF5A3D]/5 blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-[#FF5A3D]/5 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-green-500/5 blur-3xl" />

        {/* Small floating dots */}
        <div className="absolute top-32 left-[15%] w-3 h-3 rounded-full bg-[#FF5A3D]/30 animate-pulse" />
        <div className="absolute top-48 right-[20%] w-2 h-2 rounded-full bg-[#FF5A3D]/40 animate-pulse delay-300" />
        <div className="absolute top-72 left-[10%] w-2 h-2 rounded-full bg-green-500/40 animate-pulse delay-500" />
        <div className="absolute bottom-48 right-[15%] w-3 h-3 rounded-full bg-[#FF5A3D]/30 animate-pulse delay-700" />
        <div className="absolute bottom-32 left-[25%] w-2 h-2 rounded-full bg-green-500/30 animate-pulse delay-1000" />

        {/* Decorative rings */}
        <div className="absolute top-1/4 right-[10%] w-16 h-16 rounded-full border border-[#FF5A3D]/10" />
        <div className="absolute top-1/4 right-[10%] w-24 h-24 rounded-full border border-[#FF5A3D]/5" />
        <div className="absolute bottom-1/3 left-[8%] w-12 h-12 rounded-full border border-green-500/10" />
        <div className="absolute bottom-1/3 left-[8%] w-20 h-20 rounded-full border border-green-500/5" />

        {/* Small crosses/plus signs */}
        <div className="absolute top-40 left-[30%] text-[#FF5A3D]/20 text-2xl font-light">
          +
        </div>
        <div className="absolute top-60 right-[25%] text-[#FF5A3D]/15 text-xl font-light">
          +
        </div>
        <div className="absolute bottom-40 right-[30%] text-green-500/20 text-2xl font-light">
          +
        </div>
        <div className="absolute bottom-60 left-[20%] text-green-500/15 text-xl font-light">
          +
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Idle State */}
          {scanState === "idle" && (
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
                  Improve your website with a quick scan
                </h1>
                <p className="text-muted-foreground text-lg">
                  Quick AI review with clear action steps.
                </p>
              </div>

              {/* URL Input */}
              <div className="space-y-4">
                <div
                  className={cn(
                    "flex items-center gap-3 border rounded-xl px-4 py-4 bg-background transition-colors",
                    error
                      ? "border-red-500"
                      : "border-border focus-within:border-[#FF5A3D]"
                  )}
                >
                  <Globe className="w-5 h-5 text-muted-foreground shrink-0" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      if (error) setError("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleStartScan();
                    }}
                    placeholder="https://example.com/page"
                    className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </p>
                )}

                <Button
                  onClick={handleStartScan}
                  className="cursor-pointer w-full bg-[#FF5A3D] hover:bg-[#FF5A3D]/90 text-white py-6 text-lg rounded-xl"
                >
                  Start Scan
                </Button>
              </div>

              {/* Info section */}
              <div className="mt-12 text-center">
                <div className="inline-flex flex-col items-center gap-4">
                  <Image
                    src="/assets/images/scan.png"
                    alt="Scan illustration"
                    width={128}
                    height={96}
                    className="opacity-60"
                  />
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-amber-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <p className="text-sm text-amber-800">
                    Join 2000+ business owners who have improved their sales
                    with Sitelytics.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Scanning State */}
          {scanState === "scanning" && (
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Scanning website...
              </h1>
              <p className="text-[#1a4d8c] text-lg font-medium mb-12">
                {scannedUrl}
              </p>

              {/* Progress Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  {/* Background circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-200"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className="text-[#22c55e] transition-all duration-500"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - progressPercent / 100)}`}
                    />
                  </svg>
                  {/* Checkmark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300",
                        progressPercent >= 100 ? "bg-[#22c55e]" : "bg-gray-200"
                      )}
                    >
                      <CheckCircle2
                        className={cn(
                          "w-8 h-8",
                          progressPercent >= 100
                            ? "text-white"
                            : "text-white/80"
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-8">
                Hang tight, it takes about 30-60 sec
              </p>

              {/* Scan steps */}
              <div className="space-y-4 max-w-md mx-auto">
                {scanSteps.map((step, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-xl border transition-all duration-300",
                      step.completed
                        ? "bg-green-50 border-green-200"
                        : "bg-green-50/50 border-green-100"
                    )}
                  >
                    <CheckCircle2
                      className={cn(
                        "w-5 h-5 shrink-0 transition-colors",
                        step.completed ? "text-green-600" : "text-green-400"
                      )}
                    />
                    <span
                      className={cn(
                        "text-left transition-colors",
                        step.completed ? "text-green-700" : "text-green-600"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error State */}
          {scanState === "error" && (
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm text-center">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center">
                  <LinkIcon
                    className="w-12 h-12 text-red-500 transform rotate-45"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Oops! URL Didn&apos;t Load
              </h1>

              <p className="text-muted-foreground mb-2">
                A broken or unreachable link prevented us from scanning this
                website.
              </p>
              <p className="text-muted-foreground mb-8">
                Please verify the URL and try once more.
              </p>

              <Button
                onClick={handleTryAgain}
                className="cursor-pointer w-full max-w-sm bg-[#FF5A3D] hover:bg-[#FF5A3D]/90 text-white py-6 text-lg rounded-xl"
              >
                Try Again
              </Button>
            </div>
          )}

          {/* Complete State - Temporary until results page is added */}
          {scanState === "complete" && (
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Scan Complete!
              </h1>

              <p className="text-muted-foreground mb-2">
                Successfully scanned{" "}
                <span className="text-[#1a4d8c] font-medium">{scannedUrl}</span>
              </p>
              <p className="text-muted-foreground mb-8">
                Results page coming soon...
              </p>

              <Button
                onClick={handleScanAnother}
                className="cursor-pointer w-full max-w-sm bg-[#FF5A3D] hover:bg-[#FF5A3D]/90 text-white py-6 text-lg rounded-xl"
              >
                Scan Another Website
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
