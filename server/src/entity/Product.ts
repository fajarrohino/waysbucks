import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CartItem } from "./CartItem";
import { Toping } from "./Toping";
import { User } from "./User";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  attachment: string;

  @OneToMany(() => Toping, (toping) => toping.product, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  topings: Toping[];

  @ManyToOne(() => User, (user) => user.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @ManyToOne(() => CartItem, (cartItem) => cartItem.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  cart: CartItem[];

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
