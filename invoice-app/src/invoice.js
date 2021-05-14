import React from "react";
import { numberWithCommas } from "./util.js";
import NumberFormat from "react-number-format";
import logo from "./assets/logo_with_text.png";

const invoiceStyle = `
  @media print {  
      @page { 
      size: 21.59cm 13.97cm;
    } 

    html, body{
      width:100%;
      height: 100%;
    }

    .numeric{
      text-align:right;
    }

    .invoice{
      font-size: 0.7em;
      height:100%;
    }

    header, footer{
      position:fixed;
      width:100%;
      display:block;
    }
    
    #buyerCompany{
      padding-left: 10%;
    }

    .column{
      display: inline-block;
      width: 33%;
      
    }
    
    .info {
      display: table;
    }

    .info h3 {
      display: table-row;
    }

    .info span{
      display: table-cell;
      padding-right: 2mm;
      padding-top: 1.5mm;
    }

     table{
        width: 100%;
        font-size: 1em;
        border-top: solid 1px black;
        position: absolute;
        top:25%;
        max-height:50px;
        page-break-inside:auto;
      }

      table tbody tr{
        height:1em;
      }

      table td, table th{
        border-left: solid 1px black;
        border-right: solid 1px black;
        padding-left: 1mm;
        padding-right: 1mm;
        vertical-align:text-top; 
      }

      table, table th{
        border-bottom: solid 1px black;
      }

      table, table th{
        border: solid 1px black;
      }

      table #note td, table #subtotal td, table #discount td{
        border-top: none;
        border-bottom: none;
      }

      table #subtotal{
        border-top: solid 1px black;
      }

      table #grandTotal{
         border-bottom: solid 1px black;
       }

      table #note{
        height: 3em;
        overflow: hidden;
      }

      table tfoot{
        display:table-row-group;
        page-break-after: avoid;
        page-break-inside: avoid;     
      }

      h3 {
        line-height:1em;
      }

      footer {
        display: flex;
        bottom: 0;
        left: 30%;
        text-align:center;
      }

      .sign:nth-child(2){
        margin-left: 5em;
      }
      
      .sign:last-child{
        margin-left: 5em;
      }

      .sign h3{
        padding-bottom: 3em;
      }
    }
  `;

class Invoice extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="invoice">
          <Header {...this.props.state.buyerInfo} />
          <TableItems
            {...this.props}
          />
          <Footer {...this.props.state} />
        </div>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <header>
      <TopPart />
      <Dates {...props} />
      <div className="column"></div>
      <BuyerCompany {...props} />
    </header>
  );
};

const TopPart = (props) => {
  return (
    <div id="top">
      <div className="column">
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <h1 id="title" className="column">
        FAKTUR PENJUALAN
      </h1>
    </div>
  );
};

const SellerCompany = () => {
  return (
    <div id="sellerCompany" className="column">
      <h3>UD. Maju Jaya Diesel</h3>
    </div>
  );
};

const BuyerCompany = (props) => {
  return (
    <div id="buyerCompany" className="column">
      <h3>Kepada Yth.</h3>
      <h3>{props.name}</h3>
      <h3>{props.address}</h3>
      <h3>{props.city}</h3>
    </div>
  );
};

const Dates = (props) => {
  return (
    <div className="column">
      <div className="info">
        <h3>
          <span>No. faktur</span>: {props.number}
        </h3>
        <h3>
          <span>Tanggal dokumen</span>: {props.date}
        </h3>
        <h3>
          <span>Jatuh tempo (30 hari)</span>: {props.due}
        </h3>
      </div>
    </div>
  );
};

const TableItems = (props) => {
  return (
    <div id="table">
      <table>
        <colgroup>
          <col span="1" style={{ width: "5%" }} />
          <col span="1" style={{ width: "20%" }} />
          <col span="1" style={{ width: "45%" }} />
          <col span="1" style={{ width: "5%" }} />
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "15%" }} />
        </colgroup>
        <thead>
          <tr>
            {props.state.columns.map((column, index) => (
              <th
                key={index}
                {...((column.toLowerCase() === "harga" ||
                  column.toLowerCase() === "total" ||
                  column.toLowerCase() === "qty") && {
                  className: "numeric",
                })}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.state.data.map((item, outerIndex) => {
            return (
              <tr key={outerIndex} className="items">
                {Object.keys(item).map((column, innerIndex) => {
                  if (column !== "count")
                    return (
                      <td
                        key={innerIndex}
                        {...((column === "price" || column === "qty") && {
                          className: "numeric",
                        })}
                      >
                        {column === "price" ? (
                          <NumberFormat
                            format={numberWithCommas}
                            displayType="text"
                            value={item[column]}
                          />
                        ) : (
                          item[column]
                        )}
                      </td>
                    );
                  return "";
                })}
                <td className="numeric">
                  <NumberFormat
                    format={numberWithCommas}
                    displayType="text"
                    value={item.qty * item.price}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="numeric" id="subtotal">
            <td colspan="5">Subtotal</td>
            <td>
              {numberWithCommas(
                props.state.buyerInfo.grandTotal +
                  props.state.buyerInfo.discount
              )}
            </td>
          </tr>
          <tr className="numeric" id="discount">
            <td colspan="5">Discount</td>
            <td>{numberWithCommas(props.state.buyerInfo.discount)}</td>
          </tr>
          <tr className="numeric" id="grandTotal">
            <td colspan="5">Grand total</td>
            <td>{numberWithCommas(props.state.buyerInfo.grandTotal)}</td>
          </tr>
          <tr>
            <td colspan="6">
              <div id="note">
                Keterangan:
                {props.state.buyerInfo.note}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <SignArea person="Penerima" />
      <SignArea person="Penjual" />
      <SignArea person="Checklist" />
    </footer>
  );
};

const SignArea = ({ person, className }) => {
  return (
    <div className="sign">
      <h3>{person}</h3>
      <span>________________</span>
    </div>
  );
};

export { Invoice, invoiceStyle };
