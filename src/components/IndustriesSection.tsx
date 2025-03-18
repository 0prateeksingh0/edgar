import Banking from "@/assets/Banking.svg";
import Retail from "@/assets/Retail.svg";
import Dairy from "@/assets/Dairy.svg";
import Utilities from "@/assets/Utilities.svg";
import Micro from "@/assets/Micro.svg";
import Insurance from "@/assets/Insurance.svg";
import Bus from "@/assets/Bus.svg";
import Supply from "@/assets/Supply.svg";

const industries = [
  { name: "Banking", icon: Banking },
  { name: "Retail", icon: Retail },
  { name: "Dairy", icon: Dairy },
  { name: "Utilities", icon: Utilities },
  { name: "Micro Finance", icon: Micro },
  { name: "Insurance", icon: Insurance },
  { name: "Bus Ticketing", icon: Bus },
  { name: "Supply Chain", icon: Supply },
];
export default function IndustriesSection() {
  return (
    <section className="py-12 bg-blue-50 px-8 md:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-800 mb-8">
        Explore Our Industries
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {industries.map((item) => (
          <div
            key={item.name}
            className="bg-white w-32 h-32 rounded-xl shadow flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <img src={item.icon} alt={item.name} className="w-10 h-10 mb-2" />
            <p className="text-center text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
