import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. 사용자 친화적인 프론트엔드 개발자 윤정빈입니다.
          {/* <br className="hidden lg:inline-block" /> */}
        </h1>
        <p className="mb-8 leading-relaxed">
          안녕하세요! 프론트엔드 개발자 윤정빈입니다. 대학생활에 다양한 경험과
          프로젝트를 진행하였고, 이를 통해 웹 개발 업무 프로세스에 전반적인
          이해력을 습득하였습니다. 개발하면서 제가 느낀 좋은 웹, 앱 서비스는
          사용자의 입장에서 쓰기편한 서비스라 생각하고, 늘 사용자의 관점을
          고안하며 개발하고 있습니다. 현재는 거창한 업무성과보다 사용자의 작은
          문제해결에 끝까지 몰입할 수 있는 신입 개발자입니다.
          <br className="hidden lg:inline-block" />
          이런 저의 성장가능성을 믿고 이끌어줄 회사를 찾고 있습니다.
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
