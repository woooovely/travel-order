import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";

const fetchImages = () => {
  return axios.get("http://localhost:4000/products");
};

const MoreProducts = () => {
  const { isLoading, isError, error, data }: any = useQuery(
    "see-more",
    fetchImages
  );

  if (isLoading) {
    return <h2>로딩중...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
        {data?.data.map((items: any) => (
            
        ))}
    </div>
  )
};

export default MoreProducts;
