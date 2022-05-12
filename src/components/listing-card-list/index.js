import { Container, Row } from 'react-bootstrap';
import { ReducedListingCard } from '@propertyguru/hive-ui-widgets';

import styles from './listing-card-list.module.css';

const ListingCardList = ({ listings }) => {
  return (
    <Container fluid className={styles['listing-card-list-wrapper']}>
      <Container className={styles['listing-card-list']}>
        <Row className="mb-3">
          <h5>Showing {listings.length} of 145 listings</h5>
        </Row>
        <Row>
          {listings.map((listing) => {
            const { id, title, address, bedrooms, bathrooms, totalPrice, tokenPrice, perTokenROI, pictures } = listing;
            return (
              <ReducedListingCard
                address={address}
                data={{
                  label: {
                    anchorLabel: `Token Price: S$ ${tokenPrice}`,
                    anchorLabelVariation: 'teal',
                    typeLabel: `Rent per Token: S$ ${perTokenROI}/year`,
                  },
                  pricing: {
                    currency: 'S$',
                    price: totalPrice,
                  },
                  rooms: {
                    baths: bathrooms,
                    beds: bedrooms,
                  },
                }}
                image={pictures[0]}
                link={{
                  href: `/listing-detail/${id}`,
                  rel: 'noreferrer noopener',
                  target: '_blank',
                }}
                onClick={function noRefCheck() {}}
                title={title}
              />
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default ListingCardList;
