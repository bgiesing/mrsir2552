import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from './responsive';

const Logo = styled.img`
  margin: 1em;
  width: calc(3vw + 150px);
`;

const ChannelLogo = props => <Logo src="./mrsir-logo-white.png" alt="" />;

export default ChannelLogo;
