import { useEffect, useState } from 'react'
import { categories } from './data'
import { CartPage } from './components/CartPage'
import { CheckoutPage, CategoryIndex, NotFoundPage } from './components/UtilityPages'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { ListingPage } from './components/ListingPage'
import { ProductDetailPage } from './components/ProductDetailPage'
import { WishlistPage } from './components/WishlistPage'
import { addCart, load } from './components/ui'
import type { CartItem } from './components/ui'
import './App.css'

function App() {
  const [path, setPath] = useState(window.location.hash), [query, setQuery] = useState(''), [saved, setSaved] = useState<string[]>(() => load('cartly-wishlist', [])), [cart, setCart] = useState<CartItem[]>(() => load('cartly-cart', [])), [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const onHashChange = () => { setPath(window.location.hash); setSaved(load('cartly-wishlist', [])); setCart(load('cartly-cart', [])); window.scrollTo({ top: 0, behavior: 'smooth' }) }; window.addEventListener('hashchange', onHashChange); return () => window.removeEventListener('hashchange', onHashChange) }, [])
  const [page, rawValue] = path.replace('#/', '').split('/'); const value = rawValue ? decodeURIComponent(rawValue) : undefined
  const toggleSaved = (id: string) => { const next = saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id]; setSaved(next); localStorage.setItem('cartly-wishlist', JSON.stringify(next)) }
  const addToCart = (id: string, quantity = 1) => { addCart(id, quantity); setCart(load('cartly-cart', [])) }
  const onQuantityChange = (id: string, delta: number) => { const next = cart.flatMap(item => item.productId === id && item.quantity + delta < 1 ? [] : item.productId === id ? [{ ...item, quantity: item.quantity + delta }] : [item]); setCart(next); localStorage.setItem('cartly-cart', JSON.stringify(next)) }
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const currentPage = page === 'home' || !page ? <HomePage saved={saved} toggleSaved={toggleSaved} addToCart={addToCart} /> : page === 'shop' ? <ListingPage saved={saved} toggleSaved={toggleSaved} addToCart={addToCart} /> : page === 'category' && categories.includes(value || '') ? <ListingPage category={value} saved={saved} toggleSaved={toggleSaved} addToCart={addToCart} /> : page === 'search' ? <ListingPage search={value} saved={saved} toggleSaved={toggleSaved} addToCart={addToCart} /> : page === 'product' ? <ProductDetailPage id={value} saved={saved} toggleSaved={toggleSaved} /> : page === 'categories' ? <CategoryIndex /> : page === 'wishlist' ? <WishlistPage ids={saved} toggleSaved={toggleSaved} /> : page === 'cart' ? <CartPage items={cart} onQuantityChange={onQuantityChange} /> : page === 'checkout' ? <CheckoutPage /> : <NotFoundPage />
  return <div className="app-shell"><Header savedCount={saved.length} cartCount={cartCount} query={query} menuOpen={menuOpen} onQueryChange={setQuery} onMenuToggle={() => setMenuOpen(!menuOpen)} /><main>{currentPage}</main><Footer /></div>
}

export default App
