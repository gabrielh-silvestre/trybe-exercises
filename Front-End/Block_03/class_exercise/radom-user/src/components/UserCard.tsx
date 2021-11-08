import React from 'react';

interface UserCardProps {
  user: {
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
  };
}

export default function UserCard(props: UserCardProps) {
  const {
    name: { first, last },
    registered: { age },
    email,
    picture: { large },
  } = props.user;

  return (
    <section>
      <div>
        <img src={large} alt={`${first} ${last}`} />
      </div>
      <div>
        <h3>{`${first} ${last}`}</h3>
        <p>{age}</p>
        <p>{email}</p>
      </div>
    </section>
  );
}
