import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";
import UserModal from "@/components/common/UserModal";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [users, setUsers] = useState<UserProps[]>(posts);

  const handleAddUser = (newUser: UserProps) => {
  setUsers((prev) => [newUser, ...prev]);
};

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              Welcome={user.name}
              Address={user.address}
              Company={user.company}
              Geo={user.address.geo}
            />
          ))}
        </div>

        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddUser={handleAddUser}
        />
      </main>
    </div>
  );
};


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const rawUsers = await response.json();

  const posts: UserProps[] = rawUsers.map((user: any) => ({
    Welcome: {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address, 
      phone: user.phone,
      website: user.website,
      company: user.company, 
    },
    Address: {
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
    Geo: {
      lat: user.address.geo.lat,
      lng: user.address.geo.lng,
    },
    Company: {
      name: user.company.name,
      catchPhrase: user.company.catchPhrase,
      bs: user.company.bs,
    },
  }));

  return {
    props: {
      posts,
    },
  };
}

export default Users;