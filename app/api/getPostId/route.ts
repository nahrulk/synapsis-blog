import CompletePost from '@/types/completePost';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';



export  async function POST(req: NextApiRequest, res: NextResponse) {
    const { idReq } = req.query;
    try {
      const response = await fetch("/api/getPosts"); // Make an API call to get the postData
      const postData = await response.json();
  
      const post = postData.find((post : any) => post.id === parseInt(idReq));
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      // Use the 'post' directly or do any other processing as needed
      return res.status(200).json(post);
    } catch (error) {
      console.error("Error fetching data:", error);
      return res.status(500).json({ message: "Error fetching data" });
    }
  }