import { useMemo, useState } from "react";

const WA_NUMBER = "50259491380";

type QtyKey = "one" | "two" | "three" | "wifi" | "zigbee" | "ir";

export default function Cotizador() {
  const [qty, setQty] = useState<Record<QtyKey, number>>({ one: 0, two: 0, three: 0, wifi: 0, zigbee: 0, ir: 0 });
  const [stairs, setStairs] = useState("No");
  const update = (key: QtyKey, value: string) => { const n = Number.parseInt(value, 10); setQty((current) => ({ ...current, [key]: Number.isFinite(n) ? Math.min(50, Math.max(0, n)) : 0 })); };
  const totals = useMemo(() => {
    const switches = qty.one + qty.two + qty.three;
    const sensors = qty.wifi + qty.zigbee;
    const hardware = qty.one * 220 + qty.two * 250 + qty.three * 290 + qty.wifi * 150 + qty.zigbee * 210 + qty.ir * 125;
    const installation = switches * 150 + sensors * 100;
    const gateway = qty.zigbee > 0 ? 180 : 0;
    return { switches, sensors, hardware, installation, gateway, total: hardware + installation + gateway };
  }, [qty]);
  const money = (value: number) => `Q${Math.round(value).toLocaleString("es-GT")}`;
  const requestQuote = () => {
    const message = ["Hola, quiero cotizar un proyecto con AlbaDomoticaGT.", "", `Interruptores: ${qty.one} de 1 vía, ${qty.two} de 2 vías, ${qty.three} de 3 vías.`, `Sensores WiFi: ${qty.wifi}. Sensores Zigbee: ${qty.zigbee}.`, `Controles IR: ${qty.ir}.`, `Iluminación de gradas: ${stairs}.`, `Total estimado: ${money(totals.total)}.`, "", "Quisiera una cotización final."].join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  const Row = ({ label, price, id }: { label: string; price: number; id: QtyKey }) => (
    <div className="grid grid-cols-[minmax(0,1fr)_88px] items-center gap-3 py-2"><div><div className="font-semibold text-[#171717]">{label}</div><div className="text-xs text-[#777]">{money(price)} c/u</div></div><input type="number" min={0} max={50} value={qty[id]} onChange={(e) => update(id, e.target.value)} className="h-11 w-full rounded-lg border border-[#aaa] bg-white px-3 text-center text-base text-[#171717] outline-none focus:border-[#b68a28]" aria-label={`Cantidad de ${label}`} /></div>
  );
  return (
    <section id="cotizador" className="bg-[#f7f4ee] py-16 sm:py-20"><div className="mx-auto max-w-3xl px-5 sm:px-6"><div className="mb-8 text-center"><p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#b68a28]">Cotizador AlbaDomoticaGT</p><h2 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">Calcula tu proyecto</h2><p className="mx-auto mt-3 max-w-xl text-[#666]">Arma tu solución y conoce una inversión estimada antes de solicitar tu cotización.</p></div>
      <div className="space-y-4"><div className="rounded-2xl border border-[#ddd8ce] bg-white p-5 sm:p-6"><h3 className="mb-3 text-lg font-bold">1. Interruptores inteligentes</h3><Row label="1 vía" price={220} id="one" /><Row label="2 vías" price={250} id="two" /><Row label="3 vías" price={290} id="three" /><p className="mt-2 text-xs text-[#777]">Instalación + configuración: Q150 por interruptor.</p></div>
        <div className="rounded-2xl border border-[#ddd8ce] bg-white p-5 sm:p-6"><h3 className="mb-3 text-lg font-bold">2. Iluminación de gradas</h3><p className="mb-4 text-sm text-[#555]">¿Deseas automatizar la iluminación de las gradas?</p><div className="flex gap-6 text-sm">{['Sí', 'No'].map((value) => <label key={value} className="flex min-h-11 cursor-pointer items-center gap-2"><input type="radio" name="stairs" value={value} checked={stairs === value} onChange={() => setStairs(value)} />{value}</label>)}</div><p className="mt-2 text-xs text-[#777]">Esta opción requiere evaluación técnica y no agrega un cargo automático.</p></div>
        <div className="rounded-2xl border border-[#ddd8ce] bg-white p-5 sm:p-6"><h3 className="mb-3 text-lg font-bold">3. Sensores inteligentes</h3><Row label="Sensor WiFi" price={150} id="wifi" /><Row label="Sensor Zigbee" price={210} id="zigbee" /><p className="mt-2 text-xs text-[#777]">Instalación + configuración + escenas necesarias: Q100 por sensor.</p><p className="mt-1 text-xs text-[#777]">Si utilizas Zigbee, se agrega 1 Gateway por proyecto: Q180.</p></div>
        <div className="rounded-2xl border border-[#ddd8ce] bg-white p-5 sm:p-6"><h3 className="mb-3 text-lg font-bold">4. Control inteligente</h3><Row label="Control IR" price={125} id="ir" /><p className="mt-2 text-xs text-[#777]">Para TV, aire acondicionado, ventiladores y otros equipos compatibles.</p></div>
        <div className="rounded-2xl border border-[#d7c89f] bg-[#fffdf7] p-5 sm:p-6"><h3 className="text-lg font-bold">Resumen de tu proyecto</h3><div className="mt-4 space-y-1 text-sm text-[#666]"><div className="flex justify-between gap-4"><span>Interruptores</span><span>{money(qty.one * 220 + qty.two * 250 + qty.three * 290)}</span></div><div className="flex justify-between gap-4"><span>Instalación y configuración</span><span>{money(totals.installation)}</span></div><div className="flex justify-between gap-4"><span>Sensores</span><span>{money(qty.wifi * 150 + qty.zigbee * 210)}</span></div><div className="flex justify-between gap-4"><span>Gateway Zigbee</span><span>{money(totals.gateway)}</span></div><div className="flex justify-between gap-4"><span>Controles IR</span><span>{money(qty.ir * 125)}</span></div></div><div className="my-4 border-t border-[#ddd8ce]" /><div className="text-xs uppercase tracking-wider text-[#777]">Inversión estimada</div><div className="mt-1 text-4xl font-extrabold text-[#171717]">{money(totals.total)}</div><p className="mt-3 rounded-xl bg-white p-3 text-xs leading-5 text-[#777]">La cotización es estimada. La cotización final puede variar según las condiciones de instalación.</p><button type="button" onClick={requestQuote} className="mt-4 min-h-12 w-full rounded-xl bg-[#171717] px-5 py-3 font-bold text-white transition hover:bg-[#333]">SOLICITAR COTIZACIÓN POR WHATSAPP</button></div>
      </div></div></section>
  );
}
