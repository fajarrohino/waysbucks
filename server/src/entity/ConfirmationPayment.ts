import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Invoice } from "./Invoice";

@Entity({ name: "confirmationPayments" })
export class ConfirmationPayment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  attachment: string;

  @Column()
  bank: string;

  @OneToOne(() => Invoice, (invoice) => invoice.confirmationPayment, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  invoice: Invoice;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
