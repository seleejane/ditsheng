import DashboardNav from "@/app/components/DashboardNav";
import BojanalaSavings from "@/app/components/Products/BojanalaSavings";
import Image from "next/image";

export default function BojanalaSavingsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <DashboardNav />
      <BojanalaSavings />

    </div>
  );
}