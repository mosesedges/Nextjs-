import React from "react";

const Users = ({ user }) => {
  const { name, username, email } = user;
  return (
    <div>
      <h3>{username}</h3>
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};

export default Users;
