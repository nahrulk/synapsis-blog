import { GetServerSideProps } from "next";
import CompletePost from "@/types/completePost";

const DetailPost = ({ post }: { post: CompletePost }) => {
  return <div>{post.id}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params; // Access the id from the dynamic route

  try {
    const response = await fetch(`/api/getPostById?id=${id}`);
    const data = await response.json();
    const post = data; // Assuming the API response is just the post data

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return {
      notFound: true,
    };
  }
};

export default DetailPost;
