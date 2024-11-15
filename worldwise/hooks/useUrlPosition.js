import { useSearchParams } from "react-router-dom";

export default function useUrlPosition() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat") || 0;
  const lng = searchParams.get("lng") || 0;

  return [lat, lng];
}
