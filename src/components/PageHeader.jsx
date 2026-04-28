import Badge from './Badge';

export default function PageHeader({ eyebrow, title, description, icon: Icon }) {
  return (
    <header className="page-header">
      <div>
        <Badge>{eyebrow}</Badge>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {Icon ? (
        <div className="header-icon">
          <Icon size={40} />
        </div>
      ) : null}
    </header>
  );
}
