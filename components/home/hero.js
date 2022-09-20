import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 윤정빈입니다.
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩!
        </h1>
        <p className="mb-8 leading-relaxed">
          타오르고 속잎나고, 그들은 보이는 보는 그러므로 뜨거운지라, 커다란
          듣는다. 광야에서 청춘을 맺어, 없으면, 원대하고, 인간에 보배를 속에
          그들의 운다. 노년에게서 그들의 인생을 보배를 인간에 사막이다. 오직
          날카로우나 무엇을 미인을 기쁘며, 끓는다. 작고 듣기만 없는 풀이
          더운지라 인생을 아니한 있는 운다. 풀이 역사를 천하를 어디 것이 뼈
          아름다우냐? 찬미를 그들은 끓는 대고, 보라. 것은 위하여서, 보내는
          심장은 있을 얼음에 그들의 있는가? 용기가 길지 스며들어 크고 곳이
          아름다우냐? 작고 예가 쓸쓸한 구하지 공자는 그들에게 방황하였으며,
          인간이 피다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
