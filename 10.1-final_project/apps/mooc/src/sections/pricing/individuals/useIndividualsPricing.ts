import { useState } from "react";
import { PriceInfo } from "../companies/useCompaniesPricing";
import { Benefit } from "../shared/Benefit";

import { useIndividualsBenefits } from "./useIndividualsBenefits";

type PricePeriod = "monthly" | "yearly";

export function useIndividualsPricing(): {
  benefits: Benefit[];
  price: PriceInfo;
  setPricePeriod: (pricePeriod: PricePeriod) => void;
} {
  const [pricePeriod, setPricePeriod] = useState<PricePeriod>("yearly");

  const benefits = useIndividualsBenefits(pricePeriod === "yearly");

  const prices: {
    [key: string]: PriceInfo;
  } = {
    monthly: {
      amount: "29€",
      totalAmount: "29€",
      period: "mes",
    },
    yearly: {
      amount: "24€",
      totalAmount: "299€",
      period: "mes · pago anual",
      tooltip: "299€ al año",
    },
  };

  return {
    benefits,
    price: prices[pricePeriod],
    setPricePeriod,
  };
}
