
interface OpeningHoursProps {
  openingHours: {
    day: string;
    hours: string;
  }[];
}

const OpeningHours: React.FC<OpeningHoursProps> = ({ openingHours }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md">
    <div className="space-y-4">
      {openingHours.map((item) => (
        <div
          key={item.day}
          className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
        >
          <span className="font-semibold text-gray-700">{item.day}</span>
          <span className="text-[#0089D0] font-bold">{item.hours}</span>
        </div>
      ))}
    </div>
    <p className="mt-6 text-center text-gray-600 text-sm">
      Voor spoedgevallen zijn we ook buiten deze tijden bereikbaar
    </p>
  </div>
);

export default OpeningHours;
