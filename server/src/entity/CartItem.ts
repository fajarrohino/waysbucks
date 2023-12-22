import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Toping } from "./Toping";
import { Product } from "./Product";
import { Cart } from "./Cart";

@Entity({ name: "cartitems" })
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qty: number;

  @Column()
  price: number;

  @OneToMany(() => Toping, (toping) => toping.cartitem, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  topings: Toping[];

  @OneToMany(() => Product, (product) => product.cart, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  products: Toping[];

  @OneToOne(() => Cart, (cart) => cart.cartItem, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  cart: Cart;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
