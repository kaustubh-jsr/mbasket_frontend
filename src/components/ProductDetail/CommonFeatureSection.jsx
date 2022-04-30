import React from "react";

const CommonFeatureSection = () => {
  return (
    <div class="common-details">
      <div class="app-feature">
        <div class="feature-icon">
          <img
            class="img-responsive feature-icon__img"
            alt="best price"
            src="https://i.postimg.cc/pymP2K8P/express-delivery-icon-93fce76.png"
          />
        </div>
        <div class="feature-desc">
          <div class="feature-desc__heading p-sm">10 minute grocery now</div>
          <div class="feature-desc__detail p-sm">
            Get your order delivered to your doorstep at the earliest from dark
            stores near you.
          </div>
        </div>
      </div>
      <div class="app-feature">
        <div class="feature-icon">
          <img
            class="img-responsive feature-icon__img"
            alt="best price"
            src="https://i.postimg.cc/dLdvCv4X/footer-best-price-icon-90b5bd7.png"
          />
        </div>
        <div class="feature-desc">
          <div class="feature-desc__heading p-sm">Best Prices &amp; Offers</div>
          <div class="feature-desc__detail p-sm">
            Cheaper prices than your local supermarket, great cashback offers to
            top it off.
          </div>
        </div>
      </div>
      <div class="app-feature">
        <div class="feature-icon">
          <img
            class="img-responsive feature-icon__img"
            alt="genuine products"
            src="https://i.postimg.cc/qNTrXYF7/footer-genuine-products-icon-d2756ce.png"
          />
        </div>
        <div class="feature-desc">
          <div class="feature-desc__heading p-sm">Wide Assortment</div>
          <div class="feature-desc__detail p-sm">
            Choose from 5000+ products across food, personal care, household &
            other categories.
          </div>
        </div>
      </div>
      <div class="app-feature">
        <div class="feature-icon">
          <img
            class="img-responsive feature-icon__img"
            alt="easy returns"
            src="https://i.postimg.cc/75nkB9vn/footer-easy-returns-icon-02b777e.png"
          />
        </div>
        <div class="feature-desc">
          <div class="feature-desc__heading p-sm">Easy Returns</div>
          <div class="feature-desc__detail p-sm">
            Not satisfied with a product? Return it at the doorstep & get a
            refund within hours.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonFeatureSection;
