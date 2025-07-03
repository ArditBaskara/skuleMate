'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SettingsPage() {
  const [apiLink, setApiLink] = useState('');
  const [savedApi, setSavedApi] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('apiLink');
    if (stored) {
      setApiLink(stored);
      setSavedApi(stored);
    }
  }, []);

  const handleSave = () => {
    sessionStorage.setItem('apiLink', apiLink);
    setSavedApi(apiLink);
  };

  return (
    <section className="min-h-screen pt-16 pb-6 bg-neutral-950 px-6 sm:px-10 text-gray-200 relative">
      {/* radial background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-800/20 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Instruction Card */}
        <div className="rounded-2xl bg-neutral-900/80 backdrop-blur border border-neutral-800 shadow-xl">
          <div className="px-6 sm:px-10 py-8 border-b border-neutral-800 text-center">
            <h1 className="text-3xl font-bold text-blue-400">How to Connect the API</h1>
          </div>

          <ol className="list-decimal px-6 sm:px-14 py-10 space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
            <li>
              Create an account at&nbsp;
              <a
                href="https://ngrok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                ngrok.com
              </a> and copy your Auth Token.
              <div className="flex justify-center mt-4">
                <Image src="/Tutor1.png" alt="Step 1" width={480} height={280} className="rounded-lg" />
              </div>
            </li>
            <li>
              Open the&nbsp;
              <a
                href="https://colab.research.google.com/drive/1rKuB3zvjuqfuZ3PgZDAEyMLi7XRvK4tk?usp=sharing#scrollTo=RddER8iVL4jn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Colab server
              </a> and run all cells after pasting your token.
              <div className="flex justify-center mt-4">
                <Image src="/Tutor2.png" alt="Step 2" width={480} height={280} className="rounded-lg" />
              </div>
            </li>
            <li>
              Copy the API link that appears, paste it below, and click Save API.
              <div className="flex justify-center mt-4">
                <Image src="/Tutor3.png" alt="Step 3" width={480} height={280} className="rounded-lg" />
              </div>
            </li>
            <li>Paste the copied API link into the settings input field below on this page and click save API.</li>
            <li>Once saved, you’re ready to Find Your Scholarship.</li>
          </ol>
        </div>

        {/* Settings Card */}
        <div className="rounded-2xl bg-neutral-900/80 backdrop-blur border border-neutral-800 shadow-xl px-6 sm:px-10 py-10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">API Settings</h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex w-full sm:max-w-xl">
              <span className="inline-flex items-center px-4 bg-neutral-800 border border-neutral-700 rounded-l-lg">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414M10.172 13.828a4 4 0 010-5.656l1.414-1.414a4 4 0 015.656 5.656l-1.414 1.414"
                  />
                </svg>
              </span>
              <input
                type="url"
                value={apiLink}
                onChange={(e) => setApiLink(e.target.value)}
                placeholder="https://example.ngrok.io"
                className="flex-1 px-4 py-2 bg-neutral-800 border border-l-0 border-neutral-700 text-sm text-white rounded-r-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Save API
            </button>
          </div>

          {savedApi && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">Saved API Link:</p>
              <a
                href={savedApi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline break-words"
              >
                {savedApi}
              </a>
              <p className="text-xs text-green-500 mt-1">Saved for this session</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
