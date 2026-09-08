type SectionHeaderProps = {
  eyebrow: string
  title: string
  action: string
  href: string
}

const arrow = '↗'

export function SectionHeader({ eyebrow, title, action, href }: SectionHeaderProps) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <a className="text-link" href={`#${href}`}>
        {action} {arrow}
      </a>
    </div>
  )
}
