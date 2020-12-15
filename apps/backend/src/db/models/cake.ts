import { Table, Column, Model, CreatedAt, UpdatedAt, PrimaryKey, DataType, Unique } from 'sequelize-typescript';

@Table({ tableName: 'cake' })
export class Cake extends Model {

  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string

  @Unique
  @Column
  name: string;

  @Column
  comment: string;

  @Column({ field: 'image_url' })
  imageUrl: string;

  @Column({ field: 'yum_factor' })
  yumFactor: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;
}