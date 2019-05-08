import React, { Component } from 'react';
import styled from 'styled-components';
import {
  faAt,
  faStore,
  faDollarSign,
  faLink,
} from '@fortawesome/fontawesome-free-solid';
import {
  faTwitter,
  faYoutube,
  faFacebookF,
  faDiscord,
  faInstagram,
  faSnapchatGhost,
  faSteamSymbol,
  faRedditAlien,
  faGithub,
  faGooglePlus,
  faAmazon,
  faPinterest,
  faBandcamp,
  faSoundcloud,
  faSpotify,
  faTumblr,
  faFlickr,
  faLinkedin,
} from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const SocialItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: space-around;
`;

const Social = styled.a`
  font-size: 2em;
  color: ${props => props.data.font_color};
  transition: all 0.5s ease;
  &:hover {
    color: ${props => props.data.accent_color};
  }
`;

class SocialNetworks extends Component {
  componentDidMount() {}
  render() {
    return (
      <SocialItems>
        {this.props.data.email && (
          <Social {...this.props} href={`mailto:${this.props.data.email}`} aria-label="Email">
            <FontAwesomeIcon icon={faAt} />
          </Social>
        )}
        {this.props.data.merch_link && (
          <Social {...this.props} href={this.props.data.merch_link} aria-label="Merch">
            <FontAwesomeIcon icon={faStore} />
          </Social>
        )}
        {this.props.data.twitter && (
          <Social {...this.props} href={`//www.twitter.com/${this.props.data.twitter}`} aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </Social>
        )}
        {this.props.data.youtube && (
          <Social {...this.props} href={`//www.youtube.com/user/${this.props.data.youtube}`} aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </Social>
        )}
        {this.props.data.facebook && (
          <Social {...this.props} href={`//www.facebook.com/${this.props.data.facebook}`} aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </Social>
        )}
        {this.props.data.discord && (
          <Social {...this.props} href={`//www.discord.gg/${this.props.data.discord}`} aria-label="Discord">
            <FontAwesomeIcon icon={faDiscord} />
          </Social>
        )}
        {this.props.data.donation_link && (
          <Social {...this.props} href={this.props.data.donation_link} aria-label="Tip">
            <FontAwesomeIcon icon={faDollarSign} />
          </Social>
        )}
        {this.props.data.instagram && (
          <Social {...this.props} href={`//www.instagram.com/${this.props.data.instagram}`} aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </Social>
        )}
        {this.props.data.snapchat && (
          <Social {...this.props} href={`//www.snapchat.com/add/${this.props.data.snapchat}`} aria-label="Snapchat">
            <FontAwesomeIcon icon={faSnapchatGhost} />
          </Social>
        )}
        {this.props.data.steam && (
          <Social {...this.props} href={`//www.steamcommunity.com/id/${this.props.data.steam}`} aria-label="Steam">
            <FontAwesomeIcon icon={faSteamSymbol} />
          </Social>
        )}
        {this.props.data.steamgroup && (
          <Social
            {...this.props}
            href={`//www.steamcommunity.com/group/${this.props.data.steamgroup}`} aria-label="Steam Group"
          >
            <FontAwesomeIcon icon={faSteamSymbol} />
          </Social>
        )}
        {this.props.data.steamtrade && (
          <Social
            {...this.props}
            href={`//steamcommunity.com/tradeoffer/new/?${this.props.data.steamtrade}`} aria-label="Steam Trade"
          >
            <FontAwesomeIcon icon={faSteamSymbol} />
          </Social>
        )}
        {this.props.data.reddit && (
          <Social {...this.props} href={`//www.reddit.com/u/${this.props.data.reddit}`} aria-label="Reddit">
            <FontAwesomeIcon icon={faRedditAlien} />
          </Social>
        )}
        {this.props.data.github && (
          <Social {...this.props} href={`//www.github.com/${this.props.data.github}`} aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </Social>
        )}
        {this.props.data.google && (
          <Social {...this.props} href={`//plus.google.com/${this.props.data.google}`} aria-label="Google+">
            <FontAwesomeIcon icon={faGooglePlus} />
          </Social>
        )}
        {this.props.data.amazon && (
          <Social {...this.props} href={`//www.amazon.com/${this.props.data.amazon}`} aria-label="Amazon">
            <FontAwesomeIcon icon={faAmazon} />
          </Social>
        )}
        {this.props.data.pinterest && (
          <Social {...this.props} href={`//www.pinterest.com/${this.props.data.pinterest}`} aria-label="Pinterest">
            <FontAwesomeIcon icon={faPinterest} />
          </Social>
        )}
        {this.props.data.bandcamp && (
          <Social {...this.props} href={`//${this.props.data.bandcamp}.bandcamp.com/`} aria-label="Bandcamp">
            <FontAwesomeIcon icon={faBandcamp} />
          </Social>
        )}
        {this.props.data.soundcloud && (
          <Social {...this.props} href={`//www.soundcloud.com/${this.props.data.soundcloud}`} aria-label="SoundCloud">
            <FontAwesomeIcon icon={faSoundcloud} />
          </Social>
        )}
        {this.props.data.spotify && (
          <Social {...this.props} href={`//open.spotify.com/user/${this.props.data.spotify}`} aria-label="Spotify">
            <FontAwesomeIcon icon={faSpotify} />
          </Social>
        )}
        {this.props.data.tumblr && (
          <Social {...this.props} href={`//${this.props.data.tumblr}.tumblr.com`} aria-label="Tumblr">
            <FontAwesomeIcon icon={faTumblr} />
          </Social>
        )}
        {this.props.data.flickr && (
          <Social {...this.props} href={`//www.flickr.com/photos/${this.props.data.flickr}`} aria-label="Flickr">
            <FontAwesomeIcon icon={faFlickr} />
          </Social>
        )}
        {this.props.data.linkedin && (
          <Social {...this.props} href={`//www.linkedin.com/in/${this.props.data.linkedin}`} aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </Social>
        )}
        {this.props.data.extra_link1 && (
          <Social {...this.props} href={this.props.data.extra_link1} aria-label="Extra1">
            <FontAwesomeIcon icon={faLink} />
          </Social>
        )}
        {this.props.data.extra_link2 && (
          <Social {...this.props} href={this.props.data.extra_link2} aria-label="Extra2">
            <FontAwesomeIcon icon={faLink} />
          </Social>
        )}
        {this.props.data.extra_link3 && (
          <Social {...this.props} href={this.props.data.extra_link3} aria-label="Extra3">
            <FontAwesomeIcon icon={faLink} />
          </Social>
        )}
      </SocialItems>
    );
  }
}

export default SocialNetworks;
