import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

interface UserCardProps {
  name: {
    first: string;
    last: string;
  };
  registered: {
    age: number;
  };
  email: string;
  picture: {
    large: string;
  };
}

export default function UserList() {
  const [usersData, setUsersData] = useState<UserCardProps[]>([]);

  async function fetchUsers() {
    const res = await fetch('https://randomuser.me/api/?results=20');
    const data = await res.json();
    setUsersData(data.results);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <article>
      {usersData.map((user) => (
        <UserCard user={user} />
      ))}
    </article>
  );
}
