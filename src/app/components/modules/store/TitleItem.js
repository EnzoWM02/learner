export default function TitleItem({ title, className }) {
  return (
    <>
      {title && (
        <span
          className={`${className} text-lgfont-bold`}
          style={{ color: title.color }}
        >
          {title.title}
        </span>
      )}
    </>
  );
}
