import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

interface PostProps {
  title: string;
  content: string;
  authorName: string;
  authorCollege: string;
}

export default function Post({
  title,
  content,
  authorName,
  authorCollege,
}: PostProps) {
  return (
    <Card
      className='rounded-lg shadow transition hover:shadow-lg sm:min-w-4'
      style={
        {
          /* your styles here */
        }
      }
    >
      <CardHeader className='border-solid whitespace-normal'>
        <div className='flex items-center m-9'>
          <Avatar
            className='justify-initial w-10 h-10 rounded-full'
            style={{ width: '50px', height: '50px' }}
          >
            <AvatarImage
              className='rounded-full'
              src='https://github.com/shadcn.png'
              style={{ borderRadius: '50%' }}
            />
            <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className=''>
            <p className=''>{authorName}</p>
            <p className='overflow-'>{authorCollege}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent
        className='w-full h-full'
        style={{ backgroundColor: 'lightblue', padding: '10px' }}
      >
        <CardTitle>{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
        <Image
          className='w-full object-cover'
          height={500}
          width={500}
          src='https://github.com/shadcn.png'
          alt={''}
        />
      </CardContent>
      <CardFooter className='flex justify-between m-3'>
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </CardFooter>
    </Card>
  );
}
