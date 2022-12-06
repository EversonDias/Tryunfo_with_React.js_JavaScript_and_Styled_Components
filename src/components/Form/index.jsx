import React from 'react';
import PropsType from 'prop-types';
import Container from './style';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      saveButton,
    } = this.props;

    return (
      <Container>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição
          <input
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1">
          Attr1
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          Attr2
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          Attr3
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <select
          name="cardRare"
          id=""
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito-raro">Muito Raro</option>
        </select>

        <label htmlFor="checkTrunfo">
          <input
            type="checkbox"
            name="checkTrunfo"
            value="checkboxTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ saveButton }
        >
          Salvar
        </button>
      </Container>
    );
  }
}

Form.propType = {
  cardName: PropsType.string,
  cardDescription: PropsType.string,
  cardAttr1: PropsType.string,
  cardAttr2: PropsType.string,
  cardAttr3: PropsType.string,
  cardImage: PropsType.string,
  cardRare: PropsType.string,
  cardTrunfo: PropsType.bool,
  hasTrunfo: PropsType.bool,
  isSaveButtonDisabled: PropsType.bool,
  onInputChange: PropsType.func,
  onSaveButtonClick: PropsType.func,
};

export default Form;