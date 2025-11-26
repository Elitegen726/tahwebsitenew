
interface CertificationProps {
  name: string;
}

const Certification: React.FC<CertificationProps> = ({ name }) => (
  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
    <p className="font-semibold">{name}</p>
  </div>
);

export default Certification;
