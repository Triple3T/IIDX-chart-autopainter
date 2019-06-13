# IIDX Chart Autopainter
BEMANI 리듬게임 [비트매니아 IIDX](https://p.eagate.573.jp/game/2dx/26/)의 [서열표](http://iidx.insane.pe.kr/)를 자동으로 색칠해주는 스크립트입니다.

## Before start
- [eAM 사이트](https://p.eagate.573.jp/)에 로그인되어 있지 않다면 사용할 수 없습니다.
- 베이직 코스에 가입되어 있지 않다면 사용할 수 없습니다.
- [서열표 사이트](http://iidx.insane.pe.kr)에 로그인되어 있지 않다면 사용할 수 없습니다.
- 갱신을 원하는 레벨에 플레이 기록이 없다면 사용할 수 없습니다.
- 스크립트 실행 전 카드 연동을 다시 한 번 확인해 보시기 바랍니다.
- 갱신을 원하는 서열표가 SP인지 DP인지 다시 한 번 확인해 보시기 바랍니다.
- 스크립트 실행 시 해당 레벨 서열표의 모든 내용을 덮어쓰며 데이터가 없다면 NO PLAY로 인식합니다.
    - 일부 바뀐 램프만이 아닌 전체 서열표에 대해 POST를 전송하므로 상황에 따라 시간이 매우 오래 걸릴 수 있습니다.
- 제작자는 스크립트의 정상 작동을 보증하지 않으나, 오류 제보를 환영합니다.
- 이 스크립트를 사용하여 얻는 모든 불이익에 대해 제작자는 책임을 지지 않습니다.
- 스크립트를 붙여넣을 때 맨 앞의 `javascript:`는 제거되므로 이 부분은 수동으로 입력해야 합니다.
    - PC 환경이라면 F12 개발자 도구에 붙여넣어 바로 실행이 가능합니다. 단, 이 경우 맨 앞의 `javascript:` 부분은 제거하십시오.
- 이 스크립트는 Windows의 Chrome을 제외한 브라우저에서의 호환성을 보장하지 않으며 브라우저에 따라 오작동이 발생할 수 있습니다.
    - IE에서의 정상 작동을 보증하지 않습니다.
    - Windows의 Firefox에서 작동하지 않음을 확인했습니다. (개발자 도구에서의 작동은 확인)
    - iOS의 Safari에서 작동하지 않음을 확인했습니다.
- 아예 서열표 데이터를 제거하고 싶다면 [`test/`](/test) 경로의 `reset.js`를 원하는 서열표에 대신 적용하시기 바랍니다.
    - SP, DP 구분없이 동작하며 아래와 같이 사용하시면 됩니다.
    1. `reset.js`의 내용물을 복사하고, 원하는 서열표 페이지로 이동하세요.
    1. 주소창 내용물을 모두 지우고 `javascript:`를 입력한 다음 그 뒤에 붙여넣고 실행합니다.
    1. 색칠이 완료되면 자동으로 새로고침되고 비어 있는 서열표가 나타납니다.

 
## How to
1. [`script/`](/script) 경로에서 원하는 스크립트를 찾습니다.
    - 원하는 플레이 스타일과 갱신 데이터를 포함한 폴더에 들어가면 스크립트 목록이 나옵니다. 예를 들어 싱글 플레이에서 램프만 갱신하고 싶다면 SP_Lamp 폴더입니다.
    - 파일명은 `2dx[모드][레벨](게이지).js` 형식입니다.
    - (게이지)의 경우 N은 노멀 게이지, h는 하드 게이지를 뜻하며, 11레벨 이상 서열표에서만 구분됩니다.
    - 같은 모드, 같은 레벨일 때 서로 다른 게이지가 표시된 두 서열표는 동기화되므로 아무거나 쓰셔도 됩니다.
1. 내용물 전체를 복사합니다. 파일은 한 줄로 되어 있습니다. raw 버튼을 눌러 raw file을 확인할 수 있습니다.
1. eAM 공식 홈페이지에 접속합니다. [바로가기](https://p.eagate.573.jp)
1. 주소창 내용물을 모두 지우고 `javascript:`를 입력한 다음 그 뒤에 붙여넣고 실행합니다.
1. 모두 완료됐으면 Copy and go to insane 버튼을 누릅니다. 버튼을 누르면 자동으로 새 스크립트가 복사되고 해당 서열표로 이동합니다.
1. 다시 주소창 내용물을 모두 지우고 `javascript:`를 입력한 다음 그 뒤에 붙여넣고 실행합니다.
1. 색칠이 완료되면 자동으로 새로고침됩니다. 색칠에 실패한 항목이 있다면 새로고침 전에 표시되며, 이 항목은 새로고침 후 수동으로 입력해야 합니다.
    - 색칠에 실패한 항목은 NO PLAY로 칠해집니다.
    - 색칠에 실패한 항목 중 서열표에 없는 경우도 있으며 이 경우 서열표 관리자분께 문의해 보시기 바랍니다.
    - 실패 목록이 너무 긴 경우 처음부터 다시 시도해 보시기 바랍니다.

## Log
- 2019년 06월 14일
    - 라이선스 추가
    - README 수정
- 2018년 11월 21일
    - 같은 곡, 같은 레벨, 다른 보면이 포함되어 있을 때 제대로 갱신되지 않던 문제를 해결했습니다.
    - DP 스크립트를 추가했습니다. 흔쾌히 기록 제공해 주신 분들 모두 감사드립니다.
- 2018년 11월 26일
    - 서열표 리셋 스크립트를 추가했습니다.
- 2019년 01월 20일
    - 색칠에 실패한 곡이 NO PLAY임에도 불구하고 수동 입력 알림에 포함되던 현상을 수정했습니다.
    - script 경로에 모두 모여있던 스크립트를 유형별로 다른 디렉토리로 분류했습니다.
- 2019년 03월 03일
    - 버튼의 사이트 지칭이 URL로 바뀌었습니다. (insane → iidx.insane.pe.kr)
