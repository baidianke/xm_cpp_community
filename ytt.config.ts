import { defineConfig } from 'yapi-to-typescript';

export default defineConfig([
  {
    serverUrl: 'https://yapi.xiaomawang.com',
    typesOnly: true,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    outputFilePath: 'types/yttApi.d.ts',
    dataKey: 'data',
    projects: [
      {
        token: '2f869161f177a3e6840d3e5f60eb6c9ac2abd7e9fe93a3ebaf3295ba0c2ab263',
        categories: [
          {
            id: 3532,
          },
        ],
      },
    ],
  },
]);
