export function FormField({ label, value, placeholder, type = 'text' }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input type={type} defaultValue={value} placeholder={placeholder} />
    </label>
  );
}

export function SelectField({ label, value, options }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <select defaultValue={value}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
