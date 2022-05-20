import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: '',
  })
  password!: boolean;
}
