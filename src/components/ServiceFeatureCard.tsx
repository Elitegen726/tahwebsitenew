
import Link from 'next/link';

interface ServiceFeatureCardProps {
  title: string;
  icon: string;
  description: string;
  href: string;
  features: string[];
}

const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({ title, icon, description, href, features }) => (
  <Link
    href={href}
    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#0089D0] hover:shadow-xl transition-all group"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="text-5xl">{icon}</div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-[#0089D0] group-hover:text-[#FDB913] transition-colors mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <ul className="space-y-2 ml-16">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2 text-gray-700">
          <span className="text-[#FDB913] mt-1">✓</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-6 ml-16 text-[#0089D0] font-semibold group-hover:text-[#FDB913] transition-colors">
      Meer informatie →
    </div>
  </Link>
);

export default ServiceFeatureCard;
