import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// STORE
import { useAppDispatch } from "../../store";
import {
  catsCategoriesSelector,
  ICategorie,
} from "../../store/cats-categories/cast-categories.slice";
import { fetchCatsCategories } from "../../store/cats-categories/cats-categories.actions";
// SHARED COMPONENTS
import { LoaderWrapper } from "../../shared-components/LoaderWrapper.component";
// STYLES
import "./styles.css";

const CategoriesSidebarView = () => {
  const { catsCategories, isLoading } = useSelector(catsCategoriesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCatsCategories());
  }, [dispatch]);

  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <LoaderWrapper isLoading={isLoading || false}>
        <ul>
          {catsCategories?.map((categorie: ICategorie) => {
            return (
              <li key={categorie.id}>
                <Link to={`/cat/${categorie.id}`}>{categorie.name}</Link>
              </li>
            );
          })}
        </ul>
      </LoaderWrapper>
    </aside>
  );
};

export default CategoriesSidebarView;
