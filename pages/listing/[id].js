import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

export default function Listing() {
  const router = useRouter();
  const { id } = router.query; 

  // Fetch listing data using SWR
  const { data, error, isLoading } = useSWR(id ? `https://web422a1-xdj1.onrender.com/api/listings/${id}` : null);

  // If the data loading, return null to prevent rendering
  if (isLoading) return null;

  
  if (error || !data) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {/* Page Header with the listing's name */}
      <PageHeader text={data.name} />

      {/* Listing details */}
      <ListingDetails listing={data} />
    </>
  );
}
