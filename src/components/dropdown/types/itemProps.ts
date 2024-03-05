/**
 * @file
 * @date 2024-02-27
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-27
 */

import { TriggerProps } from "./trigger";

export interface ItemProps {
  clickId?: string;
  contextmenuId?: string;
  disable?: boolean;
  trigger?: TriggerProps | TriggerProps[];
}
