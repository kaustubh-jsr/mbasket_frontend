import { Link } from "react-router-dom";
import "./ShopByCategory.css";

export const ShopByCategory = ({ categories }) => {
  return (
    <div className="homepage-category-display">
      <div className="category-header h2">Shop By Category</div>
      <div className="home-categories__avatar-group">
        {categories.map((category) => {
          if (category.isActive) {
            return (
              <Link to="/">
                <div className="avatar avatar-xl">
                  <img
                    className="img-responsive img-round"
                    loading="lazy"
                    src={category.avatarImg}
                    alt="avatar"
                    srcset=""
                  />
                  <h5>{category.name}</h5>
                </div>
              </Link>
            );
          } else {
            return;
          }
        })}
      </div>
    </div>
  );
};
