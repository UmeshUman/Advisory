import { useState } from "react";
import "./TabSec.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faWebAwesome,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";

const tabItems = [
  {
    id: 1,
    title: "Top impact Scientific editing",
    icon: faGem,
    content: (
      <div className="addon-section">
        <h4>Add-Ons</h4>
        <ul className="addon-list">
          <li>
            <label>
              <input type="checkbox" /> Plagiarism Check - Turnitin <span>$100</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Poster Presentation <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> VIP Editor <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Simplified Abstract <span>$250</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Journal Selection Assistant <span>$200</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Graphical Abstract <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Scientific News Report <span>$400</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Journal Submission <span>$180</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Artwork Editing <span>$350</span>
            </label>
            
          </li>
        </ul>

        <h4>Free Services</h4>
        <ul className="free-services">
          <li>
            <label>
              <input type="checkbox"  /> Edit Unlimited
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Cover Letter
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Artwork Rework
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Rejection Shield
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Certificate Of Editing
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Resubmission Support
            </label>
          </li>
        </ul>
        <button className="order-btn">Add Now</button>
      </div>
    ),
  },
  {
    id: 2,
    title: "Top impact Scientific editing",
    icon: faWebAwesome,
    content: (
      <div className="addon-section">
        <h4>Add-Ons</h4>
        <ul className="addon-list">
          <li>
            <label>
              <input type="checkbox" /> Plagiarism Check-iThenticate <span>$100</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Poster Presentation <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> VIP Editor <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Simplified Abstract <span>$250</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Journal Selection Assistant <span>$200</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Graphical Abstract <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Scientific News Report <span>$400</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Journal Submission <span>$180</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Artwork Editing <span>$350</span>
            </label>
            
          </li>
        </ul>

        <h4>Free Services</h4>
        <ul className="free-services">
          <li>
            <label>
              <input type="checkbox"  /> Edit Unlimited
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Cover Letter
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Artwork Rework
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Rejection Shield
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Certificate Of Editing
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Resubmission Support
            </label>
          </li>
        </ul>
        <button className="order-btn">Add Now</button>
      </div>
    ),
  },
  {
    id: 3,
    title: "Top impact Scientific editing",
    icon: faWebAwesome,
    content: (
      <div className="addon-section">
        <h4>Add-Ons</h4>
        <ul className="addon-list">
          <li>
            <label>
              <input type="checkbox" /> Plagiarism Check-iThenticate <span>$100</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Poster Presentation <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> VIP Editor <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Simplified Abstract <span>$250</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Journal Selection Assistant <span>$200</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Graphical Abstract <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Scientific News Report <span>$400</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Journal Submission <span>$180</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Artwork Editing <span>$350</span>
            </label>
            
          </li>
        </ul>

        <h4>Free Services</h4>
        <ul className="free-services">
          <li>
            <label>
              <input type="checkbox"  /> Edit Unlimited
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Cover Letter
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Artwork Rework
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Rejection Shield
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Certificate Of Editing
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Resubmission Support
            </label>
          </li>
        </ul>
        <button className="order-btn">Add Now</button>
      </div>
    ),
  },
  {
    id: 4,
    title: "Top impact Scientific editing",
    icon: faMagnifyingGlassChart,
    content: (
      <div className="addon-section">
        <h4>Add-Ons</h4>
        <ul className="addon-list">
          <li>
            <label>
              <input type="checkbox" /> Plagiarism Check-iThenticate <span>$100</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Poster Presentation <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> VIP Editor <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Simplified Abstract <span>$250</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Journal Selection Assistant <span>$200</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Graphical Abstract <span>$350</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Scientific News Report <span>$400</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Journal Submission <span>$180</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Artwork Editing <span>$350</span>
            </label>
            
          </li>
        </ul>

        <h4>Free Services</h4>
        <ul className="free-services">
          <li>
            <label>
              <input type="checkbox"  /> Edit Unlimited
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Cover Letter
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Artwork Rework
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Rejection Shield
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"  /> Certificate Of Editing
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Resubmission Support
            </label>
          </li>
        </ul>
        <button className="order-btn">Add Now</button>
      </div>
    ),
  },
];

const TabsComponent = () => {
  const [active, setActive] = useState(1);

  return (
    
          <div className="wrapper">
            <div className="tabs">
              {tabItems.map(({ id, icon, title }) => (
                <TabItemComponent
                  key={title}
                  icon={icon}
                  title={title}
                  onItemClicked={() => setActive(id)}
                  isActive={active === id}
                  id={id}
                  activeId={active}
                />
              ))}
            </div>
            <div className="content">
              {tabItems.map(({ id, content }) => {
                return active === id ? content : null;
              })}
            </div>
          </div>
       
  );
};

const TabItemComponent = ({
  icon = "",
  title = "",
  onItemClicked = () => console.error("You passed no action to the component"),
  isActive = false,
  id,
  activeId,
}) => {
  return (
    <label
      className={`tabitem ${
        isActive ? "tabitem--active" : "tabitem--inactive"
      } col-lg-3 col-md-12`}
    >
      <div className=" inpStart">
        <input
          type="radio"
          name="tabgroup"
          checked={activeId === id}
          onChange={onItemClicked}
          className="tabitem__radio"
        />
      </div>

      <div className="tabitem__content">
        <FontAwesomeIcon icon={icon} style={{ fontSize: "28px", color: "#fdc043" }} />
        <p className="tabitem__title">{title}</p>
      </div>
    </label>
  );
};

export default TabsComponent;
