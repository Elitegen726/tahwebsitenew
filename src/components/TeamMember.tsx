
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, imageUrl }) => (
  <div className="text-center">
    <Image
      src={imageUrl}
      alt={name}
      width={128}
      height={128}
      className="w-32 h-32 rounded-full mx-auto mb-4"
    />
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-600">{title}</p>
  </div>
);

export default TeamMember;
