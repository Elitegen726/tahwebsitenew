
interface ContactMethodProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ href, icon, title, description, contact }) => (
  <a
    href={href}
    className="bg-white border-2 border-gray-200 hover:border-[#0089D0] p-8 rounded-2xl text-center transition-all hover:shadow-xl group"
  >
    <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-[#0089D0] group-hover:text-[#FDB913]">
      {title}
    </h3>
    <p className="text-gray-600 mb-2">{description}</p>
    <p className="text-lg font-semibold text-gray-900">{contact}</p>
  </a>
);

export default ContactMethod;
