import DashboardNav from "@/app/components/DashboardNav";
import RetirementSavings from "@/app/components/Products/RetirementSavings";
import Image from "next/image";

export default function RetirementSavingsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <DashboardNav />  
      <RetirementSavings />
        {/* Background Image 
        <Image
            src="/Savings-Schemes.webp"
            alt="Savings"
            fill
            className="object-cover rounded-2xl"
            priority
        />
        */}
    </div>
  );
}