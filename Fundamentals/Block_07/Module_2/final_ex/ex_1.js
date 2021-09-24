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
  const clientOrder= Object.assign({}, order['order']);
  const deliveryInfo = Object.assign({}, clientOrder['delivery']);
  const clientInfo = {name: order['name'], phoneNumber: order['phoneNumber']};

  console.log(`Olá ${deliveryInfo['deliveryPerson']}, entrega para ${clientInfo.name}, Telefone: ${clientInfo.phoneNumber}, ${clientAddress['street']}, Nº ${clientAddress['number']}, AP: ${clientAddress['apartment']}`);
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  const clientName = order.name;
  const clientOrder = Object.keys(Object.assign({}, order['order']['pizza'], order['order']['drinks']));
  order.payment = 50;
  const priceOrder = order.payment;

  console.log(`Olá ${clientName}, o total do seu pedido de ${clientOrder[0]}, ${clientOrder[1]} e Coca-cola Zero é de R$ ${priceOrder},00`);
}

orderModifier(order);
