import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();

  const handleNavigateToMainPage = () => {
    router.push('/');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-green-600 text-black">
      <h1 className="text-4xl" onClick={handleNavigateToMainPage} style={{ color: 'black' }}>
        Cookie Stand Admin
      </h1>
      <div className="bg-gray-200 px-4 py-2 rounded-md">
        <Link href="/overview">
          <button className="text-black font-bold" style={{ color: 'black' }}>Overview</button>
        </Link>
      </div>
    </header>
  );
}