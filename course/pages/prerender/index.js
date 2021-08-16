import React from "react";
import Users from "../../components/users";
const Members = ({ members }) => {
  return (
    <div>
      <h1> List of Users</h1>
      {members.map((user) => {
        return (
          <div key={user.id}>
            <Users user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default Members;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      members: data,
    },
  };
}
