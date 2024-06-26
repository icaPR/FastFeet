import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface OrdersProps {
  recipient: string;
  address: {
    street: string;
    number: string;
    state: string;
    city: string;
    cep: string;
  };
}

export class Orders extends Entity<OrdersProps> {
  get recipient() {
    return this.props.recipient;
  }
  get address() {
    return this.props.address;
  }

  static create(props: OrdersProps, id?: UniqueEntityID) {
    const orders = new Orders(props, id);
    return orders;
  }
}
