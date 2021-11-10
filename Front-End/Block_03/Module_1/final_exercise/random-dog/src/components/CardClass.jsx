import React, { Component } from 'react';
import Button from './Button';

const dogBreedRegex = new RegExp(/(?<=breeds\/).*(?=\/)/g);

export default class CardClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      loading: false,
    };

    this.dogContructor = this.dogContructor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(_, nextState) {
    return nextState.dogs.every(
      ({ dogBreed }) => !dogBreed.includes('terrier')
    );
  }

  componentDidUpdate(_, prevState) {}

  handleClick() {
    this.fetchDog();
  }

  fetchDog() {
    this.setState({ loading: true }, async () => {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();

      if (!data.message.includes('terrier')) {
        this.setState((prevState) => ({
          dogs: [...prevState.dogs, this.dogContructor(data.message)],
        }));
      }

      this.setState({ loading: false });
    });
  }

  dogContructor(data) {
    return {
      dogImage: data,
      dogBreed: data.match(dogBreedRegex)[0],
    };
  }

  render() {
    const { dogs, loading } = this.state;

    return loading ? (
      <p>Loading...</p>
    ) : (
      <section>
        <Button callback={this.handleClick} btnText="Mais doguinhos" />
        {dogs.map(({ dogImage, dogBreed }) => (
          <div key={dogImage}>
            <div>
              <img
                src={dogImage}
                alt={dogBreed}
                style={{ maxWidth: '250px' }}
              />
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
}
