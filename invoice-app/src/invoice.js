import React from "react";
import { numberWithCommas } from "./util.js";

const invoiceStyle = `
  @media print {  
      @page { 
      size: 21.59cm 13.97cm;
    } 

    #sellerCompany{
      margin-top:0.3cm;
    }

      div {
          font-size: 10px;
        }
     footer {
         font-size: 36px;
     }
     table{
        width: 100%;
      }

      table, table th{
        border: solid 1px black;
      }
      p {
        margin: 0px;
        padding: 0px;
        line-height:3px;
      }
    }
  `;

class Invoice extends React.PureComponent {
  render() {
    return (
      <div id="invoice">
        <header>
          <SellerCompany />
        </header>
        <table>
          <thead>
            <tr>
              {this.props.state.columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.state.data.map((item, outerIndex) => {
              return (
                <tr key={outerIndex}>
                  {Object.keys(item).map((key, innerIndex) => (
                    <td key={innerIndex}>{item[key]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <footer>
          <div>test</div>
        </footer>
      </div>
    );
  }
}

const SellerCompany = () => {
  return (
    <div id="sellerCompany">
      <p>Jl. Penghela no. 14</p>
      <p>Surabaya</p>
      <p>0315460169</p>
    </div>
  );
};

const BuyerCompany = () => {
  return (
    <div id="sellerCompany">
      <p>Jl. Penghela no. 14</p>
      <p>Surabaya</p>
      <p>0315460169</p>
    </div>
  );
};

export { Invoice, invoiceStyle };
