import { Header } from "../components/Header";

export function HomePage() {
  return (
    <>
      <Header />
      <div>
        <h1> This is the homepage </h1>
        <p>This is some content for you to look at</p>
        <p>Maybe a button for you to click</p>
        <button>Push Me</button>
      </div>
    </>
  );
}
