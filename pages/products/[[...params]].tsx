import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: ParsedUrlQuery }[] = [
    {
      params: {
        params: [],
      },
    },
    {
      params: {
        params: ["book"],
      },
    },
    {
      params: {
        params: ["book", "1"],
      },
    },
  ];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: queryParams }) => {
  const { params } = queryParams;

  return {
    props: {
      params,
    },
  };
};

export default function Product({ params }) {
  return <div>{JSON.stringify(params, undefined, 2)}</div>;
}
