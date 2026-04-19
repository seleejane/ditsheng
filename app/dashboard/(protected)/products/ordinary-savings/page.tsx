import DashboardNav from "@/app/components/DashboardNav";
import OrdinarySavings from "@/app/components/Products/OrdinarySavings";
import Image from "next/image";

export default function OrdinarySavingsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <DashboardNav />  
      <OrdinarySavings />
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