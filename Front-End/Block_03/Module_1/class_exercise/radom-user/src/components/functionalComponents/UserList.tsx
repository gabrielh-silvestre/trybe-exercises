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
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    const res = await fetch('https://randomuser.me/api/?results=20');
    const data = await res.json();
    setLoading(false);
    setUsersData(data.results);
  }

  useEffect(() => {
    setLoading(true);
    fetchUsers();
  }, []);

  return loading ? (
    <p>Loading</p>
  ) : (
    <article>
      {usersData.map((user) => (
        <UserCard user={user} />
      ))}
    </article>
  );
}
