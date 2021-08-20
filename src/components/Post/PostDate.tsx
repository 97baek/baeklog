import React from 'react';
import styled from 'styled-components';

export const PostDate = ({ date }) => {
  return <Date className="post-date">{date}</Date>;
};

const Date = styled.p`
  text-align: right;
  font-size: 12px;
  font-style: italic;
`;
