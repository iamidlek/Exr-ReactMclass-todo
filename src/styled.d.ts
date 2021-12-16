// import original module declarations
import "styled-components";

// and extend them! 테마 설정을 위한 확장
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
