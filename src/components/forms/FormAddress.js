import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormAddress = (props) => (
  <Form>
    <Form.Field>
      <label>CEP</label>
      <input placeholder='Insira o cep do local.' />
    </Form.Field>
    <Button type='submit'>Buscar</Button>
  </Form>
)

export default FormAddress