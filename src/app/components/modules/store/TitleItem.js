export default function TitleItem({ title }) {
  return (
    <>
      {title && (
        <span className="text-lgfont-bold" style={{ color: title.color }}>
          {title.title}
        </span>
      )}
    </>
  );
}
