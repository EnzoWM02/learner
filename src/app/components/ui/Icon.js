export default function Icon({
  icon,
  color = "white",
  size = "32px",
  label = undefined,
}) {
  const Icon = icon;
  return (
    <div className="flex items-center justify-center flex-col gap-1">
      <Icon color={color} size={size} />
      <span className="text-sm">{label}</span>
    </div>
  );
}
