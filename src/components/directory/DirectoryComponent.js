import React from "react";
import "./directory.style.scss";
import { CategoryItemComponent } from "../category-item/CategoryItemComponent";

export const DirectoryComponent = ({ categories }) => {
  return (
    <div>
      <div className="directory-container">
        {categories.map((category) => {
          return (
            <CategoryItemComponent key={category.id} category={category} />
          );
        })}
      </div>
    </div>
  );
};
