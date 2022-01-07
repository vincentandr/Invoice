import React from "react";
import { numberWithCommas } from "../helpers/helper.js";
import NumberFormat from "react-number-format";
import logo from "../assets/logo_with_text.png";

class InvoiceToPrint extends React.PureComponent {
  render() {
    let sizePerPage = 8; // 8 items per print page

    if (this.props.formState === "deliveryOrder") {
      // delivery order tidak ada subtotal / grand total / discount, jadi baris barang bisa muat lbh banyak
      sizePerPage = 10;
    }

    let dataLength = this.props.state.tableData.length; // items count
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
            {...this.props.state.formInfo}
            formState={this.props.formState}
            page={i + 1}
            pageCount={pageCount}
          />
          <BuyerCompany {...this.props.state.formInfo} />
          <Dates
            {...this.props.state.formInfo}
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
        {props.formState === "invoice" && "FAKTUR PENJUALAN"}
        {props.formState === "deliveryOrder" && "SURAT JALAN"}
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
            No. {props.formState === "invoice" ? "faktur" : "surat jalan"}
          </span>
          : {props.number}
        </h3>
        <h3>
          <span>Tanggal dokumen</span>: {props.date}
        </h3>
        {props.formState === "invoice" && (
          <h3>
            <span>Jatuh tempo (30 hari)</span>: {props.due}
          </h3>
        )}
      </div>
    </div>
  );
};

const TableItems = (props) => {
  let startIndex = props.start;
  let endIndex = props.end;
  let subset = props.state.tableData.slice(startIndex, endIndex);

  return (
    <table id="innerTable">
      {/* Columns width based on invoice / delivery order (w/o price & total) */}
      {props.formState === "invoice" ? (
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
          {props.columns.map((column, index) => (
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
                    props.formState === "deliveryOrder") ||
                    props.formState === "invoice")
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
                        // item.discount &&
                        // props.state.formInfo.discount !== 0 ? (
                        //   `${props.state.formInfo.discount}%`
                        // ) : (
                        //   "-"
                        // )

                        `${item[column]}%`
                      ) : (
                        item[column]
                      )}
                    </td>
                  );
                return undefined;
              })}

              {/* Total column */}

              {props.formState === "invoice" && (
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
        {/* Subtotal, Discount, Grand total, Note only on invoice */}
        {props.formState === "invoice" && (
          <>
            <tr className="numeric" id="subtotal">
              <td colSpan="7">Subtotal</td>
              <td>{numberWithCommas(props.state.formInfo.subtotal)}</td>
            </tr>
            <tr className="numeric" id="discount">
              <td colSpan="7">
                {/* {`Discount (${props.state.formInfo.discount}%)`} */}
                Diskon
              </td>
              <td>{numberWithCommas(props.state.formInfo.totalDiscount)}</td>
            </tr>
            <tr className="numeric" id="grandTotal">
              <td colSpan="7">Grand total</td>
              <td>
                {numberWithCommas(
                  parseInt(props.state.formInfo.subtotal) -
                    parseInt(props.state.formInfo.totalDiscount)
                )}
              </td>
            </tr>
          </>
        )}
        <tr>
          <td colSpan={props.formState === "invoice" ? 9 : 5} id="note">
            Keterangan:&nbsp;
            {props.state.formInfo.note}
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
        person={props.formState === "invoice" ? "Penjual" : "Hormat kami"}
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

export { InvoiceToPrint };
