import React from "react";
import { numberWithCommas } from "./util.js";
import NumberFormat from "react-number-format";
import logo from "./assets/logo_with_text.png";

const invoiceStyle = `
 @media print {  
   html *{
      font-family: "Trebuchet MS";
    }
      @page { 
      size: 21cm 13.97cm;
    } 
    .numeric{
      text-align:right;
    }
    .page-break{
      page-break-before: always;
      page-break-after: always;
      display: block;
    }

    #title{
      text-align: center;
    }

    .invoice{
      font-size: 0.7em;
    }
    
    #pageNo{
      padding-left: 10%;
    }
    #buyerCompany{
      width: 66%;
    }
    .column{
      display: inline-block;
      width: 33%;
      margin-bottom: 0.5em;
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
        height:21.5em;
        font-size: 1.2em;
        border-top: solid 1px black;
      }
      table tr{
        height:1em;
      }
      table tr:last-child{
        height:auto;
        border-bottom: solid 1px black;
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
       table #grandTotal td{
         border-bottom: solid 1px black;
         font-weight: bold;
       }
      table #note{
        height: 1.5em;
        overflow: hidden;
      }

      h3 {
        line-height:1em;
      }
      footer {
        display: flex;
        position:fixed;
        bottom: 0;
        left: 25%;
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

class InvoiceToPrint extends React.PureComponent {
  render() {
    let sizePerPage = 10; // 10 items per print page

    if(this.props.formState === "surat"){ // surat jalan tidak ada subtotal / grand total / discount, jadi baris barang bisa muat lbh banyak
      sizePerPage = 14;
    }

    let dataLength = this.props.state.data.length; // items count
    let pageCount = Math.ceil(dataLength / sizePerPage); // page count

    let invoicePages = [];

    for (var i = 0; i < pageCount; i++) {
      let startIndex = i * sizePerPage; // start index for item slicing, if sizeperpage = 10 then startindex 0, 10, 20, ...
      let endIndex = startIndex + sizePerPage; // end index for item slicing
      let lastPageItems = dataLength % sizePerPage; // item count for last page, maybe lower than sizeperpage
      if (i === pageCount - 1 && lastPageItems !== 0) {
        // if last page and last page item count != sizeperpage
        endIndex = startIndex + lastPageItems;
      }
      invoicePages.push(
        <div className="invoice page-break" key={`page${i + 1}`}>
          <Header
            {...this.props.state.buyerInfo}
            formState={this.props.formState}
            page={i + 1}
            pageCount={pageCount}
          />
          <BuyerCompany {...this.props.state.buyerInfo} />
          <Dates
            {...this.props.state.buyerInfo}
            formState={this.props.formState}
          />
          <TableItems {...this.props} start={startIndex} end={endIndex} />
          <Footer {...this.props.state} formState={this.props.formState} />
        </div>
      );
    }

    return <div>{invoicePages}</div>;
  }
}

const Header = (props) => {
  return (
    <div>
      <div className="column">
        <img src={logo} alt="logo" />
      </div>
      <h1 id="title" className="column">
        {props.formState === "faktur" && "FAKTUR PENJUALAN"}
        {props.formState === "surat" && "SURAT JALAN"}
      </h1>
      <h3 id="pageNo" className="column">
        Page {props.page} of {props.pageCount}
      </h3>
    </div>
  );
};

// const SellerCompany = () => {
//   return (
//     <div id="sellerCompany" className="column">
//       <h3>UD. Maju Jaya Diesel</h3>
//     </div>
//   );
// };

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
          <span>
            No. { props.formState }
          </span>: {props.number}
        </h3>
        <h3>
          <span>Tanggal dokumen</span>: {props.date}
        </h3>
        { props.formState === "faktur" &&
          <h3>
            <span>Jatuh tempo (30 hari)</span>: {props.due}
          </h3>
        }
      </div>
    </div>
  );
};

const TableItems = (props) => {
  let startIndex = props.start;
  let endIndex = props.end;
  let subset = props.state.data.slice(startIndex, endIndex);

  return (
    <table id="innerTable">
      {/* Columns width based on faktur / surat jalan (w/o price & total) */}
      {props.formState === "faktur" ? (
        <colgroup>
          <col span="1" style={{ width: "5%" }} />
          <col span="1" style={{ width: "20%" }} />
          <col span="1" style={{ width: "35%" }} />
          <col span="1" style={{ width: "5%" }} />
          <col span="1" style={{ width: "5%" }} />
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "15%" }} />
        </colgroup>
      ) : (
        <colgroup>
          <col span="1" style={{ width: "5%" }} />
          <col span="1" style={{ width: "20%" }} />
          <col span="1" style={{ width: "60%" }} />
          <col span="1" style={{ width: "5%" }} />
          <col span="1" style={{ width: "10%" }} />
        </colgroup>
      )}
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
        {subset.map((item, outerIndex) => {
          return (
            <tr key={outerIndex} className="items">
              {Object.keys(item).map((column, innerIndex) => {
                if (
                  column !== "count" &&
                  ((column !== "price" &&
                    column !== "discount" &&
                    props.formState === "surat") ||
                    props.formState === "faktur")
                )
                  // Column based on keys of data object
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
                          value={isNaN(item[column]) ? 0 : item[column]}
                        />
                      ) : column === "qty" && isNaN(item[column]) ? (
                        0
                      ) : column === "discount" ? (
                        item.discount &&
                        props.state.buyerInfo.discount !== 0 ? (
                          `${props.state.buyerInfo.discount}%`
                        ) : (
                          "-"
                        )
                      ) : (
                        item[column]
                      )}
                    </td>
                  );
                return undefined;
              })}

              {/* Total column */}

              {props.formState === "faktur" && (
                <td className="numeric">
                  <NumberFormat
                    format={numberWithCommas}
                    displayType="text"
                    value={
                      isNaN(item.qty) || isNaN(item.price)
                        ? 0
                        : item.qty * item.price
                    }
                  />
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {/* Subtotal, Discount, Grand total, Note only on faktur */}
        {props.formState === "faktur" && (
          <>
            <tr className="numeric" id="subtotal">
              <td colSpan="7">Subtotal</td>
              <td>{numberWithCommas(props.state.buyerInfo.subtotal)}</td>
            </tr>
            <tr className="numeric" id="discount">
              <td colSpan="7">
                {`Discount (${numberWithCommas(
                  props.state.buyerInfo.discount
                )}%)`}
              </td>
              <td>{numberWithCommas(props.state.buyerInfo.totalDiscount)}</td>
            </tr>
            <tr className="numeric" id="grandTotal">
              <td colSpan="7">Grand total</td>
              <td>
                {numberWithCommas(
                  parseInt(props.state.buyerInfo.subtotal) -
                    parseInt(props.state.buyerInfo.totalDiscount)
                )}
              </td>
            </tr>
          </>
        )}
        <tr>
          <td colSpan={props.formState === "faktur" ? 8 : 5}>
            <div id="note">
              Keterangan:&nbsp;
              {props.state.buyerInfo.note}
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <SignArea person="Penerima" />
      <SignArea
        person={props.formState === "faktur" ? "Penjual" : "Hormat kami"}
      />
      <SignArea person="Checklist" />
    </footer>
  );
};

const SignArea = ({ person }) => {
  return (
    <div className="sign">
      <h3>{person}</h3>
      <span>________________</span>
    </div>
  );
};

export { InvoiceToPrint, invoiceStyle };
