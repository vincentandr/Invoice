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
      page-break-before: always;
      page-break-after: always;
      display: block;
    }

    #title{
      text-align: center;
    }

    .invoice{
      font-size: 0.8em;
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
        height:17.5em;
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
        line-height:0.8em;
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
