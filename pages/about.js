import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

// Fetch the listing data for pre-rendering
export async function getStaticProps() {
  const _id = '1206363';
  const res = await fetch(`https://web422a1-xdj1.onrender.com/api/listings/${_id}`);
  const data = await res.json();
  
  console.log('Fetched listing:', data);  // Check if the _id exists

  return {
    props: {
      listing: data
    }
  };
}

export default function About({ listing }) {
  return (
    <>
      {/* Page Header */}
      <PageHeader text="About the Developer - XXX" />

      {/* About the Developer */}
      <Card className="bg-light">
        <Card.Body>
          <p>
            Hello, I am XXX
          </p>
          <p>
            Below is an example of a listing fetched from our Listings:
          </p>

          {/* Link to Specific Listing */}
          {listing && listing._id ? (
            <Link href={`/listing/${listing._id}`} passHref legacyBehavior>
              <a>View Listing</a>
            </Link>
          ) : (
            <p>Loading listing details...</p>
          )}
        </Card.Body>

        {/* Listing Details */}
        {listing && <ListingDetails listing={listing} />}
      </Card>
    </>
  );
}
