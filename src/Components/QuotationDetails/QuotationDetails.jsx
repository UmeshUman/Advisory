import React from "react";
import "./QuotationDetails.css"; // Custom styling for this component

const QuotationDetails = () => {
  return (
  

      <div className="quotation-details-container">
        <div className="quotation-details-box">
          <h4 className="title">Quotation Details</h4>
          <div className="details">
            <p>
              <strong>Service Name</strong>
            </p>
            <p>- Substantive Editing</p>
            <p>
              <strong>Delivery Before</strong>
            </p>
            <p>Tue, 01 Oct 10:30 (GMT)</p>
            <p>
              <strong>Fees</strong>
            </p>
            <p>
              Total Price: <span className="price">$25</span>
            </p>
          </div>
          <hr />
          <div className="grand-total">
            <p>
              <strong>Grand Total:</strong>
            </p>
            <p>
              <strong className="price">$25</strong>
            </p>
          </div>
          <hr />
          <div className="additional-details">
            <button className="details-toggle">
              Details <span className="arrow">▲</span>
            </button>
            <div className="base-price">
              <p>
                Base Price: <span>$25</span>
              </p>
            </div>
            <div className="add-ons">
              <p>
                <strong>ADD-ONS:</strong>
              </p>
              <ul>
                <li>
                  Edit Unlimited <span>✖ FREE</span>
                </li>
                <li>
                  Rejection Shield <span>✖ FREE</span>
                </li>
                <li>
                  Cover Letter <span>✖ FREE</span>
                </li>
                <li>
                  Certificate Of Editing <span>✖ FREE</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="promo-code">
            <input type="text" placeholder="Enter promo code" />
            <button className="apply-btn">APPLY</button>
          </div>
        </div>
      </div>
   
  );
};

export default QuotationDetails;
