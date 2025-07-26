// components/common/UserModal.tsx
import React, { useState } from "react";
import { UserProps } from "@/interfaces";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser?: (user: UserProps) => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: UserProps = {
      Welcome: {
        id: Date.now(),
        name: formData.name,
        username: formData.username,
        email: formData.email,
        address: {
          street: "",
          suite: "",
          city: formData.city,
          zipcode: 0,
          geo: { lat: 0, lng: 0 },
        },
        phone: 0,
        website: "",
        company: {
          name: formData.companyName,
          catchPhrase: "",
          bs: "",
        },
      },
      Address: {
        street: "",
        suite: "",
        city: formData.city,
        zipcode: 0,
      },
      Geo: {
        lat: 0,
        lng: 0,
      },
      Company: {
        name: formData.companyName,
        catchPhrase: "",
        bs: "",
      },
    };

    onAddUser?.(newUser);
    onClose();
    setFormData({
      name: "",
      username: "",
      email: "",
      city: "",
      companyName: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 animate-fadeIn">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New User</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            Save User
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserModal;