import type { SupplyProduct } from "../types";

type SupplySeed = {
  model: string;
  image: string;
  officialUrl: string;
  yield: string;
  genuine: { cartridge: string; color: SupplyProduct["color"]; price: string }[];
  genuineSet: { price: string };
  reman: { cartridge: string; color: SupplyProduct["color"]; price: string }[];
  remanSet: { price: string };
};

const cetImages: Record<NonNullable<SupplyProduct["color"]>, string> = {
  검정: "/images/toner-cet/black.png",
  파랑: "/images/toner-cet/cyan.png",
  빨강: "/images/toner-cet/magenta.png",
  노랑: "/images/toner-cet/yellow.png"
};
const cetSetImage = "/images/toner-cet/cmyk-set.png";

const seeds: SupplySeed[] = [
  {
    model: "D450",
    image: "/images/toner-cutouts/d450.png",
    officialUrl: "https://www.sindoh.com/support/download/d450",
    yield: "색상별 약 28,000매 (A4 5% 기준)",
    genuine: [
      { cartridge: "D450T28KK", color: "검정", price: "87,500원" },
      { cartridge: "D450T28KC", color: "파랑", price: "143,500원" },
      { cartridge: "D450T28KM", color: "빨강", price: "143,500원" },
      { cartridge: "D450T28KY", color: "노랑", price: "143,500원" }
    ],
    genuineSet: { price: "418,000원" },
    reman: [
      { cartridge: "D450T28KK", color: "검정", price: "33,890원" },
      { cartridge: "D450T28KC", color: "파랑", price: "43,000원" },
      { cartridge: "D450T28KM", color: "빨강", price: "43,000원" },
      { cartridge: "D450T28KY", color: "노랑", price: "43,000원" }
    ],
    remanSet: { price: "168,990원" }
  },
  {
    model: "D320",
    image: "/images/toner-cutouts/d320.png",
    officialUrl: "https://www.sindoh.com/support/download/d320",
    yield: "색상별 약 24,000매 (A4 5% 기준)",
    genuine: [
      { cartridge: "D320T24KK", color: "검정", price: "69,500원" },
      { cartridge: "D320T24KC", color: "파랑", price: "134,000원" },
      { cartridge: "D320T24KM", color: "빨강", price: "134,000원" },
      { cartridge: "D320T24KY", color: "노랑", price: "134,000원" }
    ],
    genuineSet: { price: "473,000원" },
    reman: [
      { cartridge: "D320T24KK", color: "검정", price: "48,700원" },
      { cartridge: "D320T24KC", color: "파랑", price: "55,800원" },
      { cartridge: "D320T24KM", color: "빨강", price: "55,800원" },
      { cartridge: "D320T24KY", color: "노랑", price: "55,800원" }
    ],
    remanSet: { price: "216,100원" }
  },
  {
    model: "D470",
    image: "/images/toner-cutouts/d470.png",
    officialUrl: "https://www.sindoh.com/support/download/d470",
    yield: "색상별 약 28,000매 (A4 5% 기준)",
    genuine: [
      { cartridge: "D470T28KK", color: "검정", price: "92,000원" },
      { cartridge: "D470T28KC", color: "파랑", price: "178,000원" },
      { cartridge: "D470T28KM", color: "빨강", price: "178,000원" },
      { cartridge: "D470T28KY", color: "노랑", price: "178,000원" }
    ],
    genuineSet: { price: "626,000원" },
    reman: [
      { cartridge: "D470T28KK", color: "검정", price: "60,800원" },
      { cartridge: "D470T28KC", color: "파랑", price: "60,800원" },
      { cartridge: "D470T28KM", color: "빨강", price: "60,800원" },
      { cartridge: "D470T28KY", color: "노랑", price: "60,800원" }
    ],
    remanSet: { price: "243,200원" }
  }
];

export const supplies: SupplyProduct[] = seeds.flatMap((seed) => [
  ...seed.genuine.map((item) => ({ id: `${seed.model.toLowerCase()}-${item.cartridge}-genuine`, model: seed.model, name: `신도리코 ${seed.model} ${item.cartridge} ${item.color} 정품 토너`, kind: "정품" as const, format: "단품" as const, ...item, spec: `${item.cartridge} · ${seed.yield}`, description: `${seed.model} 전용 정품 ${item.color} 토너입니다. 안정적인 색상 표현과 기기 호환성을 확인할 수 있습니다.`, image: seed.image, officialUrl: seed.officialUrl })),
  { id: `${seed.model.toLowerCase()}-genuine-set`, model: seed.model, name: `신도리코 ${seed.model} 정품 토너 4색 세트`, kind: "정품" as const, format: "4색 세트" as const, cartridge: `${seed.model}T28CMYK`, price: seed.genuineSet.price, spec: `검정·파랑·빨강·노랑 4개 · ${seed.yield}`, description: `${seed.model}에 사용하는 정품 토너 4색 세트입니다.`, image: seed.image, officialUrl: seed.officialUrl },
  ...seed.reman.map((item) => ({ id: `${seed.model.toLowerCase()}-${item.cartridge}-reman`, model: seed.model, name: `신도리코 ${seed.model} ${item.cartridge} ${item.color} 고퀄리티 CET 재생토너`, kind: "재생" as const, format: "단품" as const, ...item, price: "가격 문의", spec: `${item.cartridge} · ${seed.yield}`, description: `${seed.model} 호환 고퀄리티 CET 재생토너입니다.`, image: cetImages[item.color ?? "검정"], officialUrl: seed.officialUrl })),
  { id: `${seed.model.toLowerCase()}-reman-set`, model: seed.model, name: `신도리코 ${seed.model} 고퀄리티 CET 재생토너 4색 세트`, kind: "재생" as const, format: "4색 세트" as const, cartridge: `${seed.model}T28CMYK`, price: "가격 문의", spec: `검정·파랑·빨강·노랑 4개 · ${seed.yield}`, description: `${seed.model}에 사용하는 고퀄리티 CET 재생토너 4색 세트입니다.`, image: cetSetImage, officialUrl: seed.officialUrl }
]);

export const supplyModels = [...new Set(supplies.map((supply) => supply.model))];
