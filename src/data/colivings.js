// Coliving listing data (used in ColivingsZaragoza page)
export const COLIVINGS_LIST = [
  {
    name: 'Coliving Zaragoza Centro',
    location: 'Centro, Zaragoza',
    price: 'Desde 450 EUR/mes',
    href: '/coliving-zaragoza',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Zonas comunes' },
    ],
  },
  {
    name: 'Coliving Sagasta Premium',
    location: 'Paseo Sagasta, Zaragoza',
    price: 'Desde 550 EUR/mes',
    href: '/coliving-zaragoza-sagasta',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Premium' },
    ],
  },
  {
    name: 'Coliving Universidad TB11',
    location: 'Zona Universidad, Zaragoza',
    price: 'Desde 400 EUR/mes',
    href: '/coliving-zaragoza-tb11',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Estudiantes' },
    ],
  },
  {
    name: 'Coliving Universidad JJR5',
    location: 'Zona Universidad, Zaragoza',
    price: 'Desde 400 EUR/mes',
    href: '/coliving-zaragoza-jjr5',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Zonas comunes' },
    ],
  },
  {
    name: 'Coliving Pedro Cerbuna',
    location: 'Calle Pedro Cerbuna, Zaragoza',
    price: 'Desde 420 EUR/mes',
    href: '/coliving-zaragoza-pc29',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Zonas comunes' },
    ],
  },
  {
    name: 'Coliving Universidad CA47',
    location: 'Zona Universidad, Zaragoza',
    price: 'Desde 410 EUR/mes',
    href: '/coliving-zaragoza-ca47',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Zonas comunes' },
    ],
  },
]

// Coliving detail data (used in individual coliving pages)
export const COLIVINGS_DETAIL = {
  '/coliving-zaragoza': {
    name: 'Coliving Zaragoza Centro',
    tagline: 'El mejor coliving en Zaragoza',
    location: 'Centro, Zaragoza',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&fm=webp',
  },
  '/coliving-zaragoza-sagasta': {
    name: 'Coliving Sagasta Premium',
    tagline: 'Coliving Premium en el centro de Zaragoza',
    location: 'Paseo Sagasta, Zaragoza',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&fm=webp',
  },
  '/coliving-zaragoza-tb11': {
    name: 'Coliving Universidad TB11',
    tagline: 'Coliving zona universidad-centro',
    location: 'Zona Universidad, Zaragoza',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&fm=webp',
  },
  '/coliving-zaragoza-jjr5': {
    name: 'Coliving Universidad JJR5',
    tagline: 'Coliving zona centro universitaria',
    location: 'Zona Universidad, Zaragoza',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&fm=webp',
  },
  '/coliving-zaragoza-pc29': {
    name: 'Coliving Pedro Cerbuna',
    tagline: 'Coliving en Pedro Cerbuna',
    location: 'Calle Pedro Cerbuna, Zaragoza',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&fm=webp',
  },
  '/coliving-zaragoza-ca47': {
    name: 'Coliving Universidad CA47',
    tagline: 'Coliving zona universidad-centro',
    location: 'Zona Universidad, Zaragoza',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&fm=webp',
  },
}

// Building facade colivings (used in GestionZaragoza page)
export const BUILDING_COLIVINGS = [
  {
    name: 'Coliving CA53.1',
    img: '/images/colivings-zaragoza/coliving-01.webp',
    desc: 'Centro de Zaragoza, zona residencial-universitaria, a 5 min del hospital.',
  },
  {
    name: 'Coliving PSA31',
    img: '/images/colivings-zaragoza/coliving-02.webp',
    desc: 'Premium en Paseo de Sagasta, zona residencial-comercial.',
  },
  {
    name: 'Coliving TB11',
    img: '/images/colivings-zaragoza/coliving-03.webp',
    desc: 'Zona centro-universidad, perfecto para trabajadores y estudiantes.',
  },
  {
    name: 'Coliving CA47-49',
    img: '/images/colivings-zaragoza/coliving-04.webp',
    desc: 'Centro de Zaragoza, ideal para estudiantes o trabajadores del hospital.',
  },
  {
    name: 'Coliving JJR5',
    img: '/images/colivings-zaragoza/coliving-05.webp',
    desc: 'Exclusivo coliving de tres habitaciones, zona centro-universidad.',
  },
  {
    name: 'Coliving PC29',
    img: '/images/colivings-zaragoza/coliving-06.webp',
    desc: 'Calle Pedro Cerbuna, ambiente y vida universitaria.',
  },
  {
    name: 'Coliving STDJ20',
    img: '/images/colivings-zaragoza/coliving-07.webp',
    desc: 'Zona residencial-universitaria, a 7 min andando del hospital.',
  },
  {
    name: 'Coliving CA53.P',
    img: '/images/colivings-zaragoza/coliving-08.webp',
    desc: 'Centro de Zaragoza, zona residencial-universitaria.',
  },
  {
    name: 'LOFT CA12',
    img: '/images/colivings-zaragoza/coliving-09.webp',
    desc: 'Loft independiente con decoración cuidada al detalle.',
  },
]
