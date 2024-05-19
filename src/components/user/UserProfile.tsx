import React, { useState } from 'react';

interface UserProfileProps {
  user: {
    username: string;
    fullName: string;
    email: string;
    address: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);
  const [currentUser, setCurrentUser] = useState(user);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };

  const handleEditClick = () => {
    if (isEditing) {
      // Guardar los cambios
      setCurrentUser(editableUser);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Información Personal</h2>
      <div className="space-y-2">
        <p>
          <strong>Nombre de Usuario:</strong>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={editableUser.username}
              onChange={handleInputChange}
              className="ml-2 p-1 border rounded"
            />
          ) : (
            ` ${currentUser.username}`
          )}
        </p>
        <p>
          <strong>Nombre Completo:</strong>
          {isEditing ? (
            <input
              type="text"
              name="fullName"
              value={editableUser.fullName}
              onChange={handleInputChange}
              className="ml-2 p-1 border rounded"
            />
          ) : (
            ` ${currentUser.fullName}`
          )}
        </p>
        <p>
          <strong>Correo:</strong>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editableUser.email}
              onChange={handleInputChange}
              className="ml-2 p-1 border rounded"
            />
          ) : (
            ` ${currentUser.email}`
          )}
        </p>
        <p>
          <strong>Dirección:</strong>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={editableUser.address}
              onChange={handleInputChange}
              className="ml-2 p-1 border rounded"
            />
          ) : (
            ` ${currentUser.address}`
          )}
        </p>
        <button
          onClick={handleEditClick}
          className="mt-4 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
        >
          {isEditing ? 'Guardar' : 'Editar Información'}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
