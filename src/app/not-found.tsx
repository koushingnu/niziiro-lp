export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
        <p className="text-lg mb-8">ページが見つかりませんでした。</p>
        <a href="/" className="btn-primary">
          トップページへ戻る
        </a>
      </div>
    </div>
  );
}
