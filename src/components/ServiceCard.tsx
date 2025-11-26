
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, href }) => (
  <Link
    href={href}
    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group group-hover:scale-105"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FDB913] to-[#FFB84D] flex items-center justify-center text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-0 text-[#0089D0] group-hover:text-[#FDB913] transition-colors">
        {title}
      </h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </Link>
);

export default ServiceCard;
