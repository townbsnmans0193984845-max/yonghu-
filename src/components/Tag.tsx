type TagProps = {
  label: string;
  tone?: "primary" | "success" | "warning" | "neutral";
};

export default function Tag({ label, tone = "primary" }: TagProps) {
  return <span className={`tag tag--${tone}`}>{label}</span>;
}
