import Image from 'next/image';
import Post from '@/components/myComponents/card/card';
export default function Home() {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    <main className='min-w-64 flex min-h-screen flex-col items-center justify-between p-24'>

      {/* <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'> */}
        <Post
          title={'New York City'}
          content={'Hey guys, we are in newyork city rn. It is so cool'}
          // image={'fdsff'}
          authorName={'Ashik Kabeer'}
          authorCollege={'Musaliar College of Engineering and Technology'}
        />

<Post
          title={'New York City'}
          content={'Hey guys, we are in newyork city rn. It is so cool'}
          // image={'fdsff'}
          authorName={'Ashik Kabeer'}
          authorCollege={'Musaliar College of Engineering and Technology'}
        />
      {/* </div> */}
    </main>
  );
}
