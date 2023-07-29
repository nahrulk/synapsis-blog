"use client";

import { Categories, PostCard, PostWidget } from "@/components";
import CompletePost from "@/types/completePost";
import { GetStaticProps } from "next";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [postData, setPostData] = useState<CompletePost[] | null>(null); // Specify the correct type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getPosts");
        const data = await response.json();
        // console.log(data);
        setPostData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(postData);

  return (
    <div className="container mx-auto px-10 mb-8">
      <span className="sr-only">Post Card Section</span>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className=" col-span-1 lg:col-span-8 ">
          {postData?.map((postData: CompletePost) => (
            <PostCard item={postData} key={postData.title} />
          ))}
        </div>
        <span className="sr-only">Recent, etc</span>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
