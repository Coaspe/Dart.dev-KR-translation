import Link from "next/link";

const KeywordsTable = () => {
  return (
    <div className="table-wrapper w-full">
      <table className="table table-striped nowrap w-full">
        <tbody className="table-body">
          <tr>
            <td>
              <Link href="#abstract-class">abstract</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#if-and-else">else</Link>
            </td>
            <td>
              <Link href="#using-libraries">import</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#importing-only-part-of-a-library">show</Link>&nbsp;
              <sup title="contextual keyword">1</sup>
            </td>
          </tr>
          <tr className="">
            <td>
              <Link href="#type-test-operators">as</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#enumerated-types">enum</Link>
            </td>
            <td>
              <Link href="#for-loops">in</Link>
            </td>
            <td>
              <Link href="#className=-variables-and-methods">static</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="#assert">assert</Link>
            </td>
            <td>
              <Link href="/guides/libraries/create-library-packages">
                export
              </Link>
              &nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#implicit-interfaces">interface</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#extending-a-className=">super</Link>
            </td>
          </tr>
          <tr className="">
            <td>
              <Link href="#asynchrony-support">async</Link>&nbsp;
              <sup title="contextual keyword">1</sup>
            </td>
            <td>
              <Link href="#extending-a-className=">extends</Link>
            </td>
            <td>
              <Link href="#type-test-operators">is</Link>
            </td>
            <td>
              <Link href="#switch-and-case">switch</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="#asynchrony-support">await</Link>&nbsp;
              <sup title="limited reserved word">3</sup>
            </td>
            <td>
              <Link href="#extension-methods">extension</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#late-variables">late</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#generators">sync</Link>&nbsp;
              <sup title="contextual keyword">1</sup>
            </td>
          </tr>
          <tr className="">
            <td>
              <Link href="#break-and-continue">break</Link>
            </td>
            <td>
              <Link
                href="https://spec.dart.dev/DartLangSpecDraft.pdf#External%20Functions"
                className="external"
              >
                external
              </Link>
              &nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#libraries-and-visibility">library</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#constructors">this</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="#switch-and-case">case</Link>
            </td>
            <td>
              <Link href="#factory-constructors">factory</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#adding-features-to-a-className=-mixins">mixin</Link>
              &nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#throw">throw</Link>
            </td>
          </tr>
          <tr className="">
            <td>
              <Link href="#catch">catch</Link>
            </td>
            <td>
              <Link href="#booleans">false</Link>
            </td>
            <td>
              <Link href="#using-constructors">new</Link>
            </td>
            <td>
              <Link href="#booleans">true</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="#instance-variables">className=</Link>
            </td>
            <td>
              <Link href="#final-and-const">final</Link>
            </td>
            <td>
              <Link href="#default-value">null</Link>
            </td>
            <td>
              <Link href="#catch">try</Link>
            </td>
          </tr>
          <tr className="">
            <td>
              <Link href="#final-and-const">const</Link>
            </td>
            <td>
              <Link href="#finally">finally</Link>
            </td>
            <td>
              <Link href="#catch">on</Link>&nbsp;
              <sup title="contextual keyword">1</sup>
            </td>
            <td>
              <Link href="#typedefs">typedef</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="#break-and-continue">continue</Link>
            </td>
            <td>
              <Link href="#for-loops">for</Link>
            </td>
            <td>
              <Link href="#_operators">operator</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#variables">var</Link>
            </td>
          </tr>
          <tr className="">
            <td>
              <Link href="/guides/language/sound-problems#the-covariant-keyword">
                covariant
              </Link>
              &nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#functions">Function</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="/guides/libraries/create-library-packages#organizing-a-library-package">
                part
              </Link>
              &nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#built-in-types">void</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="#switch-and-case">default</Link>
            </td>
            <td>
              <Link href="#getters-and-setters">get</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#named-parameters">required</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#while-and-do-while">while</Link>
            </td>
          </tr>
          <tr className="">
            <td>
              <Link href="#lazily-loading-a-library">deferred</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#importing-only-part-of-a-library">hide</Link>&nbsp;
              <sup title="contextual keyword">1</sup>
            </td>
            <td>
              <Link href="#catch">rethrow</Link>
            </td>
            <td>
              <Link href="#adding-features-to-a-className=-mixins">with</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="#while-and-do-while">do</Link>
            </td>
            <td>
              <Link href="#if-and-else">if</Link>
            </td>
            <td>
              <Link href="#functions">return</Link>
            </td>
            <td>
              <Link href="#generators">yield</Link>&nbsp;
              <sup title="limited reserved word">3</sup>
            </td>
          </tr>
          <tr className="">
            <td>
              <Link href="#important-concepts">dynamic</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#implicit-interfaces">implements</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>
              <Link href="#getters-and-setters">set</Link>&nbsp;
              <sup title="built-in-identifier">2</sup>
            </td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KeywordsTable;
