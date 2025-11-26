
interface AdditionalServiceProps {
  title: string;
  description: string;
}

const AdditionalService: React.FC<AdditionalServiceProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl">
    <h3 className="text-xl font-bold mb-2 text-[#0089D0]">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default AdditionalService;
