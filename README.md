# 기말 벼락치기 장표

시기해부학, 안경조제가공이론, 기하물리광학 기말용 프린트 PDF를 바탕으로 만든 정적 장표형 학습 사이트입니다.

- 원본 PDF와 개인정보는 포함하지 않았습니다.
- 시기해부학 65개, 안경조제가공이론 79개, 기하물리광학 110개 문항을 주차별 장표로 재구성했습니다.
- 각 문항마다 쉬운 개념 설명, 암기법, 출제 포인트를 넣었습니다.
- 과목 메뉴에서 시기해부학, 안경조제가공이론, 기하물리광학을 각각 따로 볼 수 있습니다.
- 브라우저에서 `site/index.html`을 열거나 정적 서버로 `site/`를 배포하면 됩니다.

## 로컬 실행

```powershell
python -m http.server 5173 -d site
```

## Cloudflare Pages

```powershell
npx wrangler pages deploy site --project-name sigianatomy-final-cram
```
