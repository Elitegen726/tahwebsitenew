
interface GuaranteeProps {
  title: string;
  description: string;
}

const Guarantee: React.FC<GuaranteeProps> = ({ title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-black">
      ✓
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Guarantee;
