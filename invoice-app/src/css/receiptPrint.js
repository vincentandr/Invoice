export const receiptStyle = `
    @media print{
      html *{
        font-family: "Trebuchet MS";
        font-size: 0.97em;
      }
      
      @page { 
        size: 21.59cm 13.97cm;
      }

      h1 {
        font-size: 2em;
      }

      #logo{
        position: absolute;
        bottom: 7%;
        text-align: center; 
        left: 0;
        right: 0;
      }

      .field {
        border-bottom: solid 2px black;
      }

      #textarea{
        position: absolute;
        word-wrap: break-word;
        line-height: 2.1em;
        top: -1mm;
      }

      .footer{
        font-size: 0.8em;
      }
    }
`;
