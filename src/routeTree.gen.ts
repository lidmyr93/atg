/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BetTypeImport } from './routes/$betType'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const BetTypeRoute = BetTypeImport.update({
  path: '/$betType',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/$betType.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/$betType': {
      id: '/$betType'
      path: '/$betType'
      fullPath: '/$betType'
      preLoaderRoute: typeof BetTypeImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/$betType': typeof BetTypeRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/$betType': typeof BetTypeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/$betType': typeof BetTypeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$betType'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$betType'
  id: '__root__' | '/' | '/$betType'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  BetTypeRoute: typeof BetTypeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  BetTypeRoute: BetTypeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$betType"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/$betType": {
      "filePath": "$betType.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
