import React from "react";
import { useAuth } from "@/hooks/useAuth";

const UserProfile = () => {
  const { userInfo, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;
  if (!userInfo) return <p>No user information available.</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="font-semibold mb-4 text-2xl">Información Personal</h1>
      <p>
        <strong>Nombre de Usuario:</strong> {userInfo.username}
      </p>
      <p>
        <strong>Nombre Completo:</strong> {userInfo.fullName}
      </p>
      <p>
        <strong>Correo:</strong> {userInfo.email}
      </p>
      <p>
        <strong>Dirección:</strong> {userInfo.address}
      </p>
    </div>
  );
};

export default UserProfile;
