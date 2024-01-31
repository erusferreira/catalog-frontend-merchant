import { atom, useAtom } from "jotai";

const authorized = atom(true);
export const useMerchantAuthorized = () => useAtom(authorized);
