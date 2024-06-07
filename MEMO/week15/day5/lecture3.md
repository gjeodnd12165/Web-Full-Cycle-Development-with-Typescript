### 스니펫 만들기 [참고](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
스니펫은 리액트의 rfce와 같이 미리 만들어진 코드 덩어리를 제공하는 기능이다.  

VScode에서는 유저가 커스텀 스니펫을 만들 수 있는 기능도 제공한다.  
`F1` 혹은 `Ctrl+Shift+P`로 커맨드 창을 열고, snippet이라고 검색하면 `Snippets: Configure User Snippets`를 찾을 수 있고, 여기서 커스텀 스니펫 생성을 시작할 수 있다.  

스니펫의 스코프(프로젝트 / 글로벌), 언어, 제목 등을 정할 수 있으며, 모두 설정을 완료하면 `[제목].code-snippets` 라는 파일이 생성된다.
확장자는 없지만 json파일 형식으로 이루어져 있으며, vscode에서 작성할 시 필요한 키 등도 미리 intellisense로 알려준다.  
#### 예시 및 설명
```json
{
  "Make a component": {
    "scope": "",
    "prefix": "__component",
    "body": [
      "import styled from \"styled-components\"",
      "",
      "function ${TM_FILENAME_BASE/(^.)/${1:/upcase}/}() {",
      "\treturn (",
      "\t\t<${TM_FILENAME_BASE/(^.)/${1:/upcase}/}Style>",
      "\t\t\t${TM_FILENAME_BASE/(^.)/${1:/upcase}/}$0",
      "\t\t</${TM_FILENAME_BASE/(^.)/${1:/upcase}/}Style>",
      "\t)",
      "}",
      "",
      "const ${TM_FILENAME_BASE/(^.)/${1:/upcase}/}Style = styled.div`",
      "\t",
      "`;",
      "",
      "export default ${TM_FILENAME_BASE/(^.)/${1:/upcase}/}"
    ],
    "description": "Make a react component with styled-component inlcuded"
  },
}
```
- `"Make a component"`: 스니펫의 제목이다. 스니펫이 제안될 때 가장 오른쪽에 표시된다.  
- `"scope"`: 스니펫이 제안될 언어를 특정한다. 아무것도 적지 않으면 모든 언어에서 제안된다.  
- `"prefix"`: 스니펫을 제안 받기 위해 무엇을 타이핑해야 하는지 정한다.  
- `"body"`: 스니펫의 본문이다. `${}`로 감싸진 부분은 placeholder로 쓰이거나 미리 설정된 상수가 삽입되는 부분으로, 스니펫을 programmatic하게 만들 수 있게 한다.  
    - `${TM_FILENAME_BASE/(^.)/${1:/upcase}/}`: `TM_FILENAME_BASE`만 사용할 경우 파일의 확장자를 제외한 이름을 가져온다. 뒤의 정규식으로 이름의 가장 첫번쨰 글자를 선택해서 대문자로 만든다.  
    정규식이 없을 경우 무조건 모두 소문자로 하여 가져오기 떄문에 정규식이 필요하다.
    - `$0`: 스니펫이 생성된 후 커서가 올 자리.
- `"description"`: 스니펫의 설명이다. 문서화를 위해 쓰일지는 모르겠지만, 제안 받을 때에는 표시되지 않는 것 같다.  

이 외에도 참고의 vscode 공식 docs에서 많을 것들을 알려주고 있으니 그것을 보는 것이 나을 것 같다.  

#### Extension
스니펫을 만들 때 같은 구조의 작업을 반복하는 것은 물론, body를 일일이 생성하는 것도 귀찮은 일이다.  
때문에 스니펫을 쉽게 만들기 위한 extension들이 많이 있으며, 나는 그냥 다운로드 수가 가장 많은 `Snippet Generator`를 선택했다.  

다른 extension도 비슷할 거라고 생각하지만, 제목, scope, prefix, body, description을 자동으로 만들어주고 이를 클립보드에 저장하는 방식으로 동작한다.  