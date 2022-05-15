import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Catch = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="catch"
        className="font-noto text-primaryTitleTextColor"
      >
        Catch
      </h2>
      <p>
        예외를 캐칭, 캡쳐링 하는 것은 예외가 더 진행되는 것을 막습니다.(그렇지
        않으면 예외를 다시 발생 시킵니다.). 예외를 캐칭하는 것은 그 예외를 처리
        할 수 있는 기회를 줍니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">try</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}breedMoreLlamas</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">on</span>
        <span className="pln"> </span>
        <span className="typ">OutOfLlamasException</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}buyMoreLlamas</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        둘 이상의 예외를 발생 시킬 수 있는 코드를 처리하고 싶다면, 여러개의
        catch 문을 사용하면 됩니다. 발생된 객체의 타입을 매칭하는 첫 번째 catch
        문이 예외를 처리합니다. 만약 catch 문이 타입을 특정하지 않았다면, 그
        catch 문은 어떤 타입의 예외든 처리할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">try</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}breedMoreLlamas</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">on</span>
        <span className="pln"> </span>
        <span className="typ">OutOfLlamasException</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">{"  "}&#47;&#47; A specific exception</span>
        <div />
        <span className="pln">{"  "}buyMoreLlamas</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">on</span>
        <span className="pln"> </span>
        <span className="typ">Exception</span>
        <span className="pln"> </span>
        <span className="kwd">catch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">e</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; Anything else that is an exception
        </span>
        <div />
        <span className="pln">{"  "}print</span>
        <span className="pun">(</span>
        <span className="str">&#39;Unknown exception: $e&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">catch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">e</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; No specified type, handles all
        </span>
        <div />
        <span className="pln">{"  "}print</span>
        <span className="pun">(</span>
        <span className="str">&#39;Something really unknown: $e&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        앞의 코드가 보여주듯이, <Ccode text="on" />
        이나 <Ccode text="catch" />을 사용하면 됩니다. 예외의 타입을 명시할
        필요가 있다면, <Ccode text="on" /> 을 사용하세요. 예외 핸들러가 예외
        객체(위에서는 e를 말한다)를 필요로한다면, <Ccode text="catch" />를
        사용하세요.
      </p>
      <p>
        <Ccode text="catch()" />는 두개의 파라미터를 받을 수 있습니다. 첫 번째는
        발생될 예외이고, 두 번째는{" "}
        <CAnchor
          text="StackTrace"
          href="https://api.dart.dev/stable/dart-core/StackTrace-className=.html"
        />{" "}
        입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">try</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="com">{"  "}&#47;&#47; ···</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
          <span className="pln"> </span>
          <span className="kwd">on</span>
          <span className="pln"> </span>
          <span className="typ">Exception</span>
          <span className="pln"> </span>
          <span className="kwd">catch</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="pun">(</span>
            <span className="pln">e</span>
            <span className="pun">)</span>
          </span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"  "}print</span>
          <span className="pun">(</span>
          <span className="str">&#39;Exception details:\n $e&#39;</span>
          <span className="pun">);</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
          <span className="pln"> </span>
          <span className="kwd">catch</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="pun">(</span>
            <span className="pln">e</span>
            <span className="pun">,</span>
            <span className="pln"> s</span>
            <span className="pun">)</span>
          </span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"  "}print</span>
          <span className="pun">(</span>
          <span className="str">&#39;Exception details:\n $e&#39;</span>
          <span className="pun">);</span>
          <div />
          <span className="pln">{"  "}print</span>
          <span className="pun">(</span>
          <span className="str">&#39;Stack trace:\n $s&#39;</span>
          <span className="pun">);</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
      </pre>
      <p>
        예외가 계속 진행되는 것을 허락하면서, 부분적으로 처리하고 싶다면,{" "}
        <Ccode text="rethrow" /> 키워드를 사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="typ">void</span>
          <span className="pln"> misbehave</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="kwd">{"  "}try</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="typ">{"    "}dynamic</span>
          <span className="pln"> foo </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="kwd">true</span>
          <span className="pun">;</span>
          <div />
          <span className="pln">{"    "}print</span>
          <span className="pun">(</span>
          <span className="pln">foo</span>
          <span className="pun">++);</span>
          <span className="pln"> </span>
          <span className="com">&#47;&#47; Runtime error</span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <span className="pln"> </span>
          <span className="kwd">catch</span>
          <span className="pln"> </span>
          <span className="pun">(</span>
          <span className="pln">e</span>
          <span className="pun">)</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"    "}print</span>
          <span className="pun">(</span>
          <span className="str">
            &#39;misbehave() partially handled
            &#36;&#123;e.runtimeType&#125;.&#39;
          </span>
          <span className="pun">);</span>
          <div />
          <span className="pln"></span>
          <span className="highlight">
            <span className="kwd">{"    "}rethrow</span>
            <span className="pun">;</span>
          </span>
          <span className="pln"> </span>
          <span className="com">
            &#47;&#47; Allow callers to see the exception.
          </span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
          <div> </div>
          <span className="pln"></span>
          <span className="typ">void</span>
          <span className="pln"> main</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="kwd">{"  "}try</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"    "}misbehave</span>
          <span className="pun">();</span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <span className="pln"> </span>
          <span className="kwd">catch</span>
          <span className="pln"> </span>
          <span className="pun">(</span>
          <span className="pln">e</span>
          <span className="pun">)</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"    "}print</span>
          <span className="pun">(</span>
          <span className="str">
            &#39;main() finished handling $&#123;e.runtimeType&#125;.&#39;
          </span>
          <span className="pun">);</span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
      </pre>
    </>
  );
};

export default Catch;
