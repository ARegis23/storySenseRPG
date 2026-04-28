export default function Badge({ children, color = 'purple' }) {
  return <span className={`badge badge-${color}`}>{children}</span>;
}
