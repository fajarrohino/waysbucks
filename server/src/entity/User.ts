import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { Invoice } from "./Invoice";
import { Payment } from "./Payment";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  picture: string;

  @Column()
  phoneNumber: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => Product, (product) => product.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  products: Product[];

  @OneToMany(() => Cart, (cart) => cart.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  carts: Cart[];

  @OneToMany(() => Invoice, (invoice) => invoice.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  invoices: Invoice[];

  @OneToMany(() => Payment, (payment) => payment.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  payments: Payment[];

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
