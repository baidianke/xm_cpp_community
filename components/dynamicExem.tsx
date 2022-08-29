import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicHeader = dynamic(() => import('./layout'), {
  suspense: true,
  ssr: false, // 禁止在服务端渲染，window。。。
});

export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicHeader>{1111}</DynamicHeader>
    </Suspense>
  );
}
