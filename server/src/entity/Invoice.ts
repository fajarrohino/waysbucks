import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./Cart";
import { User } from "./User";
import { InvoiceHistory } from "./InvoiceHistory";
import { ConfirmationPayment } from "./ConfirmationPayment";
import { Payment } from "./Payment";

@Entity({ name: "invoices" })
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  status: string;

  @Column()
  receiverEmail: string;

  @Column()
  receiverPhone: number;

  @Column()
  waybill: number;

  @OneToOne(() => Cart, (cart) => cart.invoice, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  cart: Cart;

  @ManyToOne(() => User, (user) => user.invoices, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @OneToMany(() => InvoiceHistory, (invoicehistory) => invoicehistory.invoice, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  invoicehistores: InvoiceHistory[];

  @OneToOne(() => ConfirmationPayment, (confirmationPayment) => confirmationPayment.invoice, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  confirmationPayment: ConfirmationPayment;

  @OneToMany(() => Payment, (payment) => payment.invoice, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  payments: Payment[];

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
