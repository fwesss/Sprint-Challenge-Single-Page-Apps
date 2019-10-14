import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';


const CharacterCard = ({ character }) => (
  <Card>
    <CardImg top width="100%" src={character.image} />
    <CardHeader tag="h2">{character.name}</CardHeader>
    <CardBody>
      <ListGroup flush>
        <ListGroupItemHeading tag="h3">Character Info</ListGroupItemHeading>
        <ListGroupItem>
          <ListGroupItemHeading>Species</ListGroupItemHeading>
          <ListGroupItemText>{character.species}</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Type</ListGroupItemHeading>
          <ListGroupItemText>{character.type}</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Gender</ListGroupItemHeading>
          <ListGroupItemText>{character.gender}</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Origin</ListGroupItemHeading>
          <ListGroupItemText>{character.origin.name}</ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    type: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default CharacterCard;
