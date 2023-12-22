import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartItem } from "./CartItem";
import { Product } from "./Product";

@Entity({ name: "topings" })
export class Toping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  attachment: string;

  @ManyToOne(() => Product, (product) => product.topings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  product: Product;

  @ManyToOne(() => CartItem, (CartItem) => CartItem.topings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  cartitem: CartItem;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
