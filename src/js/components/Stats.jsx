import React, { Component } from 'react';
import styled from 'styled-components';
import { faEye, faUserFriends } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const StatsDiv = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StatItem = styled.li`
  margin: 0 5px;
  padding: 5px 8px;
  border-radius: 3px;
  background: ${props => props.data.accent_color};
  font-size: 1.5em;
`;

class Stats extends Component {
  render() {
    return (
      <StatsDiv>
        <StatItem {...this.props}>
          <FontAwesomeIcon icon={faEye} style={{ marginRight: '5px' }} />
          {this.props.channel.views && this.props.channel.views.toLocaleString()}
        </StatItem>
        <StatItem {...this.props}>
          <FontAwesomeIcon icon={faUserFriends} style={{ marginRight: '5px' }} />
          {this.props.channel.followers && this.props.channel.followers.toLocaleString()}
        </StatItem>
      </StatsDiv>
    );
  }
}

export default Stats;
