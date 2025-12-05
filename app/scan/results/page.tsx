"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ArrowLeft,
  RefreshCw,
  X,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Severity = "critical" | "warning" | "good";

interface AuditIssue {
  id: string;
  title: string;
  severity: Severity;
  score: number;
  description: string;
  businessImpact: string[];
  problems: string[];
  suggestion: string;
}

// Mock audit data based on the designs
const mockAuditData: AuditIssue[] = [
  {
    id: "speed",
    title: "Slow Loading Speed",
    severity: "critical",
    score: 35,
    description: "Customers leave because your site takes 8 seconds to load.",
    businessImpact: [
      "More sales due to fast speed",
      "Build trust and credibility",
      "Stand out from competitors",
    ],
    problems: [
      "Heavy images and media - Large or unoptimized images/videos slow down loading",
      "Too many Script - Excessive JavaScript or third party plugins add weight and delay",
      "Missing lazy loading - Loading all assets at once on an old/low configuration device can slow down your page",
      "Lack of visual hierarchy - Visitors can't quickly see what's important, increasing bounce rate",
    ],
    suggestion:
      "A few targeted changes can make your website attract more customers, only if you know where to start. If you want a personalized review, you can get one for free from our website.",
  },
  {
    id: "mobile",
    title: "Not Mobile-Friendly",
    severity: "warning",
    score: 40,
    description:
      "You are losing customers because your site is not user-friendly.",
    businessImpact: [
      "More sales due to fast speed",
      "Build trust and credibility",
      "Stand out from competitors",
    ],
    problems: [
      "Hard to tap buttons - Buttons aren't sized or spaced for easy mobile tapping",
      "Missing features - Website search or navigation missing or hard to use",
      "Low Quality - Images look poor, content is slow to read/view on mobile, making your website less trusty",
      "Outdated content - Hard to find price list, available offerings, updated information",
    ],
    suggestion:
      "A few targeted changes can make your website attract more customers, only if you know where to start. If you want a personalized review, you can get one for free from our website.",
  },
  {
    id: "visibility",
    title: "Visibility",
    severity: "good",
    score: 70,
    description: "Your business isn't showing up where it matters most.",
    businessImpact: [
      "More sales due to fast speed",
      "Build trust and credibility",
      "Stand out from competitors",
    ],
    problems: [
      "Weak or confusing page titles - Titles aren't clear which impacts your rankings",
      "Low Quality - Images aren't present, relevant information, making your website less trusty",
      "Outdated content - Hard to find price list, available offerings, updated information",
    ],
    suggestion:
      "A few targeted changes can make your website attract more customers, only if you know where to start. If you want a personalized review, you can get one for free from our website.",
  },
];

function ResultsContent() {
  const searchParams = useSearchParams();
  const scannedUrl = searchParams.get("url") || "https://www.fashionsense.web";
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null);
  const [markedIssues, setMarkedIssues] = useState<Set<string>>(new Set());

  // Show modal after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!emailSubmitted) {
        setShowModal(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [emailSubmitted]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Invalid email. Please try again");
      return;
    }
    setEmailError("");
    setEmailSubmitted(true);
    setShowModal(false);
  };

  const toggleIssue = (id: string) => {
    setExpandedIssue(expandedIssue === id ? null : id);
  };

  const toggleMarkIssue = (id: string) => {
    const newMarked = new Set(markedIssues);
    if (newMarked.has(id)) {
      newMarked.delete(id);
    } else {
      newMarked.add(id);
    }
    setMarkedIssues(newMarked);
  };

  const markAllIssues = () => {
    if (markedIssues.size === mockAuditData.length) {
      setMarkedIssues(new Set());
    } else {
      setMarkedIssues(new Set(mockAuditData.map((issue) => issue.id)));
    }
  };

  const getSeverityStyles = (severity: Severity) => {
    switch (severity) {
      case "critical":
        return {
          badge: "bg-red-100 text-red-700",
          bar: "bg-red-500",
          text: "Critical",
        };
      case "warning":
        return {
          badge: "bg-orange-100 text-orange-700",
          bar: "bg-orange-500",
          text: "Warning",
        };
      case "good":
        return {
          badge: "bg-green-100 text-green-700",
          bar: "bg-green-500",
          text: "Good",
        };
    }
  };

  const overallScore = 50;
  const scanDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Extract domain for display
  const displayUrl = scannedUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-[#FF5A3D]/5 blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-[#FF5A3D]/5 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute top-32 left-[15%] w-3 h-3 rounded-full bg-[#FF5A3D]/30 animate-pulse" />
        <div className="absolute top-48 right-[20%] w-2 h-2 rounded-full bg-[#FF5A3D]/40 animate-pulse delay-300" />
        <div className="absolute bottom-48 right-[15%] w-3 h-3 rounded-full bg-[#FF5A3D]/30 animate-pulse delay-700" />
        <div className="absolute top-40 left-[30%] text-[#FF5A3D]/20 text-2xl font-light">
          +
        </div>
        <div className="absolute bottom-40 right-[30%] text-green-500/20 text-2xl font-light">
          +
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back button and Re-run */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/scan"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <Link
              href={"/scan"}
              className="inline-flex items-center gap-2 text-[#FF5A3D] hover:text-[#FF5A3D]/80 transition-colors font-medium"
            >
              <RefreshCw className="w-4 h-4" />
              Re-run Audit
            </Link>
          </div>

          {/* Audit Summary Card */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Audit Summary
            </h1>
            <p className="text-[#1a4d8c] text-center font-medium mb-8">
              {displayUrl}
            </p>

            {/* Score Circle */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-32 h-32 mb-4">
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
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    className="text-[#FF5A3D]"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - overallScore / 100)}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#FF5A3D]">
                    {overallScore}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">Website Score</p>
              <p className="text-muted-foreground text-xs">
                Scan date: {scanDate}
              </p>
            </div>

            <p className="text-center text-muted-foreground mb-8 max-w-md mx-auto">
              Your website performs well, but has several issues worth fixing.
            </p>

            {/* Mark all */}
            <div className="flex justify-end mb-4">
              <button
                onClick={markAllIssues}
                className="text-sm text-[#1a4d8c] hover:underline font-medium"
              >
                {markedIssues.size === mockAuditData.length
                  ? "Unmark all"
                  : "Mark all"}
              </button>
            </div>

            {/* Issue Cards */}
            <div className="space-y-4">
              {mockAuditData.map((issue) => {
                const styles = getSeverityStyles(issue.severity);
                const isExpanded = expandedIssue === issue.id;
                const isMarked = markedIssues.has(issue.id);

                return (
                  <div
                    key={issue.id}
                    className={cn(
                      "border rounded-xl overflow-hidden transition-all",
                      isMarked
                        ? "border-gray-300 bg-gray-50"
                        : "border-border bg-card"
                    )}
                  >
                    {/* Issue Header */}
                    <div className="p-4 md:p-5">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isMarked}
                            onChange={() => toggleMarkIssue(issue.id)}
                            className="w-5 h-5 rounded border-gray-300 text-[#FF5A3D] focus:ring-[#FF5A3D]"
                          />
                          <h3
                            className={cn(
                              "font-semibold text-lg",
                              isMarked && "line-through text-muted-foreground"
                            )}
                          >
                            {issue.title}
                          </h3>
                        </div>
                        <span
                          className={cn(
                            "px-3 py-1 rounded-full text-sm font-medium",
                            styles.badge
                          )}
                        >
                          {styles.text}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        Score: {issue.score}/100
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {issue.description}
                      </p>

                      <button
                        onClick={() => toggleIssue(issue.id)}
                        className="inline-flex items-center gap-1 text-sm text-[#1a4d8c] hover:underline font-medium"
                      >
                        View Details
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="border-t border-border bg-gray-50/50 p-4 md:p-5">
                        {/* Score Bar */}
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">{issue.title}</span>
                            <span className="font-semibold">
                              {issue.score}/100
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={cn("h-full rounded-full", styles.bar)}
                              style={{ width: `${issue.score}%` }}
                            />
                          </div>
                        </div>

                        {/* What this would do for your business */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">
                            What this would do for your business
                          </h4>
                          <ul className="space-y-2">
                            {issue.businessImpact.map((impact, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span className="text-muted-foreground">•</span>
                                {impact}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Problems */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Problems</h4>
                          <ul className="space-y-3">
                            {issue.problems.map((problem, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                              >
                                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  {problem}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Suggestion */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-3">Suggestion</h4>
                          <p className="text-sm text-muted-foreground">
                            {issue.suggestion}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-sm text-amber-800 text-center">
                Get your Sales up with a free review from an expert.
              </p>
            </div>

            {/* Continue Button */}
            <Button
              onClick={() => setShowModal(true)}
              className="w-full mt-6 bg-[#FF5A3D] hover:bg-[#FF5A3D]/90 text-white py-6 text-lg rounded-xl"
            >
              Continue
            </Button>
          </div>
        </div>
      </main>

      {/* Email Capture Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-center mb-2">
              Your website can be better
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Don&apos;t miss a chance to stay ahead. Get free website
              monitoring and insights.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Enter Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  placeholder="dartenarew@gmail.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-background outline-none transition-colors",
                    emailError
                      ? "border-red-500"
                      : "border-border focus:border-[#FF5A3D]"
                  )}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <Button
                onClick={handleEmailSubmit}
                className="w-full bg-[#FF5A3D] hover:bg-[#FF5A3D]/90 text-white py-4 rounded-xl"
              >
                Submit
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Get your Sales up with a free review from an expert.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF5A3D]"></div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
