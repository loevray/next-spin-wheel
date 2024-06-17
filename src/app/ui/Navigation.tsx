import Link from "next/link";

const links = {
  "/": "메인",
  "spin-wheel": "룰렛",
  "youtube-comment-raffle": "유튜브 댓글 추첨",
};
const linksArray = Object.entries(links);

const Navigation = () => {
  return (
    <nav className="sticky top-0 bg-teal-600 h-screen w-20">
      <ul>
        {linksArray.map(([link, name]) => (
          <li key={link}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
