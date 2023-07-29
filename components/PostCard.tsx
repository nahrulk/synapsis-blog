import CompletePost from "@/types/completePost";
import Link from "next/link";

const PostCard = ({ item }: { item: CompletePost }) => {
  return (
    <div className="bg-white shadow-sm rounded-md p-0 lg:p-8 pb-12 mb-8">
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-teal-600 text-base lg:text-2xl font-semibold p-3">
        <Link href="">{item.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
          </svg>
          <p className="inline align-middle text-gray-700 ml-2 font-normal text-xs lg:font-medium lg:text-lg">
            {item.user?.name || "Anonimous"}
          </p>
        </div>
        <div className="font-medium text-gray-700 flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path>
            <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
          </svg>
          <span className="align-middle font-normal text-xs lg:font-medium lg:text-lg">
            {item.comments?.length || "0"}
          </span>
        </div>
      </div>
      <div className="text-center">
        <Link href={`/post/${item.id}`}>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-teal-600 text-sm font-base rounded-md text-white px-5 py-2 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
