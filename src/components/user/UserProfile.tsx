import React from 'react';

interface UserProfileProps {
  user: {
    username: string;
    fullName: string;
    email: string;
    address: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Información Personal</h2>
      <div className="space-y-2">
        <p><strong>Nombre de Usuario:</strong> {user.username}</p>
        <p><strong>Nombre Completo:</strong> {user.fullName}</p>
        <p><strong>Correo:</strong> {user.email}</p>
        <p><strong>Dirección:</strong> {user.address}</p>
        <button className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600">
          Editar Información
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
