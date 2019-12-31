import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class WinnerCard extends Component {

    state = {
        show: false
    }

    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <div>
          <div className="biohack-winners">
            <h4>
              {this.props.icon2}{" "}
              {this.props.category}{' :'}
            </h4>
            <h4 className="mt-3">
              {this.props.projectName}
            </h4>
            <div className="icons-card">
              {this.props.icon1}
            </div>
            <p>
              {this.props.description.substring(0, 160) + " ..."}  
            </p>
            <Button className="mt-4 mb-3" variant="light" bsSize="large" onClick={this.handleShow}>
                Read Full
            </Button>
          </div>
  
          <Modal className="biohack-winners-modal" show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>{this.props.icon2}{" "}{this.props.category}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="biohack-winners-card">
              <div className="icons-modal">
                  {this.props.icon1}{" "}
                  {this.props.projectName}
              </div>
              <img src={this.props.image} alt={"BioHack 2019" + this.props.projectNam}/>
              <p>
                {this.props.description}  
              </p>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

export default WinnerCard;
