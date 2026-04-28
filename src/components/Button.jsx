export default function Button({ children, onClick, icon: Icon, variant = 'primary', type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className={`button button-${variant}`}>
      {Icon ? <Icon size={18} /> : null}
      {children}
    </button>
  );
}
