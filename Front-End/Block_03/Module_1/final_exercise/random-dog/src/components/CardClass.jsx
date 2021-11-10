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
    this.saveDogs = this.saveDogs.bind(this);
  }

  componentDidMount() {
    localStorage.getItem('dogs')
      ? this.setState({ dogs: JSON.parse(localStorage.getItem('dogs'))})
      : this.fetchDog();
  }

  componentDidUpdate() {
    this.saveDogs();
  }

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

  saveDogs() {
    const { dogs } = this.state;
    localStorage.setItem('dogs', JSON.stringify(dogs));
  }

  dogContructor(data) {
    const { dogName } = this.props;
    return {
      dogImage: data,
      dogBreed: data.match(dogBreedRegex)[0],
      dogName,
    };
  }

  render() {
    const { dogs, loading } = this.state;

    return loading ? (
      <p>Loading...</p>
    ) : (
      <section>
        <Button callback={this.handleClick} btnText="Mais doguinhos" />
        {dogs.map(({ dogImage, dogBreed, dogName }) => (
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
              <p>{dogName}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
