import { WishItem } from "../../components/WishItem";

import { useDispatch, useSelector } from "react-redux";

import { selectWishlist } from "../../redux/selectors/wishlistSelectors";

import "./styles.css";
import {
  ADD_WISHITEM,
  GET_WISHITEM,
} from "../../redux/actions/wishlistActions";

export function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleAddItem = () => dispatch({ type: ADD_WISHITEM });

  return (
    <div className="wishlists">
      <h1 className="title">My Wish List</h1>
      {wishlist.map(() => (
        <WishItem />
      ))}
      <button onClick={handleAddItem}>+ Adicionar</button>
    </div>
  );
}
