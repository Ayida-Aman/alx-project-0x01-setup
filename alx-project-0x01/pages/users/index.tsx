import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  console.log(posts)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">User Content</h1>
        <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts?.map(({ Address, Welcome, Company, Geo }: UserProps, key: number) => (
              <UserCard Welcome={Welcome} Address={Address} Company={Company} Geo={Geo} key={key} />
            ))
          }
        </div>
      </main>
    </div>
  )
}


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