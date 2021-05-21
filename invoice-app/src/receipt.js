import React from "react";
import logo_rotated from "./assets/logo_with_text_rotated.png";
import { numberWithCommas } from "./util.js";
import {Row, Col, Layout, Space} from "antd";

const {Header, Sider, Content} = Layout;

const receiptStyle = `
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

// const setTextareaString = (text) => {
//   var textareas = document.getElementsByClassName("textarea");

//   if(textareas !== undefined && text.length > 0 && textareas.length > 0){
//     var words = text.split(" ");

//     for(var i=0;i<3;i++){
//       textareas[i].innerHTML = "&nbsp;";
//     }

//     for(var i=0, j=0, count=0; i<words.length;i++){
//       if(words[i].length <= 37){
//         count += words[i].length + 1;

//         if(count > 45){
//           count = words[i].length;
//           j++;
//         }

//         textareas[j].append(words[i] + " ");
//       }else{
//         var splits = words[i].match(/.{1,37}/g);

//         for(var k=0;k<splits.length;k++){
//           if(count > 0){
//             j++;
//           }

//           textareas[j+k].append(splits[k] + " ");
//         }
//       }
//     }
//   }
// }

class ReceiptToPrint extends React.PureComponent {
  render() {
      // setTextareaString(this.props.state.data.matter);
      return (
        <Layout
          style={{
            backgroundColor: "transparent",
            height: "99%",
            fontSize: "1.2em",
          }}
        >
          <Sider
            width="15%"
            style={{
              backgroundColor: "transparent",
              border: "solid 4px black",
              borderStyle: "double",
            }}
          >
            <div id="logo">
              <img src={logo_rotated} alt="logo" />
            </div>
          </Sider>
          <Layout
            style={{
              backgroundColor: "transparent",
              border: "solid 1px black",
            }}
          >
            <Header
              style={{
                backgroundColor: "transparent",
                border: "solid 1px black",
              }}
            >
              <h1>Kwitansi</h1>
            </Header>

            <Content
              style={{
                backgroundColor: "transparent",
                border: "solid 1px black",
                height: "40%",
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                <Row style={{ marginTop: "1em" }}>
                  <Col span="6" offset="1">
                    No. kwitansi
                  </Col>
                  <Col span="1">:</Col>
                  <Col className="field" span="14">
                    {this.props.state.data.receiptNumber}
                  </Col>
                </Row>
                <Row align="bottom">
                  <Col span="6" offset="1">
                    Sudah terima dari
                  </Col>
                  <Col span="1">:</Col>
                  <Col className="field" span="14">
                    {this.props.state.data.name}
                  </Col>
                </Row>
                <Row>
                  <Col span="6" offset="1">
                    Banyaknya uang
                  </Col>
                  <Col span="1">:</Col>
                  <Col className="field" span="14">
                    <div id="textarea">
                      {this.props.state.data.amountWritten}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="field" offset="8" span="14">
                    &nbsp;
                  </Col>
                </Row>
                <Row>
                  <Col span="6" offset="1">
                    Untuk pembayaran
                  </Col>
                  <Col span="1">:</Col>
                  <Col className="field" span="14">
                    <div id="textarea">{this.props.state.data.matter}</div>
                  </Col>
                </Row>
                <Row>
                  <Col className="field" offset="8" span="14">
                    &nbsp;
                  </Col>
                </Row>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <Row>
                    <Col className="field" offset="8" span="14">
                      &nbsp;
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      className="field"
                      offset="16"
                      span="5"
                      style={{ textAlign: "center" }}
                    >
                      {this.props.state.data.date}
                    </Col>
                  </Row>
                </Space>
                <Row>
                  <Col>&nbsp;</Col>
                </Row>
                <Row className="footer">
                  <Col offset="1" span="4">
                    Cek / Giro No.
                  </Col>
                  <Col className="field" span="8">
                    {this.props.state.data.giroNumber}
                  </Col>
                </Row>
                <Row className="footer">
                  <Col offset="1" span="4">
                    Jumlah
                  </Col>
                  <Col className="field" span="8">
                    Rp.&nbsp;{numberWithCommas(this.props.state.data.amount)}
                  </Col>
                  <Col className="field" offset="16" span="5"></Col>
                </Row>
              </Space>
            </Content>
          </Layout>
        </Layout>
      );
  }
}

export {ReceiptToPrint, receiptStyle};