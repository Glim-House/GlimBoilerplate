import {Text as RnText} from 'react-native';
import React from 'react';

interface Props {
  content: string;
}
const Text = ({content}: Props) => {
  return (
    <>
      <RnText>{content}</RnText>
    </>
  );
};

export default Text;
