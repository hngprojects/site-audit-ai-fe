import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// Animated counter hook
export function useAnimatedCounter(end: number, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  color,
  delay,
}: {
  title: string;
  value: number | string;
  change: number;
  icon: React.ElementType;
  color: string;
  delay: number;
}) {
  const numericValue =
    typeof value === "number" ? value : Number.parseFloat(value);
  const animatedValue = useAnimatedCounter(
    typeof value === "number" ? value : 0,
    1500
  );
  const isPositive = change >= 0;

  return (
    <div
      className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        <div
          className={cn(
            "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
            isPositive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          )}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {Math.abs(change)}%
        </div>
      </div>
      <p className="text-3xl font-bold mb-1">
        {typeof value === "number" ? animatedValue.toLocaleString() : value}
      </p>
      <p className="text-muted-foreground text-sm">{title}</p>
    </div>
  );
}
