import React from 'react';
import '../css/checkout.css';
import { getLocalState } from '../services/localStorageServices';

let totalPrice = 0;

const statesOfBrazil = [
  'Estado',
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      productsOnCart: [],
    };
  }

  getProducts = () => {
    const products = getLocalState('productsOnCart');
    this.setState({ productsOnCart: products });
  }

  componentDidMount = () => {
    this.getProducts();
  }

  render() {
    const { productsOnCart } = this.state;
    totalPrice = 0;

    return (
      <div>
        <h3>Página de Checkout</h3>
        <section className="section-productReview-container">
          <h4>Revise Seus Produtos</h4>
          {
            productsOnCart.map(({ id, thumbnail, title, quantity, price }) => {
              totalPrice += (quantity * price);
              return (
                <section className="itemForReview-container" key={ id }>
                  <img className="thumbnail" src={ thumbnail } alt="Imagem do produto" />
                  <h5 className="product-title">{ title }</h5>
                  <p className="quantity">{ quantity }</p>
                  <div className="price">{ quantity * price }</div>
                </section>
              );
            })
          }
          <div className="total-price">
            <span className="total">Total:</span>
            <span>{ totalPrice.toFixed(2) }</span>
          </div>
        </section>
        <section className="buyer-information-container">
          <h4>Informações do Comprador</h4>
          <form>
            <input
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome Completo"
            />
            <input
              data-testid="checkout-email"
              type="email"
              placeholder="Email"
            />
            <input
              data-testid="checkout-cpf"
              type="text"
              placeholder="CPF"
            />
            <input
              data-testid="checkout-phone"
              type="text"
              placeholder="Telefone"
            />
            <input
              data-testid="checkout-cep"
              type="text"
              placeholder="CEP"
            />
            <input
              type="text"
              placeholder="Cidade"
            />
            <select name="Estado" id="state" required>
              {
                statesOfBrazil
                  .map((index) => <option key={ index } value="">{index}</option>)
              }
            </select>
            <input
              type="number"
              placeholder="Número"
            />
            <input
              data-testid="checkout-address"
              type="text"
              placeholder="Endereço"
            />
            <input
              type="text"
              placeholder="Complemento"
            />
          </form>
        </section>
        <section className="formOfPayment-container">
          <h4>Método de pagamento</h4>
          <label htmlFor="ticket">
            <input type="radio" name="formOfPayment" id="ticket" />
            Boleto
          </label>
          <label htmlFor="visa">
            <input type="radio" name="formOfPayment" id="visa" />
            Visa
          </label>
          <label htmlFor="MasterCard">
            <input type="radio" name="formOfPayment" id="MasterCard" />
            MasterCard
          </label>
        </section>
        <section className="button-container">
          <button type="submit">Finalizar</button>
        </section>
      </div>
    );
  }
}

export default Checkout;
