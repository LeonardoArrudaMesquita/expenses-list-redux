import "./styles.css";

export function WishItem() {
  return (
    <div className="container">
      <input type="text" className="wish-input" />
      <label className="delete-button">Delete</label>
    </div>
  );
}
