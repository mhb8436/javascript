import React, { useState } from "react";
import "simpledotcss/simple.min.css"; // Simple.css 스타일 가져오기

function App() {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태
  const [title, setTitle] = useState(""); // 제목 입력 상태
  const [content, setContent] = useState(""); // 내용 입력 상태

  // 게시글 추가
  const handleAddPost = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요!");
      return;
    }

    const newPost = { id: Date.now(), title, content };
    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  // 게시글 삭제
  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <main className="container">
      <h1>간단한 게시판</h1>

      {/* 입력 폼 */}
      <section>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            placeholder="제목 입력"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            placeholder="내용 입력"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button onClick={handleAddPost}>추가</button>
        </form>
      </section>

      {/* 게시글 목록 */}
      <section>
        <h2>게시글 목록</h2>
        {posts.length === 0 ? (
          <p>게시글이 없습니다. 새 게시글을 추가해주세요.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post.id}>
                  <td>{index + 1}</td>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <button onClick={() => handleDeletePost(post.id)}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}

export default App;
