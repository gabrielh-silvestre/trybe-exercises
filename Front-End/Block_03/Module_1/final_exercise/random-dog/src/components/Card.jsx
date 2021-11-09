import React, { useEffect, useState } from 'react';
import Button from './Button';

const dogBreedRegex = new RegExp(/(?<=breeds\/).*(?=\/)/g);

export default function Card() {
  const [dogs, setDogs] = useState([]);
  const [manyDogs, setManyDogs] = useState(1);

  function dogContructor(data) {
    return {
      dogImage: data,
      dogBreed: data.match(dogBreedRegex)[0],
    };
  }

  async function fetchDog() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setDogs([...dogs, dogContructor(data.message)]);
  }

  function handleClick() {
    setManyDogs((prevState) => prevState + 1);
  }

  useEffect(() => {
    fetchDog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manyDogs]);

  return (
    <section>
      <Button callback={handleClick} btnText="Mais doguinhos" />
      {dogs.map(({ dogImage, dogBreed }) => (
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
