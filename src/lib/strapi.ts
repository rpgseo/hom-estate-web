const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337'
const STRAPI_TOKEN = import.meta.env.STRAPI_API_TOKEN || ''

interface StrapiResponse<T> {
  data: T
  meta: { pagination?: { page: number; pageSize: number; pageCount: number; total: number } }
}

async function fetchStrapi<T>(endpoint: string, query: string = ''): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_URL}/api${endpoint}${query ? `?${query}` : ''}`

  const headers: Record<string, string> = {}
  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`
  }

  const res = await fetch(url, { headers })
  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.status} ${res.statusText} on ${endpoint}`)
  }
  return res.json()
}

/** Build full media URL from Strapi media object */
export function getStrapiMedia(media: any): string | null {
  if (!media) return null
  const { url } = media
  if (url.startsWith('http')) return url
  return `${STRAPI_URL}${url}`
}

// --- Properties ---

export async function getProperties() {
  return fetchStrapi<any[]>('/properties', 'populate=*&sort=order:asc')
}

export async function getPropertyBySlug(slug: string) {
  return fetchStrapi<any[]>('/properties', `filters[slug][$eq]=${slug}&populate=*`)
}

export async function getPropertiesByCity(citySlug: string) {
  return fetchStrapi<any[]>('/properties', `filters[city][slug][$eq]=${citySlug}&populate=*&sort=order:asc`)
}

export async function getPropertiesForFacade() {
  return fetchStrapi<any[]>('/properties', 'populate=*&sort=order:asc')
}

// --- Rooms ---

export async function getRoomsByProperty(propertyDocumentId: string) {
  return fetchStrapi<any[]>('/rooms', `filters[property][documentId][$eq]=${propertyDocumentId}&populate=*`)
}

// --- Blog ---

export async function getBlogPosts() {
  return fetchStrapi<any[]>('/blog-posts', 'populate=*&sort=date:desc')
}

export async function getBlogPostBySlug(slug: string) {
  return fetchStrapi<any[]>('/blog-posts', `filters[slug][$eq]=${slug}&populate=*`)
}

// --- Cities ---

export async function getCities() {
  return fetchStrapi<any[]>('/cities', 'populate=*')
}

// --- Bookings (read-only for public) ---

export async function getBookingsByRoom(roomDocumentId: string) {
  return fetchStrapi<any[]>('/bookings', `filters[room][documentId][$eq]=${roomDocumentId}&filters[status][$ne]=cancelled&fields[0]=checkIn&fields[1]=checkOut&fields[2]=status`)
}
