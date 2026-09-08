import { Navbar } from './Navbar'

type HeaderProps = { savedCount: number; cartCount: number; query: string; menuOpen: boolean; onQueryChange: (value: string) => void; onMenuToggle: () => void }
const icon = (name: string) => ({ search: '⌕', menu: '☰' }[name] || '')
export function Header({ savedCount, cartCount, query, menuOpen, onQueryChange, onMenuToggle }: HeaderProps) {
  return <header className="site-header"><a className="logo" href="#/home"><span className="logo-mark">C</span>cartly<span className="logo-dot">.</span></a><form className="searchbar" onSubmit={event => { event.preventDefault(); window.location.hash = `/search/${encodeURIComponent(query)}` }}><span>{icon('search')}</span><input value={query} onChange={event => onQueryChange(event.target.value)} placeholder="Search the collection" aria-label="Search products" /><kbd>⌘ K</kbd></form><Navbar savedCount={savedCount} cartCount={cartCount} menuOpen={menuOpen} /><button className="mobile-toggle" onClick={onMenuToggle} aria-label="Toggle navigation">{icon('menu')}</button></header>
}
