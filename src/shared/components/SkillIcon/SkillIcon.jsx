// Renders a skill's `icon` (image URL) or `Icon` (react-icons component), or nothing.
export default function SkillIcon({ item, className, iconClassName = className, alt = '', ...imgProps }) {
  if (item.icon) {
    return <img src={item.icon} alt={alt} className={className} {...imgProps} />
  }
  if (item.Icon) {
    const { Icon } = item
    return <Icon className={iconClassName} aria-hidden="true" />
  }
  return null
}
