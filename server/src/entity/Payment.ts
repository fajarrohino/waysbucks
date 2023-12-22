import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Invoice } from "./Invoice";
import { User } from "./User";

@Entity({ name: "payments" })
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bank: string;

  @Column()
  amount: string;

  @Column()
  accountName: string;

  @Column()
  accountNumber: number;

  @Column()
  status: string;

  @ManyToOne(() => Invoice, (invoice) => invoice.payments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  invoice: Invoice;

  @ManyToOne(() => User, (user) => user.payments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
