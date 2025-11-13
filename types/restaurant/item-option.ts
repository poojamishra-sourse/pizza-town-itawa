import { ObjectId } from "../common/object-id";

export interface ItemOption {
  id: ObjectId;
  groupId: ObjectId;

  label: string;
  price: number;
  sortOrder: number;
  active: boolean;
}
