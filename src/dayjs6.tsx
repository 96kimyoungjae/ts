import dayjs from "dayjs";
import _ from "lodash";

dayjs().add(1, "day");
dayjs().format("YYYY_MM_DD");

interface A {
  readonly length: number;
  readonly [n: number]: number;
}

const a: A = [1, 2, 34];

_.findIndex([1, 2, 3], (n) => n === 2);
