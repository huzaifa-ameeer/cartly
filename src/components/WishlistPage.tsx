import { products } from '../data'
import { EmptyState } from './EmptyState'
import { ProductCard } from './ProductCard'
import { addCart, go } from './ui'
export function WishlistPage({ ids, toggleSaved }: { ids: string[]; toggleSaved: (id: string) => void }) { const items = products.filter(product => ids.includes(product.id)); return <section className="page-pad"><p className="eyebrow">Saved for later</p><h1>Your wishlist <span>({items.length})</span></h1>{items.length ? <div className="product-grid">{items.map(product => <ProductCard key={product.id} product={product} saved onSave={() => toggleSaved(product.id)} onAdd={() => addCart(product.id, 1)} />)}</div> : <EmptyState title="Nothing saved yet" text="Keep an eye out for something that feels like you." action="Browse the collection" onClick={() => go('/shop')} />}</section> }
