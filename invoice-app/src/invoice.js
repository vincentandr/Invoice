import React from "react";
import { numberWithCommas } from "./util.js";
import NumberFormat from "react-number-format";


const invoiceStyle = `
  @media print {  
      @page { 
      size: 21.59cm 13.97cm;
    } 

    .numeric{
      text-align:right;
    }

    #invoice{
      font-size: 0.7em;
    }

    #top {
      display:flex;
      justify-content:center;
      align-items:center;
    }

    header {
      display:flex;
    }

    #title{
      margin-left: auto;
    }

    #invoiceNo{
      margin-left: auto;
    }

    #buyerCompany{
      margin-left: auto;
    }

     table{
        width: 100%;
        font-size: 1.2em;
      }

      table td, table th{
        border-left: solid 1px black;
        border-right: solid 1px black;
        padding-left: 1mm;
        padding-right: 1mm;
      }

      table, table th, table #note, table #grandTotal{
        border: solid 1px black;
      }

      table #note{
        border: none;
        height: 3em;
        overflow: hidden;
      }

      h3 {
        line-height:1em;
      }
    }
  `;

class Invoice extends React.PureComponent {
  render() {
    return (
      <div id="invoice">
        <TopPart number={this.props.state.buyerInfo.number} />
        <Header {...this.props.state.buyerInfo} />
        <TableItems {...this.props} />
        <Footer />
      </div>
    );
  }
}

const TopPart = ({number}) => {
  return (
    <div id="top">
      <h1 id="title">FAKTUR PENJUALAN</h1>
      <h3 id="invoiceNo">No. faktur: {number}</h3>
    </div>
  );
};

const SellerCompany = () => {
  return (
    <div id="sellerCompany">
      <h1>Logo</h1>
      <h3>031 5460169</h3>
    </div>
  );
};

const BuyerCompany = (props) => {
  return (
    <div id="buyerCompany">
      <h3>Kepada Yth.</h3>
      <h3>{props.name}</h3>
      <h3>{props.address}</h3>
      <h3>{props.city}</h3>
    </div>
  );
};

const Header = (props) => {
  return (
    <header>
      <SellerCompany />
      <BuyerCompany {...props} />
    </header>
  );
};;

const TableItems = (props) => {
  return (
  <table>
    <colgroup>
      <col span="1" style={{ width: "5%" }} />
      <col span="1" style={{ width: "15%" }} />
      <col span="1" style={{ width: "35%" }} />
      <col span="1" style={{ width: "10%" }} />
      <col span="1" style={{ width: "10%" }} />
      <col span="1" style={{ width: "10%" }} />
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
          <tr key={outerIndex}>
            {Object.keys(item).map((column, innerIndex) => (
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
            ))}
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
      <tr className="numeric" id="grandTotal">
        <td colSpan="5">Grand total:</td>
        <td>{numberWithCommas(props.state.grandTotal)}</td>
      </tr>
      <tr>
        <td colSpan="6">
          <div id="note">
            Keterangan: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae consequatur illo nostrum facilis iusto qui debitis perferendis
            cum iure corrupti. Reprehenderit eius repudiandae fugit nisi
            incidunt eligendi tempore, explicabo mollitia. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni eveniet labore temporibus illum,
            ullam modi corporis facilis asperiores quasi itaque soluta amet?
            Tempore qui, iusto rem eveniet libero dolor fuga. Quae atque,
            reiciendis iste consectetur tenetur ipsum, nobis omnis rerum illo
            quos dolorem obcaecati similique nam magni tempore ratione esse quam
            laborum?
            {props.state.buyerInfo.note}
          </div>
        </td>
      </tr>
    </tbody>
  </table>);
};

const Footer = () => {
  return <footer>
    
  </footer>
}

export { Invoice, invoiceStyle };
