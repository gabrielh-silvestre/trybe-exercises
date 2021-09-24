const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const clientAddress = Object.assign({}, order['address']);
  const clienteOrder= Object.assign({}, order['order']);
  const deliveryInfo = Object.assign({}, clienteOrder['delivery']);
  const clientInfo = {name: order['name'], phoneNumber: order['phoneNumber']};

  console.log(`Olá ${deliveryInfo['deliveryPerson']}, entrega para ${clientInfo.name}, Telefone: ${clientInfo.phoneNumber}, ${clientAddress['street']}, Nº ${clientAddress['number']}, AP: ${clientAddress['apartment']}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

// orderModifier(order);
