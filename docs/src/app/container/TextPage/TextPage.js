import styles from './TextPage.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from './../../components/Text/Text';
import Table from './../../components/Table/Table';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
  {
    required: true,
    name: 'children',
    type: 'React.Node',
    default: '-'
  },
  {
    required: true,
    name: 'type',
    type:
      '"display1" | "display2" | "display3" | "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "heading6" | "small" | "medium" | "large"',
    help: 'Use the value directly as a props in Text component',
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
    name: 'component',
    type: 'string',
    default: '<span>'
  },
  {
    required: false,
    name: 'link',
    type: 'boolean',
    help: 'Apply link styles to the text.',
    default: 'false'
  },
  {
    required: false,
    name: 'align',
    type: '"left" | "center" | "right"',
    default: '"left"'
  }
];

const TextPage = ({ className, ...restProps }) => {
  return (
    <React.Fragment>
      <Header
        title="Text"
        description="The Text component should be used for all text on the page."
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      <Subheader
        title="Type"
        description="These all you need for a every text on your app"
      />
      <Preview>
        <Text className={styles.textList} display1 component="h1">
          Display1
        </Text>
        <Text className={styles.textList} display2 component="h1">
          Display2
        </Text>
        <Text className={styles.textList} display3 component="h1">
          Display3
        </Text>
        <Text className={styles.textList} heading1 component="h1">
          Heading1
        </Text>
        <Text className={styles.textList} heading2 component="h1">
          Heading2
        </Text>
        <Text className={styles.textList} heading3 component="h1">
          Heading3
        </Text>
        <Text className={styles.textList} heading4 component="h1">
          Heading4
        </Text>
        <Text className={styles.textList} heading5 component="h1">
          Heading5
        </Text>
        <Text className={styles.textList} heading6 component="h1">
          Heading6
        </Text>
        <Text className={styles.textList} large component="h1">
          Large paragraph -- The quick brown fox jumps over the lazy dog
        </Text>
        <Text className={styles.textList} medium component="h1">
          Medium paragraph -- The quick brown fox jumps over the lazy dog
        </Text>
        <Text className={styles.textList} small component="h1">
          Small paragraph -- The quick brown fox jumps over the lazy dog
        </Text>
        <Text
          className={classnames(styles.textList, styles.link)}
          heading3
          link
          component="h1"
        >
          Heading3 as link text
        </Text>
      </Preview>
    </React.Fragment>
  );
};

export default TextPage;
