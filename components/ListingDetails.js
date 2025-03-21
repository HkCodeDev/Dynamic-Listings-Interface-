import { Container, Row, Col } from 'react-bootstrap';

export default function ListingDetails({ listing }) {
  return (
    <Container>
      <Row>
        {/* Left Column: Image */}
        <Col lg>
          <img
            onError={(event) => {
              event.target.onerror = null; // Prevent infinite loop
              event.target.src = "https://placehold.co/600x400?text=Photo+Not+Available";
            }}
            className="img-fluid w-100"
            src={listing.images?.picture_url || "https://placehold.co/600x400?text=Photo+Not+Available"}
            alt="Listing Image"
          />
          <br />
          <br />
        </Col>

        {/* Right Column: Listing Details */}
        <Col lg>
          {/* Neighborhood Overview */}
          {listing.neighborhood_overview ? (
            <>
              <p>{listing.neighborhood_overview}</p>
              <br />
            </>
          ) : (
            <p>No neighborhood overview available.</p>
          )}

          {/* Price */}
          <p>
            <strong>Price:</strong> ${listing.price.toFixed(2)}
          </p>

          {/* Room Type */}
          <p>
            <strong>Room:</strong> {listing.room_type}
          </p>

          {/* Bed Type */}
          <p>
            <strong>Bed:</strong> {listing.bed_type} ({listing.beds})
          </p>
          
          {/* Ratings */}
          {listing.review_scores?.review_scores_rating && listing.number_of_reviews ? (
            <p>
              <strong>Rating:</strong> {listing.review_scores.review_scores_rating}/100 ({listing.number_of_reviews} Reviews)
            </p>
          ) : (
            <p>No rating information available.</p>
          )}
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
}
