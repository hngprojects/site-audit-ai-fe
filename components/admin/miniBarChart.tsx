// Mini Bar Chart Component
export const weeklyData = [
  { day: "Mon", scans: 1234, leads: 45 },
  { day: "Tue", scans: 1456, leads: 52 },
  { day: "Wed", scans: 1678, leads: 38 },
  { day: "Thu", scans: 1890, leads: 67 },
  { day: "Fri", scans: 2100, leads: 71 },
  { day: "Sat", scans: 1567, leads: 43 },
  { day: "Sun", scans: 1234, leads: 31 },
];

export function MiniBarChart({ data }: { data: typeof weeklyData }) {
  const maxScans = Math.max(...data.map((d) => d.scans));

  return (
    <div className="flex items-end justify-between gap-2 h-32">
      {data.map((item, i) => (
        <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full flex flex-col items-center gap-1">
            <div
              className="w-full bg-[#FF5A3D] rounded-t-md transition-all duration-500 hover:bg-[#FF5A3D]/80"
              style={{
                height: `${(item.scans / maxScans) * 80}px`,
                animationDelay: `${i * 100}ms`,
              }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{item.day}</span>
        </div>
      ))}
    </div>
  );
}
