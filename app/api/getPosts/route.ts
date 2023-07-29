import CompletePost from '@/types/completePost';
import { NextResponse } from 'next/server';



export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // const id = searchParams.get('id');
    const resPost = await fetch(`https://gorest.co.in/public/v2/posts`);
    const resUsers = await fetch(`https://gorest.co.in/public/v2/users`);
    const resComments = await fetch(`https://gorest.co.in/public/v2/comments`);
    const posts = await resPost.json();
    const users= await resUsers.json();
    const comments = await resComments.json();

    const completePosts: CompletePost[] = posts.map((post : any) => {
      const user = users.find((u : any) => u.id === post.user_id);
      const postComments = comments.filter((comment : any) => comment.post_id === post.id);

      return {
        ...post,
        user,
        comments: postComments,
      };
    });

    return NextResponse.json(completePosts);
  } catch (error) {
    console.error('Error fetching data:', error);
    // return NextResponse.error('Failed to fetch data');
  }
}
