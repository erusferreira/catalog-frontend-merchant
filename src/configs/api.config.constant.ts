import { ApiConfigInterface, AppAPIConfig } from "./api.config.interface";

export const APIConfig = {
  MERCHANT: {
    GET: (merchantId) => `/merchant/${merchantId}`,
  } as AppAPIConfig,
} as ApiConfigInterface;
