export interface Client {
  id: string;
  name: string;
  shortName: string;
  category: 'Energi & Power' | 'Agrikultur & FMCG' | 'Data Center & IT' | 'Konstruksi & Properti' | 'Finansial & Korporasi';
  logo: string;
  desc: string;
  tag: string;
}

export const clients: Client[] = [
  {
    id: 'astra-agro',
    name: 'PT Astra Agro Lestari Tbk',
    shortName: 'Astra Agro Lestari',
    category: 'Agrikultur & FMCG',
    logo: '/logos/astra-agro-lestari.webp',
    desc: 'Konglomerasi perkebunan kelapa sawit & agribisnis terkemuka dari Astra Group.',
    tag: 'Perkebunan & Sawit',
  },
  {
    id: 'sewatama',
    name: 'PT Sumberdaya Sewatama',
    shortName: 'Sewatama',
    category: 'Energi & Power',
    logo: '/logos/sewatama.webp',
    desc: 'Pelopor penyedia solusi ketenagalistrikan terpadu dan rental genset industri.',
    tag: 'Power Solution',
  },
  {
    id: 'pdg',
    name: 'Princeton Digital Group (PDG)',
    shortName: 'Princeton Digital Group',
    category: 'Data Center & IT',
    logo: '/logos/princeton-digital-group.webp',
    desc: 'Pengembang dan operator infrastruktur pusat data (hyperscale data center) pan-Asia.',
    tag: 'Data Center Hyperscale',
  },
  {
    id: 'nabati',
    name: 'PT Kaldu Sari Nabati Indonesia',
    shortName: 'Nabati Group',
    category: 'Agrikultur & FMCG',
    logo: '/logos/nabati.webp',
    desc: 'Produsen industri makanan ringan dan wafer terkemuka berskala internasional.',
    tag: 'FMCG Manufaktur',
  },
  {
    id: 'sagara',
    name: 'PT Sagara Yasa Ananta',
    shortName: 'Sagara Yasa Ananta',
    category: 'Energi & Power',
    logo: '/logos/sagara-yasa-ananta.webp',
    desc: 'Perusahaan spesialis rekayasa teknik kelistrikan dan instalasi industri.',
    tag: 'Teknik Kelistrikan',
  },
  {
    id: 'dksh',
    name: 'DKSH Indonesia',
    shortName: 'DKSH',
    category: 'Finansial & Korporasi',
    logo: '/logos/dksh.webp',
    desc: 'Grup global penyedia jasa ekspansi pasar dan distribusi industri asal Swiss.',
    tag: 'Distribusi Global',
  },
  {
    id: 'nusa-kirana',
    name: 'PT Nusa Kirana Real Estate',
    shortName: 'PT Nusa Kirana',
    category: 'Konstruksi & Properti',
    logo: '/logos/nusa-kirana.webp',
    desc: 'Pengembang real estate dan kawasan residensial terintegrasi di Indonesia.',
    tag: 'Properti & Developer',
  },
  {
    id: 'oto',
    name: 'PT Summit OTO Finance',
    shortName: 'OTO Finance',
    category: 'Finansial & Korporasi',
    logo: '/logos/summit-oto-finance.webp',
    desc: 'Lembaga pembiayaan otomotif dan korporasi terkemuka berskala nasional.',
    tag: 'Pembiayaan & Finansial',
  },
  {
    id: 'sbm',
    name: 'PT Saka Baja Metalindo',
    shortName: 'Saka Baja Metalindo',
    category: 'Konstruksi & Properti',
    logo: '/logos/saka-baja-metalindo.webp',
    desc: 'Perusahaan manufaktur konstruksi baja, fabrikasi, dan industri logam berat.',
    tag: 'Fabrikasi Baja',
  },
  {
    id: 'canhe',
    name: 'CANHE 安和',
    shortName: 'CANHE',
    category: 'Agrikultur & FMCG',
    logo: '/logos/canhe.webp',
    desc: 'Perusahaan manufaktur dan rantai pasok industri berstandar mutu tinggi.',
    tag: 'Manufaktur Industri',
  },
  {
    id: 'digitas',
    name: 'Digitas Indonesia',
    shortName: 'Digitas',
    category: 'Finansial & Korporasi',
    logo: '/logos/digitas.webp',
    desc: 'Agensi teknologi digital, data, dan transformasi modern internasional.',
    tag: 'Teknologi & Digital',
  },
  {
    id: 'atlas-copco',
    name: 'Atlas Copco',
    shortName: 'Atlas Copco',
    category: 'Energi & Power',
    logo: '/logos/atlas-copco.webp',
    desc: 'Penyedia kompresor, generator, dan solusi daya industri global terkemuka.',
    tag: 'Peralatan Industri',
  },
  {
    id: 'ghitech',
    name: 'GHITECH',
    shortName: 'GHITECH',
    category: 'Data Center & IT',
    logo: '/logos/ghitech.webp',
    desc: 'Perusahaan solusi teknologi industri dan sistem rekayasa modern.',
    tag: 'Teknologi Industri',
  },
];

export const clientCategories = [
  'Semua',
  'Energi & Power',
  'Data Center & IT',
  'Agrikultur & FMCG',
  'Konstruksi & Properti',
  'Finansial & Korporasi',
] as const;
