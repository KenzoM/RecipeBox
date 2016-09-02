import React, { Component } from 'react';
import { Button, Modal, Row, Input, Icon } from 'react-materialize';

class ModalBox extends Component {
  constructor(props){
    super(props)
    this.submitData = this.submitData.bind(this)
    this.test = this.test.bind(this)
  }
  test(){
    console.log('close!')
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
            <Button
              floating
              large
              waves='light'
              icon={this.props.icon}
              className='green'>
                {this.props.buttonText}</Button
            >
          }
          actions={
            <div>
              <Button
                modal="close"
                onClick={this.test}
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
                s={8}
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
