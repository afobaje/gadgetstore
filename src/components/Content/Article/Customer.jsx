import React from "react";
import "./Customer.css";
import Man from "./Assets/Rectangle 6.png";
import people from "./Assets/unsplash_people.png";
import line from './Assets/Line 11.svg'

const Customer = () => {
  return (
    <article className="customer">
      <div className="customer-review">
        <div className="title">
          <h2>CUSTOMER REVIEWS</h2>
          <img src="" alt="" />
        </div>
        <div className="review-wrapper">
          <div className="cust-review">
            <div className="cust-title">
              <div className="custimg">
                <img src={Man} alt="" />
              </div>
              <div className="tits">
                <h3>Kandre Zuckerberg</h3>
                <p>Marketing Management Remmi</p>
              </div>
            </div>
            <div className="cust-content">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration .
              </p>
            </div>
          </div>
          <div className="cust-review">
            <div className="cust-title">
              <div className="custimg">
                <img src={Man} alt="" />
              </div>
              <div className="tits">
                <h3>Kandre Zuckerberg</h3>
                <p>Marketing Management Remmi</p>
              </div>
            </div>
            <div className="cust-content">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration .
              </p>
            </div>
          </div>
          <div className="cust-review">
            <div className="cust-title">
              <div className="custimg">
                <img src={Man} alt="" />
              </div>
              <div className="tits">
                <h3>Kandre Zuckerberg</h3>
                <p>Marketing Management Remmi</p>
              </div>
            </div>
            <div className="cust-content">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration .
              </p>
            </div>
          </div>
          <div className="cust-review">
            <div className="cust-title">
              <div className="custimg">
                <img src={Man} alt="" />
              </div>
              <div className="tits">
                <h3>Kandre Zuckerberg</h3>
                <p>Marketing Management Remmi</p>
              </div>
            </div>
            <div className="cust-content">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-news">
        <div className="news-title">
          <h3>LATEST NEWS</h3>
          <img src={line} alt="" />
          <button>See all</button>
        </div>
        <div className="news-contwrap">
          <div className="news-cont">
            <div className="newsimg">
              <img src={people} alt="" />
            </div>
            <p className="date">Aug., 01 2022</p>
            <div className="news">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur non elit arcu enim in consectetur id etiam. Id id
                vitae auctor in pelrisus. Massa elementum, at{" "}
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="news-cont">
            <div className="newsimg">
              <img src={people} alt="" />
            </div>
            <p className="date">Aug., 01 2022</p>
            <div className="news">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur non elit arcu enim in consectetur id etiam. Id id
                vitae auctor in pelrisus. Massa elementum, at{" "}
              </p>
            <button>Read More</button>
            </div>
          </div>
          <div className="news-cont">
            <div className="newsimg">
              <img src={people} alt="" />
            </div>
            <p className="date">Aug., 01 2022</p>
            <div className="news">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur non elit arcu enim in consectetur id etiam. Id id
                vitae auctor in pelrisus. Massa elementum, at{" "}
              </p>
            <button>Read More</button>
            </div>
          </div>
          <div className="news-cont">
            <div className="newsimg">
              <img src={people} alt="" />
            </div>
            <p className="date">Aug., 01 2022</p>
            <div className="news">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur non elit arcu enim in consectetur id etiam. Id id
                vitae auctor in pelrisus. Massa elementum, at{" "}
              </p>
            <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Customer;
