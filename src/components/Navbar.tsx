type NavbarProps = { savedCount: number; cartCount: number; menuOpen: boolean }
const icon = (name: string) => ({ heart: '♡', cart: '⌑' }[name] || '')
export function Navbar({ savedCount, cartCount, menuOpen }: NavbarProps) { return <nav className={menuOpen ? 'main-nav open' : 'main-nav'}><a href="#/shop">Shop</a><a href="#/categories">Categories</a><a href="#/wishlist">{icon('heart')} Saved {savedCount > 0 && <b>{savedCount}</b>}</a><a href="#/cart">{icon('cart')} Bag {cartCount > 0 && <b>{cartCount}</b>}</a></nav> }
