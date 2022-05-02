import countries from "../../../data/countries.json";

interface Country {
  code: string;
  name: string;
}

export function useCountries(): { countries: Country[]; defaultCountry: string } {
  return { countries, defaultCountry: "ES" };
}
