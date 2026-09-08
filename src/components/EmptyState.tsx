import { glyph } from './ui'
type EmptyStateProps = { title: string; text: string; action: string; onClick: () => void }
export function EmptyState({ title, text, action, onClick }: EmptyStateProps) { return <div className="empty"><div className="empty-symbol">{glyph('search')}</div><h2>{title}</h2><p>{text}</p><button className="button outline" onClick={onClick}>{action} {glyph('arrow')}</button></div> }
