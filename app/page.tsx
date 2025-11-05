import LandingPage from './pages/landing-page';

export default function Home() {
  return (
    <div className="grid items-center  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <LandingPage />
      </main>
    </div>
  );
}
