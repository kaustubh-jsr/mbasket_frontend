import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategoriesApi } from "../../apis";
import { Placeholder } from "react-bootstrap";
import "./ShopByCategory.css";

export const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const onGetCategories = async () => {
    const resp = await getCategoriesApi();
    setCategories(resp);
    setLoading(false);
  };

  useEffect(() => {
    onGetCategories();
  }, []);

  return (
    <div className="homepage-category-display">
      <div className="category-header h2">Shop By Category</div>
      <div className="home-categories__avatar-group">
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
              return (
                <div className="avatar avatar-xl">
                  <Placeholder as={"div"} animation="wave">
                    <Placeholder
                      xs={4}
                      className="category-avatar-placeholder img-responsive img-round"
                    />
                  </Placeholder>
                  <Placeholder as={"h5"} animation="wave">
                    <Placeholder xs={7} /> <Placeholder xs={4} />
                  </Placeholder>
                  <Placeholder as={"h5"} animation="wave">
                    <Placeholder xs={6} />
                  </Placeholder>
                </div>
              );
            })
          : categories.map((category) => {
              return (
                category.fields.is_active && (
                  <Link
                    to={`category/${category.fields.slug}`}
                    key={category.slug}
                  >
                    <div className="avatar avatar-xl">
                      <img
                        className="img-responsive img-round"
                        loading="lazy"
                        src={category.fields.avatar_image}
                        alt={category.fields.name}
                      />
                      <h5>{category.fields.name}</h5>
                    </div>
                  </Link>
                )
              );
            })}
      </div>
    </div>
  );
};
