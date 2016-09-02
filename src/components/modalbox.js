import React, { Component } from 'react';
import { Button, Modal, Row, Input, Icon } from 'react-materialize';

class ModalBox extends Component {
  constructor(props){
    super(props)
    this.submitData = this.submitData.bind(this)
  }
  submitData(linky){
    linky()
  }
  render() {
    return (
      <div>
        <Modal
          header={this.props.modalTextTitle}
          trigger={
            <Button waves='light'>{this.props.modalTextTitle}</Button>
          }
          actions={
            <div>
              <Button
                modal="close"
                waves="light">Close baby
              </Button>
              <Button
                modal="close"
                waves="light"
                onClick={ () => this.submitData(this.props.onClickSubmit)}>
                  {this.props.modalTextTitle}
              </Button>
            </div>
          }
          >
          <Row>
              <Input
                value={this.props.recipeName}
                onChange= {this.props.handleRecipeNameChange}
                type="text"
                s={6}
                label="Recipe Name"
                validate>
                  <Icon>mode_edit</Icon>
                </Input>
              <Input
                value={this.props.userIngredients}
                onChange={this.props.handleUserIngredientsChange}
                type="text"
                s={12}
                label="Ingredients"
                validate>
                  <Icon>mode_edit</Icon>
                </Input>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default ModalBox
