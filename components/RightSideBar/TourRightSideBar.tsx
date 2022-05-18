import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TourRightSideBar = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.getElementById("toc")?.addEventListener("click", (v: any) => {
      let li = v.path[1] as any;
      if (li.tagName === "LI") {
        li = v.path[1] as HTMLLIElement;
        const tmp = document.getElementsByClassName("side_nav_active")[0];
        if (tmp) {
          tmp.classList.remove("side_nav_active");
        }
        li.classList.add("side_nav_active");
      }
    });
  }, []);

  return (
    <div
      ref={divRef}
      onMouseOver={() => {
        divRef.current && divRef.current.focus();
      }}
      id="site-toc--side"
      className="fixed hidden site-toc rightSide:block"
      style={{
        top: "50px",
      }}
    >
      <header style={{ color: "#4A4A4A", fontSize: "18px" }}>Contents</header>
      <ul id="toc" className="section-nav font-noto max-h-full">
        <li className="toc-entry nav-item toc-h2 a-basic-dart-program">
          <Link className="" href="#a-basic-dart-program">
            Dart의 기본
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2 important-concepts">
          <Link className="" href="#important-concepts">
            중요한 컨셉
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2 keywords">
          <Link className="" href="#keywords">
            키워드
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2 variables">
          <Link className="" href="#variables">
            변수
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3 default-value">
              <Link className="" href="#default-value">
                초기 값
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3 late-variables">
              <Link className="" href="#late-variables">
                Late 변수
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#final-and-const">
                Final 과 const
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className=" active" href="#built-in-types">
            내장 타입
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#numbers">
                Numbers
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#strings">
                Strings
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#booleans">
                Booleans
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#lists">
                Lists
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#sets">
                Sets
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#maps">
                Maps
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className=" active" href="#runes-and-grapheme-clusters">
                Runes and grapheme clusters
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#symbols">
                Symbols
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="" href="#functions">
            함수
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#parameters">
                매개변수
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#the-main-function">
                main() 함수
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#functions-as-first-class-objects">
                일급객체로서의 함수
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#anonymous-functions">
                익명 함수
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#lexical-scope">
                렉시컬 스코프
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#lexical-closures">
                렉시컬 클로저
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#testing-functions-for-equality">
                동등성 테스트 함수
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#return-values">
                반환 값
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className=" active" href="#operators">
            연산자
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#arithmetic-operators">
                산술 연산자
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#equality-and-relational-operators">
                항등, 관계 연산자
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#type-test-operators">
                타입 테스트 연산자
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#assignment-operators">
                할당 연산자
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#logical-operators">
                논리 연산자
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#bitwise-and-shift-operators">
                비트와이즈, 쉬프트 연산자
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#conditional-expressions">
                Conditional expressions
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className=" active" href="#cascade-notation">
                Cascade notation
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#other-operators">
                다른 연산자들
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="" href="#control-flow-statements">
            흐름 제어문
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#if-and-else">
                If and else
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#for-loops">
                For문
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#while-and-do-while">
                While and do-while
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#break-and-continue">
                Break and continue
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#switch-and-case">
                Switch and case
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#assert">
                Assert
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="" href="#exceptions">
            예외 처리
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#throw">
                Throw
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#catch">
                Catch
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#finally">
                Finally
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link href="#classes">클래스</Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link href="#using-class-members">클래스 멤버 사용하기</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#using-constructors">생성자 사용하기</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#getting-an-objects-type">객체의 타입 얻기</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#instance-variables">인스턴스 변수</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#constructors">생성자</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#methods">함수</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#abstract-classes">추상 클래스</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#implicit-interfaces">암묵적 인터페이스</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#extending-a-class">클래스 확장</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#extension-methods">확장 메소드</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#enumerated-types">열거 타입</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#adding-features-to-a-class-mixins">
                클래스에 피쳐 더하기: mixins
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#class-variables-and-methods">
                클래스 변수와 메소드
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link href="#generics">제네릭</Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link href="#why-use-generics">제네릭을 왜 쓸까?</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#using-collection-literals">
                콜렉션 리터럴 사용하기
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link
                className=""
                href="#using-parameterized-types-with-constructors"
              >
                매개변수화 된 타입을 가지는 생성자 사용하기
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link
                className=""
                href="#generic-collections-and-the-types-they-contain"
              >
                제네릭 콜렉션과 그것들이 가지는 타입들
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#restricting-the-parameterized-type">
                매개변수화 된 타입 제한하기
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#using-generic-methods">제네릭 메소드 사용하기</Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link href="#libraries-and-visibility">라이브러리와 가시성</Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link href="#using-libraries">라이브러리 사용하기</Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link href="#implementing-libraries">라이브러리 구현하기</Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="" href="#asynchrony-support">
            비동기 지원
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#handling-futures">
                Futures 다루기
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#declaring-async-functions">
                비동기 함수 선언하기
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="" href="#handling-streams">
                스트림 다루기
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TourRightSideBar;
