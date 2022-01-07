export const invoiceStyle = `
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
      page-break-after: always;
      display: block;
    }

    #title{
      text-align: center;
    }

    .invoice{
      font-size: 0.8em;
      height: 100%;
      width: 100%;
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
        height:18.5em;
        font-size: 1.2em;
        border-top: solid 2pt black;
      }
      table tr{
        height:1em;
      }
      table tbody tr:last-child{
        height:auto !important;
      }
      table td, table th{
        border-left: solid 2pt black;
        border-right: solid 2pt black;
        padding-left: 2pt;
        padding-right: 2pt;
        vertical-align:text-top; 
      }
      table th{
        border-bottom: solid 2pt black;
      }
      table #subtotal td {
        border-top: solid 2pt black;
        border-bottom: none;
      } 
      table #discount td{
        border-top: none;
        border-bottom: none;
      }
       table #grandTotal td{
         border-bottom: solid 2pt black;
         font-weight: bold;
       }
      table #note{
        height: 1.5em;
        overflow: hidden;
        border-top: none;
        border-bottom: solid 2pt black;
      }

      h3 {
        line-height:0.8em;
      }
      footer {
        display: flex;
        position:fixed;
        justify-content:center;
        width: 100%;
        bottom: 0;
        margin-top: 0.5em;
        text-align:center;
      }
      .sign:nth-child(2){
        margin-left: 5em;
      }
      
      .sign:last-child{
        margin-left: 5em;
      }
      .sign h3{
        padding-bottom: 1.5em;
      }
  }
  `;
