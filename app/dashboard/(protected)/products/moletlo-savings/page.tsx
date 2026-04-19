import DashboardNav from "@/app/components/DashboardNav";
import MoletloSavings from "@/app/components/Products/MoletloSavings";
import Image from "next/image";

export default function MoletoSavingsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <DashboardNav />
      <MoletloSavings />

    </div>
  );
}