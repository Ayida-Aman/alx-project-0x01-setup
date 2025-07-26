export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface UserProps {
  Welcome: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
    phone: string;
    website: string;
    company: string;
  };
  Geo: {
    lat: string;
    lng: string;
  };
  Address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  Company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}