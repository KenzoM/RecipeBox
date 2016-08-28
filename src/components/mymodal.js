import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default (props) => {
  const centerText = {
    textAlign : 'center'
  }
  return (
    <Modal show={props.showModal} onHide={props.toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title style={centerText}>{props.modalTextTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
        <div className="form-group">
          <label htmlFor="recipeName">Name of Recipe:</label>
          <input
            value={props.recipeName}
            onChange={props.handleRecipeNameChange}
            type="text"
            className="form-control"
            id="recipeName" />
        </div>
        <div className="form-group">
          <label htmlFor="userIngredients">Ingredients:</label>
          <textarea
            placeholder="you can seperate by comma"
            onChange = {props.handleUserIngredientsChange}
            value={props.userIngredients}
            type="text"
            className="form-control"
            id="userIngredients" />
        </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
        bsStyle="info"
        onClick={props.onClickSubmit}>{props.modalTextTitle}
        </Button> <Button
        bsStyle="danger"
        onClick={props.toggleModal}>Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
