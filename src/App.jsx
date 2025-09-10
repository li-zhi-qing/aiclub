function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", margin: "10px 0", color: "#333" }}>AI Club 社团博客</h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>记录我们的学习 · 活动 · 成长</p>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto" }}>
        <article style={{ background: "#fff", padding: "20px", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h2 style={{ margin: "0 0 10px", color: "#222" }}>📢 社团成立啦！</h2>
          <p style={{ color: "#444", lineHeight: "1.6" }}>
            欢迎大家来到 AI Club！这是我们的第一个博客页面。在这里，我们会分享社团活动、学习资料和大家的成果。
          </p>
        </article>

        <article style={{ background: "#fff", padding: "20px", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h2 style={{ margin: "0 0 10px", color: "#222" }}>🤖 社团公告</h2>
          <p style={{ color: "#444", lineHeight: "1.6" }}>
            之后有时间的空闲周六我们将开始我们自己的建社小会！！！
          </p>
        </article>
      </main>

      <footer style={{ textAlign: "center", marginTop: "40px", color: "#888" }}>
        <p>© 2025 AI Club 社团 | Rymascot</p>
      </footer>
    </div>
  );
}

export default App;
