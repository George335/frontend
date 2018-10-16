import { ParentEntity } from './parentEntity.model';
export class UserModel extends ParentEntity {
    public id: number;
    public name: string;
    public salary: number;
}
