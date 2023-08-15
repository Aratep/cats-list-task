import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// STORE
import { useAppDispatch } from "../../store";
import { catsSelector, ICat } from "../../store/cats-list/cats-list.slice";
import {
  fetchCatsList,
  loadMoreCats,
} from "../../store/cats-list/cats-list.actions";
// SHARED COMPONENTS
import { LoaderWrapper } from "../../shared-components/LoaderWrapper.component";
// UTILS
import { generateUUID } from "../../utils";
// STYLES
import "./styles.css";

const CatsListView = () => {
  const dispatch = useAppDispatch();
  const { cats, isLoading } = useSelector(catsSelector);
  const { catId } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCatsList({ page, catId }));
    // eslint-disable-next-line
  }, [dispatch, catId]);

  const onLoadMoreClick = (e: React.MouseEvent<HTMLElement>, page: number) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
    dispatch(loadMoreCats(page + 1, catId));
  };

  return (
    <section className="cats-view">
      <h2>Cats</h2>
      <LoaderWrapper isLoading={isLoading || false}>
        <div className="cats-list">
          {cats?.map((cat: ICat) => {
            return (
              <img
                src={cat.url}
                alt={cat.url}
                className="cat-image"
                key={generateUUID()}
              />
            );
          })}
        </div>
        <button onClick={(e) => onLoadMoreClick(e, page)}>Load More</button>
      </LoaderWrapper>
    </section>
  );
};

export default CatsListView;
