
interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => (
  <div className="bg-gray-50 p-8 rounded-xl">
    <h3 className="text-xl font-bold mb-4 text-[#0089D0]">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

export default ValueCard;
