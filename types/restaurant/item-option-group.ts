import { ObjectId } from "../common/object-id";
import { ItemOption } from "./item-option";

export interface ItemOptionGroup {
  id: ObjectId;
  itemId: ObjectId;

  name: string;
  multiple: boolean;
  required: boolean;
  sortOrder: number;

  options?: ItemOption[];
}
