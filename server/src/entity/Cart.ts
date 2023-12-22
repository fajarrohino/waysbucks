import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartItem } from "./CartItem";
import { Invoice } from "./Invoice";
import { User } from "./User";

@Entity({ name: "carts" })
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @OneToOne(() => CartItem, (cartItem) => cartItem.cart, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  cartItem: CartItem;

  @ManyToOne(() => User, (user) => user.carts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @OneToOne(() => Invoice, (invoice) => invoice.cart, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  invoice: Invoice;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
