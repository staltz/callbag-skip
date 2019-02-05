import { Source } from "callbag";

declare const skip: <T>(max: number) => (source: Source<T>) => Source<T>;
export default skip;
