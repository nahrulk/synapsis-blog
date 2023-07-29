interface User {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }
  
 
  interface Comment {
    id: number;
    post_id: number;
    name: string;
    email: string;
    body: string;
  }
  
 export default interface CompletePost {
    id: number;
    user_id: number;
    title: string;
    body: string;
    user: User;
    comments: Comment[];
  }