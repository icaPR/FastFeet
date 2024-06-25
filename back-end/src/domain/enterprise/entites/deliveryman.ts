import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface DeliverymanProps {
  name: string;
  cpf: string;
  password: string;
}

export class Deliveryman extends Entity<DeliverymanProps> {
  static create(props: DeliverymanProps, id?: UniqueEntityID) {
    const deliveryman = new Deliveryman(props, id);
    return deliveryman;
  }
}
