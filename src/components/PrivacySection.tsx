
interface PrivacySectionProps {
  title: string;
  children: React.ReactNode;
}

const PrivacySection: React.FC<PrivacySectionProps> = ({ title, children }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">{title}</h2>
    <div className="prose prose-lg max-w-none text-gray-700">{children}</div>
  </div>
);

export default PrivacySection;
