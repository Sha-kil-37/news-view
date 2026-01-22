"use client";

interface Props {
  onChange: (country: string) => void;
}

const countries = [
  { code: "us", name: "USA" },
  { code: "in", name: "India" },
  { code: "gb", name: "UK" },
  { code: "bd", name: "Bangladesh" },
];
//
export default function CountrySelector({ onChange }: Props) {
  return (
    <select
      className="border p-2 rounded"
      onChange={(e) => onChange(e.target.value)}
    >
      {countries.map((c) => (
        <option key={c.code} value={c.code}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
