export default function Icon({
  icon,
  color = "white",
  size = "32px",
  label = undefined,
  className = "",
}) {
  const Icon = icon;
  return (
    <div
      className={`${className} flex items-center justify-center flex-col ${label && "gap-1"}`}
    >
      <Icon color={color} size={size} />
      <span className="text-sm">{label}</span>
    </div>
  );
}
