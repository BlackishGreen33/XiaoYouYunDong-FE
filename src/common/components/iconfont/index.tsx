/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames =
  | 'wxbpinpaibao'
  | 'huo'
  | 'club'
  | 'fabu'
  | 'icon'
  | 'wodeqianbao'
  | 'wodedingdan'
  | 'tuiguang'
  | 'zhaopian'
  | 'tuiguanghuodong'
  | 'sousuo'
  | 'xiaoxi'
  | 'icon-cutting-edgewe'
  | 'pinpai'
  | 'renshu'
  | 'tiyuyundong'
  | 'wode'
  | 'renshu1'
  | 'shouye'
  | 'chuqin'
  | 'dengji'
  | 'wh-hdjm'
  | 'huodongjilu'
  | 'rili'
  | 'xuexijiaoliu'
  | 'zongrenshu'
  | 'index-active'
  | 'yaoqingruzhu'
  | 'shangdian'
  | 'huodongrili'
  | 'yaoqingruzhu1'
  | 's-report'
  | 'a-xinxitixing'
  | 'shangjiaruzhu'
  | 'a-bianzu283x'
  | 'xiaoyouquan'
  | 'julebu-mian'
  | 'guanggaohuodongbaogao';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
