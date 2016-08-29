import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class ModalBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(){
    this.setState({
      showModal: !this.state.showModal
    });
  }
  submitData(link){
    link()
    this.toggleModal()
  }
  render() {
    return (
      <div>
        <Button
          bsStyle="info"
          onClick={this.toggleModal}
          >
          {this.props.modalTextTitle}
        </Button>

        <Modal show={this.state.showModal} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalTextTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="recipeName">Name of Recipe:</label>
                <input
                  value={this.props.recipeName}
                  onChange= {this.props.handleRecipeNameChange}
                  type="text"
                  className="form-control"
                  id="recipeName" />
              </div>
              <div className="form-group">
                <label htmlFor="userIngredients">Ingredients:</label>
                <textarea
                  placeholder="you can seperate by comma"
                  value={this.props.userIngredients}
                  onChange={this.props.handleUserIngredientsChange}
                  type="text"
                  className="form-control"
                  id="userIngredients" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="info"
              onClick={ () => this.submitData(this.props.onClickSubmit) }>
              {this.props.modalTextTitle}
            </Button>
            <Button
              bsStyle="danger"
              onClick= {this.toggleModal}
            >Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalBox
