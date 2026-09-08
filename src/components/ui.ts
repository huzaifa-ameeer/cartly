export const money = (value: number) => `$${value.toFixed(2)}`
export const glyph = (name: string) => ({ search: '⌕', heart: '♡', cart: '⌑', arrow: '↗', plus: '+', minus: '−', menu: '☰' }[name] || '')
export const go = (path: string) => { window.location.hash = path; window.scrollTo({ top: 0, behavior: 'smooth' }) }
export const load = <T,>(key: string, fallback: T): T => { try { return JSON.parse(localStorage.getItem(key) || '') } catch { return fallback } }
export type CartItem = { productId: string; quantity: number }
export function addCart(id: string, quantity: number) { const current = load<CartItem[]>('cartly-cart', []); const found = current.find(item => item.productId === id); localStorage.setItem('cartly-cart', JSON.stringify(found ? current.map(item => item.productId === id ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { productId: id, quantity }])) }
