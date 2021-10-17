import { useDispatch, useSelector } from "react-redux";

import { WishItem } from "../../components/ExpensesListItem";
import { Divider } from "../../components/Divider";
import { ExpensesForm } from "../../components/ExpensesForm";

import { selectWishlist } from "../../redux/selectors/wishlistSelectors";
import {
  ADD_WISHITEM,
  GET_WISHITEM,
} from "../../redux/actions/wishlistActions";

import "./styles.css";

export function ExpensesPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  const handleAddItem = () => dispatch({ type: ADD_WISHITEM });

  return (
    <div className="expenses-page container">
      <ExpensesForm />
      <Divider direction="col" />
      {/* {wishlist.map(() => (
        <WishItem />
      ))}
      <button onClick={handleAddItem}>+ Adicionar</button> */}
    </div>
  );
}
