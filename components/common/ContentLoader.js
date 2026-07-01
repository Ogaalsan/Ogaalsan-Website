export default function ContentLoader({ message = "Loading..." }) {
  return (
    <div className="py-80 text-center">
      <p style={{ color: "#334770", fontSize: "16px" }}>{message}</p>
    </div>
  );
}
