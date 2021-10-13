import { WishItem } from "../../components/WishItem";

import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import {
  ADD_WISHITEM,
  GET_WISHITEM,
} from "../../redux/actions/wishlistActions";
import { store } from "../../redux";

export function WishlistPage() {
  const dispatch = useDispatch();
  // const wishlist = useSelector((state) => state.wishlist);

  dispatch({ type: ADD_WISHITEM });

  console.log(store.getState());

  return (
    <div className="wishlists">
      <h1 className="title">My Wish List</h1>
      <WishItem />
    </div>
  );
}
