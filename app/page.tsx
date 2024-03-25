import { FaGithubAlt, FaInstagram } from "react-icons/fa";
import { TbPhotoCircle } from "react-icons/tb";

export default function Home() {
  return (
    <main className="h-dvh w-full flex flex-col gap-4 items-center justify-center">
      <p>
        Hi, it&apos;s <span className="font-semibold">ECarry</span> here.
      </p>
      <div className="flex gap-3">
        <a href="https://github.com/ECarry" target="_blank">
          <FaGithubAlt size={22} />
        </a>
        <a href="https://www.instagram.com/ekkooooooooooo0o0" target="_blank">
          <FaInstagram size={22} />
        </a>
        <a href="https://p.ecarry.me" target="_blank">
          <TbPhotoCircle size={22} />
        </a>
      </div>
    </main>
  );
}
