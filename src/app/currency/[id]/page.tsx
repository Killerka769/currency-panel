import CurrencyPageClient from './CurrencyPageClient';

export async function generateStaticParams() {
  const res = await fetch('https://api.frankfurter.app/currencies');
  if (!res.ok) {
    return [];
  }
  const currencies = await res.json();
  return Object.keys(currencies).map(currency => ({
    id: currency,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <CurrencyPageClient id={id} />;
}
