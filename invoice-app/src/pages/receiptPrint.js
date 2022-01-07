import React from "react";
import logo_rotated from "../assets/logo_with_text_rotated.png";
import { numberWithCommas } from "../helpers/helper.js";
import { Row, Col, Layout, Space } from "antd";

const { Header, Sider, Content } = Layout;

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
    // setTextareaString(this.props.state.formInfo.matter);
    return (
      <Layout
        style={{
          backgroundColor: "transparent",
          fontSize: "1.2em",
        }}
      >
        <Sider
          width="15%"
          style={{
            backgroundColor: "transparent",
            border: "solid 2mm black",
            borderStyle: "double",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo_rotated} alt="logo" />
        </Sider>
        <Layout
          style={{
            backgroundColor: "transparent",
          }}
        >
          <Header
            style={{
              backgroundColor: "transparent",
              borderRight: "solid 0.5mm black",
              borderTop: "solid 0.5mm black",
              borderBottom: "solid 0.5mm black",
            }}
          >
            <h1>Kwitansi</h1>
          </Header>

          <Content
            style={{
              backgroundColor: "transparent",
              borderRight: "solid 0.5mm black",
              borderBottom: "solid 0.5mm black",
              height: "40%",
            }}
          >
            <Space
              direction="vertical"
              size="small"
              style={{ width: "100%", marginTop: "1em", marginBottom: "1em" }}
            >
              <Row>
                <Col span="5" offset="1">
                  No. kwitansi
                </Col>
                <Col span="1">:</Col>
                <Col className="field" span="15">
                  {this.props.state.formInfo.receiptNumber}
                </Col>
              </Row>
              <Row align="bottom">
                <Col span="5" offset="1">
                  Sudah terima dari
                </Col>
                <Col span="1">:</Col>
                <Col className="field" span="15">
                  {this.props.state.formInfo.name}
                </Col>
              </Row>
              <Row>
                <Col span="5" offset="1">
                  Banyaknya uang
                </Col>
                <Col span="1">:</Col>
                <Col className="field" span="15">
                  <div id="textarea">
                    {this.props.state.formInfo.amountWritten}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="field" offset="7" span="15">
                  &nbsp;
                </Col>
              </Row>
              <Row>
                <Col span="5" offset="1">
                  Untuk pembayaran
                </Col>
                <Col span="1">:</Col>
                <Col className="field" span="15">
                  <div id="textarea">{this.props.state.formInfo.matter}</div>
                </Col>
              </Row>
              <Row>
                <Col className="field" offset="7" span="15">
                  &nbsp;
                </Col>
              </Row>
              <Row>
                <Col className="field" offset="7" span="15">
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
                  {this.props.state.formInfo.date}
                </Col>
              </Row>
              <Row className="footer">
                <Col offset="1" span="4">
                  Cek / Giro No.
                </Col>
                <Col className="field" span="6">
                  {this.props.state.formInfo.giroNumber}
                </Col>
              </Row>
              <Row className="footer">
                <Col offset="1" span="4">
                  Jumlah
                </Col>
                <Col className="field" span="6">
                  Rp.&nbsp;{numberWithCommas(this.props.state.formInfo.amount)}
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

export { ReceiptToPrint };
