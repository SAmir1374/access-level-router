import React, { LazyExoticComponent } from 'react';

export default interface ProviderType {
  navigateIfNoTokenURL: string;
  children: React.ReactNode;
  routers: RouterType[];
  hasToken: boolean;
  userRole?: string[];
  groupRoles?: string[];
}

export interface RouteType {
  titlePage: string;
  toolTipPage: string;
  component: React.ComponentType;
  pageUrl: string;
  isPublic: boolean;
  icon: string;
  roles: string[];
  groupRoles: string[];
  preLoadFun?: () => void;
}

export interface RouterType {
  layout?: string;
  routes: RouteType[];
}

export type LazyComponent<T extends React.ComponentType<unknown>> =
  LazyExoticComponent<T> & { preload?: () => Promise<unknown> };
