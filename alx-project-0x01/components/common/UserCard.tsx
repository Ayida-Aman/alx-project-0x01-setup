import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ Address, Welcome, Company, Geo }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{Welcome.name}</h2>
      </div>
      <p className="text-gray-600">{Address.city}</p>
      <p className="text-gray-600">{Address.street}</p>
      <p className="text-gray-600">{Address.zipcode}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Company: {Company.name}</span>
        <span>Catch Phrase: {Company.catchPhrase}</span>
      </div>
    </div>
  );
};

export default UserCard;
