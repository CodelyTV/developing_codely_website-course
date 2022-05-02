import { useState } from "react";

import { useCompaniesBenefits } from "./useCompaniesBenefits";
import { Benefit } from "../shared/Benefit";

export interface PriceInfo {
  amount: string;
  totalAmount: string;
  period: string;
  tooltip?: string;
}

interface Tier {
  from: number;
  to?: number;
  amountPerUnit: number;
  amountPerUnitWithVAT: number;
}

const tiers: Tier[] = [
  {
    from: 0,
    to: 2,
    amountPerUnit: 247.11,
    amountPerUnitWithVAT: 299.0,
  },
  {
    from: 3,
    to: 10,
    amountPerUnit: 197.52,
    amountPerUnitWithVAT: 239.0,
  },
  {
    from: 11,
    to: 25,
    amountPerUnit: 180.99,
    amountPerUnitWithVAT: 219.0,
  },
  {
    from: 26,
    amountPerUnit: 164.46,
    amountPerUnitWithVAT: 199.0,
  },
];

function tierContainsQuantity(tier: Tier, quantity: number) {
  return (
    (quantity >= tier.from && tier.to !== undefined && quantity <= tier.to) ||
    (quantity >= tier.from && tier.to === undefined)
  );
}

function pricePerMonth(amount: number) {
  return amount / 12;
}

function format(amount: number) {
  return new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function useCompaniesPricing(initialAmount = 10): {
  benefits: Benefit[];
  setEmployeeAmount: (employeeAmount: number) => void;
  price: PriceInfo;
  employeeAmount: number;
} {
  const [employeeAmount, setEmployeeAmount] = useState(initialAmount);
  const benefits = useCompaniesBenefits(employeeAmount);

  const tierForQuantity = tiers.find((tier) => tierContainsQuantity(tier, employeeAmount)) as Tier;
  const total = tierForQuantity.amountPerUnitWithVAT * employeeAmount;
  const formattedTotal = format(total);
  const formattedItemAmount = format(pricePerMonth(tierForQuantity.amountPerUnit));

  const price = {
    amount: `${formattedItemAmount}€`,
    totalAmount: `${formattedTotal}€`,
    period: "mes / empleado",
    tooltip: `Total ${formattedTotal}€ al año (IVA incluido)`,
  };

  return {
    benefits,
    setEmployeeAmount,
    price,
    employeeAmount,
  };
}
