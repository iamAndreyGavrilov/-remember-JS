import { addOne as add1, sum } from "./first";
import { firstName } from "./second";

// импорт экспорта по умолчанию и стандартный импорт
// import print, {n} from "./third";

console.log("hello", firstName);
console.log(sum(1, 5));
console.log(add1(5));
