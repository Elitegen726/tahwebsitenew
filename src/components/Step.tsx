
interface StepProps {
  step: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ step, title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
      {step}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Step;
