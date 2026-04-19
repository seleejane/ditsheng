// app/(protected)/layout.tsx

import Sidebar3 from "@/app/components/Sidebar3";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-64 h-full overflow-y-auto bg-gray-900 text-white">
        <Sidebar3 />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 h-full overflow-y-auto bg-gray-100">
        {children}
      </div>

    </div>
  );
}