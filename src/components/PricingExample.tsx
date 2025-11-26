
interface PricingExampleProps {
  service: string;
  time: string;
  price: string;
}

const PricingExample: React.FC<PricingExampleProps> = ({ service, time, price }) => (
  <div className="bg-gray-50 p-6 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div className="flex-1">
      <h3 className="font-bold text-lg text-gray-900">{service}</h3>
      <p className="text-gray-600">Gemiddelde duur: {time}</p>
    </div>
    <div className="text-2xl font-bold text-[#0089D0]">{price}</div>
  </div>
);

export default PricingExample;
