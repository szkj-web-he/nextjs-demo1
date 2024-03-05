/**
 * @file 事件更新
 * @date 2024-02-27
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-27
 */

import { useLayoutEffect } from "react";
import { createUpdateEffect } from "./functions/createUpdateEffect";

export default createUpdateEffect(useLayoutEffect);
