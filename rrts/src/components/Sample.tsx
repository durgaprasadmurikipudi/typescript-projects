import React from 'react';

interface SampleProps {
  text: string;
}

const Sample = (props: SampleProps): JSX.Element => {
  return (
    <h1>{props.text}</h1>
  )
};

export default Sample;