import styles from './TextfieldPage.module.scss';
import React, { Component } from 'react';
// import classnames from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';

import Textfield from './../../components/Textfield/Textfield';
import Table from './../../components/Table/Table';
import Text from './../../components/Text/Text';

import * as yup from 'yup';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
  {
    required: true,
    name: 'id',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'className',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'placeholder',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'small',
    type: 'boolean',
    default: 'false',
    help:
      'Add this props if you want to use small Textfield. By default, Textfield is using medium size.'
  },
  {
    required: false,
    name: 'required',
    type: 'boolean',
    default: 'false'
  },
  {
    required: false,
    name: 'disabled',
    type: 'boolean',
    default: 'false'
  },
  {
    required: false,
    name: 'label',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'secondaryLabel',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'tertiaryLabel',
    type: 'any',
    default: '-'
  },
  {
    required: false,
    name: 'type',
    type: '"text" | "email" | "password" | "number" | "url"',
    help: 'Textfield will provide validation by default based on the type.',
    default: 'text'
  },
  {
    required: false,
    name: 'tone',
    type: '"neutral" | "critical" | "positive"',
    default: '-'
  },
  {
    required: false,
    name: 'message',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'yupShape',
    type: 'Yup shape object',
    help: `This is for field validation purpose. Go to yup to see more details.`,
    default: '-'
  }
];

const yupShape = {
  email: yup
    .string()
    .email('Email is not valid')
    .required('Email is required')
};

class TextfieldPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          title="Textfield"
          description="TextField allows for text input."
        />
        <Table
          className={styles.tableProps}
          head={headProps}
          body={bodyProps}
        />
        <Subheader
          title="Example"
          description="A TextField will expand to fill the width of their parent container."
        />
        <Preview>
          <Textfield
            // yupShape={yupShape}
            type="email"
            className={styles.field}
            id="location"
            required
            placeholder="This is a good placeholder text"
            label="Enter your location name"
            secondaryLabel="(So keep your eyes on me now)"
            tertiaryLabel={<Text link>help?</Text>}
            value="hello@gmail.com"
            // hint="This is the hint message that we have here"
            // errorMessage="This is the error message"
          />
        </Preview>
      </React.Fragment>
    );
  }
}

export default TextfieldPage;
