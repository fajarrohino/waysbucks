import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Invoice } from "./Invoice";

@Entity({ name: "invoiceHistories" })
export class InvoiceHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoicehistores, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  invoice: Invoice;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
