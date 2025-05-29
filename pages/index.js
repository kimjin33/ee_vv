
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-bold">ee_vv</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">신발</a>
          <a href="#" className="hover:underline">의류</a>
          <a href="#" className="hover:underline">가방</a>
          <a href="#" className="hover:underline">시계</a>
        </nav>
      </header>

      <section className="p-4">
        <h2 className="text-lg font-semibold mb-4">🔥 인기 상품</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((item) => (
            <div key={item} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={`https://via.placeholder.com/300x400?text=상품+${item}`} alt="상품 이미지" className="w-full" />
              <div className="p-2">
                <p className="font-medium">레플리카 상품 {item}</p>
                <p className="text-sm text-gray-500">₩99,000</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="p-4 text-center text-sm text-gray-400">
        © 2025 ee_vv. All rights reserved.
      </footer>
    </main>
  );
}
