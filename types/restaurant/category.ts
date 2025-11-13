import { ObjectId } from "../common/object-id";
import { Item } from "./item";

export interface Category {
  id: ObjectId;
  restaurantId: ObjectId;

  name: string;
  active: boolean;

  items?: Item[];
}
