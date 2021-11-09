import React, { useEffect, useState } from 'react';

const dogBreedRegex = new RegExp(/(?<=breeds\/).*(?=\/)/g);

export default function Card() {
  const [dogs, setDogs] = useState([]);

  async function fetchDog() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setDogs([
      {
        ...dogs,
        dog: dogContructor(data.message),
      },
    ]);
  }

  function dogContructor(data) {
    return {
      dogImage: data,
      dogBreed: data.match(dogBreedRegex),
    };
  }

  useEffect(() => {
    fetchDog();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {dogs.map(({ dog: { dogImage, dogBreed } }) => (
        <div key={dogImage}>
          <div>
            <img src={dogImage} alt={dogBreed} />
          </div>
          <div>
            <h2>{dogBreed}</h2>
            <p>Dog Name</p>
          </div>
        </div>
      ))}
    </section>
  );
}
