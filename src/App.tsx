import React from "react";
import { Routes, Route } from "react-router-dom";

// VIEWS
import CategoriesSidebarView from "./views/categories/CategoriesSidebar.view";
// STYLES
import "./App.css";

const HomeView = React.lazy(() => import("./views/home/Home.view"));
const CatsListView = React.lazy(
  () => import("./views/cats-list/CatsList.view")
);

function App() {
  return (
    <main className="App">
      <CategoriesSidebarView />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <HomeView />
            </React.Suspense>
          }
        />
        <Route path="cat">
          <Route
            path=":catId"
            element={
              <React.Suspense fallback={<>...</>}>
                <CatsListView />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
