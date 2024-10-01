
import './App.css';

import Pricing from './Components/Pricing_section/Pricing_section';
import QuotationDetails from './Components/QuotationDetails/QuotationDetails';
import TabsComponent from './Components/TabSection/TabSec';

function App() {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-lg-8">
         
          <div className="pricing-section">
            <Pricing />
          </div>
          
          
          <div className="tabs-section" style={{ marginTop: "20px" }}>
            <TabsComponent />
          </div>
        </div>

       
        <div className="col-lg-4">
          <QuotationDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
