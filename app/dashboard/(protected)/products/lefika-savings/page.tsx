import DashboardNav from "@/app/components/DashboardNav";
import LefikaSavings from "@/app/components/Products/LefikaSavings";
import Image from "next/image";

export default function LefikaSavingsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <DashboardNav />
      <LefikaSavings />

    </div>
  );
}