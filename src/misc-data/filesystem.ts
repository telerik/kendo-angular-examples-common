import { File } from './file.interface';

export function getFiles(): File[] {
    let counter = 0;
    const nextId = () => counter++;
    return [
      {type: 'file', id: nextId(), name: 'LICENSE.md', size: 636, time: new Date('2019-12-18T15:06:11')},
      {type: 'file', id: nextId(), name: 'README.md', size: 4460, time: new Date('2019-12-18T15:06:11')},
      {type: 'file', id: nextId(), name: 'SUPPORT.md', size: 3181, time: new Date('2019-12-18T15:06:11')},
      {type: 'directory', id: nextId(), name: 'examples', time: new Date('2019-12-18T15:06:11'), contents: [
        {type: 'file', id: nextId(), name: 'README.md', size: 1153, time: new Date('2019-12-18T15:06:11')},
        {type: 'file', id: nextId(), name: 'angular.json', size: 37604, time: new Date('2019-12-18T15:06:11')},
        {type: 'directory', id: nextId(), name: 'bin', time: new Date('2019-12-18T15:06:11'), contents: [
          {type: 'file', id: nextId(), name: 'build-all.js', size: 597, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'publish-gh-pages', size: 164, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'serve-project.js', size: 345, time: new Date('2019-12-18T15:06:11')}
        ]},
        {type: 'file', id: nextId(), name: 'package-lock.json', size: 448632, time: new Date('2019-12-18T15:06:11')},
        {type: 'file', id: nextId(), name: 'package.json', size: 3050, time: new Date('2019-12-18T15:06:11')},
        {type: 'directory', id: nextId(), name: 'projects', time: new Date('2019-12-18T15:06:11'), contents: [
          {type: 'directory', id: nextId(), name: 'chart-websockets', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 1294, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 388, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1032, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'server', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'index.js', size: 1419, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'package-lock.json', size: 13649, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'package.json', size: 304, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.css', size: 0, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.html', size: 875, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 1008, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 1383, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 595, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'websocket.service.ts', size: 575, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 302, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 80, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'grid-firebase', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 1309, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 385, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'firebase.json', size: 234, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1029, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.html', size: 1221, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 1035, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 2274, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 1169, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'edit.service.ts', size: 945, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'products.ts', size: 2346, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 299, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 80, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'grid-graphql', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 891, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 385, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1028, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'server', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'index.js', size: 417, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'package-lock.json', size: 15151, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'package.json', size: 400, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'schema', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'schema.js', size: 7470, time: new Date('2019-12-18T15:06:11')}
              ]}
            ]},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.css', size: 0, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.html', size: 1416, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 1013, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 2743, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 852, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'edit.service.ts', size: 1435, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'graphql.module.ts', size: 658, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'model.ts', size: 177, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'queries.js', size: 958, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 298, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 80, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'grid-jsdo', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 854, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 388, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1025, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 5190, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 1006, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'data', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'customer.config.ts', size: 470, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'customer.model.ts', size: 611, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'data-service.event.ts', size: 57, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'data-service.interface.ts', size: 728, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'data.service.ts', size: 6294, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'model-data-result.ts', size: 170, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'progress-service-config.ts', size: 559, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'progress-service-factory.ts', size: 907, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'progress-session.service.ts', size: 2172, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'progress.service.ts', size: 4978, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'service-config.ts', size: 1396, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 295, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 80, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'grid-signalr', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 1859, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 388, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1028, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'server', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'Controllers', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'TodoController.cs', size: 1669, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'Hubs', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'TodoHub.cs', size: 162, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'Program.cs', size: 654, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'Properties', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'launchSettings.json', size: 775, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'Startup.cs', size: 1836, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'appsettings.Development.json', size: 137, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'appsettings.json', size: 97, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'server.csproj', size: 295, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'server.sln', size: 1110, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.css', size: 29, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.html', size: 977, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 989, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 1522, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 624, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'models', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'todo.model.ts', size: 91, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'services', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'signalr.service.ts', size: 944, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 298, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 80, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'integration-i18n', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 890, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 388, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1032, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'projects', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'integration-i18n', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'directory', id: nextId(), name: 'locale', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'messages.xlf', size: 49659, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]}
            ]},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.html', size: 111, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.scss', size: 0, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 1000, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 222, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 515, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 302, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'locale', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'messages.es.xlf', size: 44842, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'messages.xlf', size: 42194, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 80, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'integration-jquery', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 866, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 388, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1034, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.css', size: 0, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.html', size: 624, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 1000, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 340, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 2203, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'other.component.ts', size: 294, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test-date-picker.component.ts', size: 1063, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test-diagram.component.ts', size: 1694, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test-editor.component.ts', size: 1154, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test-gantt.component.ts', size: 4603, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test-grid.component.ts', size: 1542, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test-scheduler.component.ts', size: 4033, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test-slider.component.ts', size: 689, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test-splitter.component.ts', size: 2578, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 318, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 80, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'integration-pwa', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 3373, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 388, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1031, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: '_app-common.scss', size: 1617, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app-routing.module.ts', size: 310, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.html', size: 32, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.scss', size: 0, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 986, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 163, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 3141, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.routes.ts', size: 717, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.style.css', size: 306, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'charts', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'active-issues.component.ts', size: 10882, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issue-types.component.ts', size: 2092, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'statistics.component.ts', size: 1532, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'types-distribution.component.ts', size: 4819, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'common', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'index.ts', size: 31, time: new Date('2019-12-18T15:06:11')},
                  {type: 'directory', id: nextId(), name: 'utils', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'Config.ts', size: 593, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'index.ts', size: 59, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'router-module.ts', size: 48, time: new Date('2019-12-18T15:06:11')}
                  ]}
                ]},
                {type: 'directory', id: nextId(), name: 'dashboard', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'dashboard.component.ts', size: 3071, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'dashboard.template.html', size: 1531, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'index.ts', size: 40, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'file', id: nextId(), name: 'dashboard.style.scss', size: 5235, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'issues', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'index.ts', size: 37, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues.component.ts', size: 2245, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues.template.html', size: 5149, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'label.directive.ts', size: 1136, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'main-menu', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'main-menu.component.html', size: 1765, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'main-menu.component.scss', size: 0, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'main-menu.component.spec.ts', size: 643, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'main-menu.component.ts', size: 1790, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'markdown', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'markdown.component.ts', size: 492, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'profile', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'index.ts', size: 38, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'profile.component.ts', size: 1566, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'profile.template.html', size: 6205, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'shared', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: '_custom.scss', size: 2402, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'github.service.ts', size: 1472, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'index.ts', size: 33, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues-processor.service.ts', size: 5617, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues.model.ts', size: 1313, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'shared.module.ts', size: 300, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'spinner.component.ts', size: 426, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'signin', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'index.ts', size: 39, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'signin.component.ts', size: 645, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'signin.template.html', size: 530, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'directory', id: nextId(), name: 'app_icon', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'angularX144.png', size: 5078, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX192.png', size: 7010, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX36.png', size: 1600, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX48.png', size: 2070, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX512.png', size: 19822, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX72.png', size: 2715, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX96.png', size: 3571, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'help_images', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'add_to_home.png', size: 51829, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'cached_local.png', size: 55215, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'cached_remote.png', size: 56083, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'confirm.png', size: 25508, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'dashboard.png', size: 101068, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'offline.png', size: 36927, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'sw.png', size: 36331, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'i18n', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'en.json', size: 417, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'file', id: nextId(), name: 'issue-closed.png', size: 1222, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issue-open.png', size: 1159, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issueclosed.png', size: 1222, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issueopen.png', size: 1159, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'login-left-bg.png', size: 35043, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'login-right-bg.png', size: 40236, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'noConnection.png', size: 11232, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 893, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'manifest.json', size: 1484, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'ngsw-config.json', size: 551, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.scss', size: 1049, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'integration-pwa-material', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 3234, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 388, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1031, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app-routing.module.ts', size: 310, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.html', size: 32, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 986, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 163, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 3227, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.routes.ts', size: 717, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'charts', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'active-issues.component.ts', size: 11951, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issue-types.component.ts', size: 2161, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'statistics.component.ts', size: 1300, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'types-distribution.component.ts', size: 5299, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'common', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'index.ts', size: 31, time: new Date('2019-12-18T15:06:11')},
                  {type: 'directory', id: nextId(), name: 'utils', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'Config.ts', size: 593, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'index.ts', size: 59, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'router-module.ts', size: 48, time: new Date('2019-12-18T15:06:11')}
                  ]}
                ]},
                {type: 'directory', id: nextId(), name: 'dashboard', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'dashboard.component.ts', size: 3077, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'dashboard.template.html', size: 1555, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'index.ts', size: 39, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'issues', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'index.ts', size: 36, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues.component.ts', size: 2266, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues.template.html', size: 5078, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'label.directive.ts', size: 1136, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'main-menu', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'main-menu.component.html', size: 2038, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'main-menu.component.spec.ts', size: 643, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'main-menu.component.ts', size: 1739, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'markdown', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'markdown.component.ts', size: 492, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'profile', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'index.ts', size: 37, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'profile.component.ts', size: 1343, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'profile.template.html', size: 6959, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'scss', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: '_dashboard.scss', size: 1330, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: '_globals.scss', size: 1741, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: '_header.scss', size: 212, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: '_issues.scss', size: 881, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: '_login.scss', size: 579, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: '_nav.scss', size: 2203, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: '_profile.scss', size: 143, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: '_typography.scss', size: 373, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: '_variables.scss', size: 2631, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'bootstrap-custom.scss', size: 84, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'shared', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'github.service.ts', size: 1472, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'index.ts', size: 33, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues-processor.service.ts', size: 5617, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues.model.ts', size: 1313, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'shared.module.ts', size: 300, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'spinner.component.ts', size: 403, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'signin', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'index.ts', size: 37, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'signin.component.ts', size: 660, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'signin.template.html', size: 1017, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'directory', id: nextId(), name: 'app_icon', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'angularX144.png', size: 5078, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX192.png', size: 7010, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX36.png', size: 1600, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX48.png', size: 2070, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX512.png', size: 19822, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX72.png', size: 2715, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'angularX96.png', size: 3571, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'help_images', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'add_to_home.png', size: 51829, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'cached_local.png', size: 55215, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'cached_remote.png', size: 56083, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'confirm.png', size: 25508, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'dashboard.png', size: 101068, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'offline.png', size: 36927, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'sw.png', size: 36331, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'i18n', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'en.json', size: 417, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'file', id: nextId(), name: 'issue-closed.png', size: 1222, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issue-open.png', size: 1159, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issueclosed.png', size: 1222, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issueopen.png', size: 1159, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'login-left-bg.png', size: 35043, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'login-right-bg.png', size: 40236, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'noConnection.png', size: 11232, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 703, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'manifest.json', size: 1422, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'ngsw-config.json', size: 551, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.scss', size: 389, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'pdf-embedded-fonts', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 700, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 385, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1034, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 778, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 744, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'invoice-data.ts', size: 345, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'invoice-row.ts', size: 209, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'invoice.component.ts', size: 2540, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'DejaVuSans.ttf', size: 757076, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 314, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.scss', size: 1195, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
          ]}
        ]},
        {type: 'directory', id: nextId(), name: 'static', time: new Date('2019-12-18T15:06:11'), contents: [
          {type: 'file', id: nextId(), name: '404.html', size: 292, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'index.html', size: 883, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'styles.css', size: 57, time: new Date('2019-12-18T15:06:11')}
        ]},
        {type: 'file', id: nextId(), name: 'tsconfig.json', size: 467, time: new Date('2019-12-18T15:06:11')},
        {type: 'file', id: nextId(), name: 'tslint.json', size: 1954, time: new Date('2019-12-18T15:06:11')}
      ]},
      {type: 'directory', id: nextId(), name: 'examples-standalone', time: new Date('2019-12-18T15:06:11'), contents: [
        {type: 'directory', id: nextId(), name: 'angular-universal', time: new Date('2019-12-18T15:06:11'), contents: [
          {type: 'file', id: nextId(), name: 'README.md', size: 1699, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'aspnet_core_sample_application', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'directory', id: nextId(), name: 'ClientApp', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'README.md', size: 1040, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'angular.json', size: 4344, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'e2e', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'protractor.conf.js', size: 752, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'app.e2e-spec.ts', size: 277, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.po.ts', size: 206, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'file', id: nextId(), name: 'tsconfig.e2e.json', size: 213, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'package-lock.json', size: 424000, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'package.json', size: 2401, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'app.component.css', size: 172, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.component.html', size: 118, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.component.ts', size: 207, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.module.ts', size: 1297, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.server.module.ts', size: 413, time: new Date('2019-12-18T15:06:11')},
                  {type: 'directory', id: nextId(), name: 'counter', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'counter.component.html', size: 215, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'counter.component.spec.ts', size: 1133, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'counter.component.ts', size: 260, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'fetch-data', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'fetch-data.component.html', size: 842, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'fetch-data.component.ts', size: 819, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'home', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'home.component.html', size: 1480, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'home.component.ts', size: 155, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'nav-menu', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'nav-menu.component.css', size: 249, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'nav-menu.component.html', size: 1239, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'nav-menu.component.ts', size: 337, time: new Date('2019-12-18T15:06:11')}
                  ]}
                ]},
                {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
                ]},
                {type: 'file', id: nextId(), name: 'browserslist', size: 375, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'environment.ts', size: 631, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'file', id: nextId(), name: 'index.html', size: 326, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'karma.conf.js', size: 965, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'main.server.ts', size: 1137, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'main.ts', size: 553, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'polyfills.ts', size: 3162, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'styles.scss', size: 80, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 194, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'tsconfig.server.json', size: 241, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 282, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'tslint.json', size: 314, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'tsconfig.json', size: 384, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tslint.json', size: 2998, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'directory', id: nextId(), name: 'Controllers', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'SampleDataController.cs', size: 1508, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'directory', id: nextId(), name: 'Pages', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'Error.cshtml', size: 856, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'Error.cshtml.cs', size: 619, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: '_ViewImports.cshtml', size: 107, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'Program.cs', size: 609, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'Properties', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'launchSettings.json', size: 626, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'Startup.cs', size: 2699, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'appsettings.Development.json', size: 137, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'appsettings.json', size: 97, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'dotnet-angular.csproj', size: 2804, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'wwwroot', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 32038, time: new Date('2019-12-18T15:06:11')}
            ]}
          ]},
          {type: 'directory', id: nextId(), name: 'node_sample_application', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 2169, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'angular.json', size: 4539, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'package-lock.json', size: 346174, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'package.json', size: 2952, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'prerender.ts', size: 1507, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'server.ts', size: 1506, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'server.tsconfig.json', size: 399, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 1047, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 1003, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.server.module.ts', size: 718, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'home', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'home.component.ts', size: 1009, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'products.ts', size: 37654, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'lazy', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'lazy.module.ts', size: 1107, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 383, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'index.html', size: 302, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.server.ts', size: 57, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 459, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2480, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 80, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 229, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tsconfig.server.json', size: 469, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'static.paths.ts', size: 62, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.json', size: 363, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 2987, time: new Date('2019-12-18T15:06:11')}
          ]}
        ]},
        {type: 'directory', id: nextId(), name: 'aspnetcore-data', time: new Date('2019-12-18T15:06:11'), contents: [
          {type: 'directory', id: nextId(), name: 'ClientApp', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 1059, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'angular.json', size: 4561, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 383, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'e2e', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'protractor.conf.js', size: 785, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.e2e-spec.ts', size: 291, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.po.ts', size: 217, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'tsconfig.e2e.json', size: 225, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'package-lock.json', size: 413163, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'package.json', size: 2310, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.css', size: 178, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.html', size: 124, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 178, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 1561, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.server.module.ts', size: 424, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'counter', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'counter.component.html', size: 241, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'counter.component.spec.ts', size: 1169, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'counter.component.ts', size: 273, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'fetch-data', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'data.service.ts', size: 2884, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'fetch-data.component.html', size: 1544, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'fetch-data.component.ts', size: 2304, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'home', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'home.component.html', size: 1494, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'home.component.ts', size: 163, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'nav-menu', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'nav-menu.component.css', size: 267, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'nav-menu.component.html', size: 1472, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'nav-menu.component.ts', size: 355, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'file', id: nextId(), name: 'browserslist', size: 383, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 54, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 646, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'index.html', size: 354, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'karma.conf.js', size: 996, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 573, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2901, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 295, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 662, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 181, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tsconfig.server.json', size: 192, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 274, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tslint.json', size: 331, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.json', size: 432, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 2930, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'Controllers', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'BlogsController.cs', size: 1810, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'Models', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'Blog.cs', size: 373, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'BloggingContext.cs', size: 1626, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'Post.cs', size: 360, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'Pages', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'Error.cshtml', size: 882, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'Error.cshtml.cs', size: 847, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: '_ViewImports.cshtml', size: 112, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'file', id: nextId(), name: 'Program.cs', size: 616, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'Properties', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'launchSettings.json', size: 682, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'file', id: nextId(), name: 'README.md', size: 1991, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'Startup.cs', size: 2923, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'appsettings.Development.json', size: 146, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'appsettings.json', size: 111, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'aspnetcore-data.csproj', size: 3284, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'nuget.config', size: 502, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'wwwroot', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'favicon.ico', size: 32038, time: new Date('2019-12-18T15:06:11')}
          ]}
        ]},
        {type: 'directory', id: nextId(), name: 'aspnetcore-upload', time: new Date('2019-12-18T15:06:11'), contents: [
          {type: 'directory', id: nextId(), name: 'ClientApp', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'README.md', size: 1050, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'angular.json', size: 4498, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'browserslist', size: 383, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'e2e', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'protractor.conf.js', size: 785, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.e2e-spec.ts', size: 291, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.po.ts', size: 217, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'tsconfig.e2e.json', size: 225, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'package-lock.json', size: 406641, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'package.json', size: 1810, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.component.html', size: 91, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.component.ts', size: 178, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.module.ts', size: 968, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'app.server.module.ts', size: 424, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'home', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'home.component.html', size: 135, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'home.component.ts', size: 163, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              ]},
              {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 54, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'environment.ts', size: 646, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'index.html', size: 345, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'karma.conf.js', size: 996, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'main.ts', size: 573, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2901, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'styles.css', size: 295, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'test.ts', size: 662, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 181, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tsconfig.server.json', size: 192, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 274, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tslint.json', size: 331, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'tsconfig.json', size: 432, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tslint.json', size: 2930, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'Controllers', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'StreamingController.cs', size: 2461, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'directory', id: nextId(), name: 'Pages', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'Error.cshtml', size: 882, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'Error.cshtml.cs', size: 849, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: '_ViewImports.cshtml', size: 116, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'file', id: nextId(), name: 'Program.cs', size: 618, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'Properties', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'launchSettings.json', size: 684, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'file', id: nextId(), name: 'README.md', size: 919, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'Startup.cs', size: 2519, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'appsettings.Development.json', size: 146, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'appsettings.json', size: 111, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'aspnetcore-upload.csproj', size: 2844, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'wwwroot', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'directory', id: nextId(), name: 'Upload_Directory', time: new Date('2019-12-18T15:06:11'), contents: [
            ]},
            {type: 'file', id: nextId(), name: 'favicon.ico', size: 32038, time: new Date('2019-12-18T15:06:11')}
          ]}
        ]},
        {type: 'directory', id: nextId(), name: 'electron-dashboard', time: new Date('2019-12-18T15:06:11'), contents: [
          {type: 'file', id: nextId(), name: 'README.md', size: 4551, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: '_config.yml', size: 29, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'angular.json', size: 3867, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'e2e', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'app.e2e-spec.ts', size: 386, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'app.po.ts', size: 175, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.e2e.json', size: 193, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'file', id: nextId(), name: 'electron-builder.json', size: 315, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'hooks', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'README.md', size: 7709, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.config.ts.tpl', size: 509, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'set_profile.js', size: 581, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'app.config.ts', size: 509, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'appconfig.ts', size: 509, time: new Date('2019-12-18T15:06:11')}
              ]}
            ]}
          ]},
          {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1202, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'logo-angular.jpg', size: 3354, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'logo-electron.jpg', size: 8028, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'logo-kendo.png', size: 11430, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'main.ts', size: 2388, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'package.json', size: 4139, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'postcss.config.js', size: 20, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'protractor.conf.js', size: 960, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: '_app-common.scss', size: 1617, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app-routing.module.ts', size: 310, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.component.html', size: 23, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.component.scss', size: 0, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 986, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.component.ts', size: 156, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.config.ts', size: 507, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.module.ts', size: 2816, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.routes.ts', size: 717, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.style.css', size: 284, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'charts', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'active-issues.component.ts', size: 9854, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issue-types.component.ts', size: 2092, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'shared', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: '_custom.scss', size: 2402, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'github.service.ts', size: 1853, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'index.ts', size: 33, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues-processor.service.ts', size: 5639, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues.model.ts', size: 1313, time: new Date('2019-12-18T15:06:11')},
                  {type: 'directory', id: nextId(), name: 'shared', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: '_custom.scss', size: 2402, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'github.service.ts', size: 1853, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'index.ts', size: 33, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'issues-processor.service.ts', size: 5639, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'issues.model.ts', size: 1313, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'shared.module.ts', size: 301, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'file', id: nextId(), name: 'shared.module.ts', size: 301, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'file', id: nextId(), name: 'statistics.component.ts', size: 1249, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'types-distribution.component.ts', size: 4649, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'common', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'index.ts', size: 31, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'utils', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'Config.ts', size: 593, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'index.ts', size: 59, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'router-module.ts', size: 48, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'directory', id: nextId(), name: 'dashboard', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'dashboard.component.ts', size: 3014, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'dashboard.template.html', size: 1506, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'index.ts', size: 39, time: new Date('2019-12-18T15:06:11')},
                {type: 'directory', id: nextId(), name: 'shared', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: '_custom.scss', size: 2402, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'github.service.ts', size: 1853, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'index.ts', size: 33, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues-processor.service.ts', size: 5639, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issues.model.ts', size: 1313, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'shared.module.ts', size: 301, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'file', id: nextId(), name: 'dashboard.style.scss', size: 5154, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'directives', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'webview.directive.ts', size: 138, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'issues', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'index.ts', size: 36, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issues.component.ts', size: 2236, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issues.template.html', size: 5046, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'label.directive.ts', size: 1055, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'main-menu', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'main-menu.component.html', size: 1776, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'main-menu.component.scss', size: 0, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'main-menu.component.spec.ts', size: 643, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'main-menu.component.ts', size: 1786, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'markdown', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'markdown.component.ts', size: 411, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'profile', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'index.ts', size: 37, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'profile.component.ts', size: 1571, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'profile.template.html', size: 6096, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'providers', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'electron.service.ts', size: 737, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'shared', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: '_custom.scss', size: 2402, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'github.service.ts', size: 1853, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'index.ts', size: 33, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issues-processor.service.ts', size: 5639, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'issues.model.ts', size: 1313, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'shared.module.ts', size: 301, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'spinner.component.ts', size: 399, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'signin', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'index.ts', size: 37, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'signin.component.ts', size: 640, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'signin.template.html', size: 530, time: new Date('2019-12-18T15:06:11')}
              ]}
            ]},
            {type: 'file', id: nextId(), name: 'app.style.css', size: 284, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'background.jpg', size: 232337, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'i18n', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'en.json', size: 78, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'issue-closed.png', size: 1222, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'issue-open.png', size: 1159, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'issueclosed.png', size: 1222, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'issueopen.png', size: 1159, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'login-left-bg.png', size: 35043, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'login-right-bg.png', size: 40236, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'environment.dev.ts', size: 394, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'environment.local.ts', size: 75, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 72, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'favicon.256x256.png', size: 14430, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'favicon.icns', size: 85688, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'favicon.ico', size: 16224, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'favicon.png', size: 14430, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'index.html', size: 491, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'main.ts', size: 399, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'polyfills.ts', size: 1323, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'styles.scss', size: 333, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'test.ts', size: 761, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 259, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 416, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'typings.d.ts', size: 190, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'file', id: nextId(), name: 'tsconfig.json', size: 438, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'tslint.json', size: 2998, time: new Date('2019-12-18T15:06:11')}
        ]},
        {type: 'directory', id: nextId(), name: 'kendo-angular-finance-portfolio', time: new Date('2019-12-18T15:06:11'), contents: [
          {type: 'file', id: nextId(), name: 'README.md', size: 2408, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'angular.json', size: 2835, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'browserslist', size: 429, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'package-lock.json', size: 437540, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'package.json', size: 2359, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'app-routing.module.ts', size: 949, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.component.ts', size: 312, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'app.module.ts', size: 2775, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'components', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'directory', id: nextId(), name: 'badge', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'badge.component.html', size: 261, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'badge.component.scss', size: 412, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'badge.component.ts', size: 250, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'footer', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'footer.component.html', size: 360, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'footer.component.scss', size: 634, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'footer.component.ts', size: 355, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'header', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'header.component.html', size: 930, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'header.component.scss', size: 1198, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'header.component.ts', size: 668, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'heatmap', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'heatmap.component.html', size: 1345, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'heatmap.component.scss', size: 1159, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'heatmap.component.ts', size: 4051, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'navigation', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'navigation.component.html', size: 419, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'navigation.component.scss', size: 318, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'navigation.component.ts', size: 304, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'real-time-data', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'real-time-data.component.html', size: 3229, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'real-time-data.component.scss', size: 697, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'real-time-data.component.ts', size: 2841, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'stock-chart', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'stock-chart.component.html', size: 3603, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'stock-chart.component.scss', size: 559, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'stock-chart.component.ts', size: 4120, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'stock-details', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'stock-details.component.html', size: 4674, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'stock-details.component.scss', size: 230, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'stock-details.component.ts', size: 3497, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'stock-list', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'stock-list.component.html', size: 7409, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'stock-list.component.scss', size: 3106, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'stock-list.component.ts', size: 3548, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'stocks', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'stocks.component.html', size: 304, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'stocks.component.scss', size: 434, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'stocks.component.ts', size: 330, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'user-profile', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'user-profile.component.html', size: 3166, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'user-profile.component.scss', size: 1177, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'user-profile.component.ts', size: 1267, time: new Date('2019-12-18T15:06:11')}
                ]}
              ]},
              {type: 'directory', id: nextId(), name: 'data', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'stocks.ts', size: 41277, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'directives', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'dropdownlist-popup-selector.directive.ts',
                 size: 1188, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'models', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'index.ts', size: 98, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'interval.ts', size: 298, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'stock-interval-details.ts', size: 158, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'stock.ts', size: 272, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'pipes', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'helpers.ts', size: 1981, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'number-format.pipe.ts', size: 275, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'directory', id: nextId(), name: 'services', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'file', id: nextId(), name: 'stock-data.service.ts', size: 4988, time: new Date('2019-12-18T15:06:11')}
              ]}
            ]},
            {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'area.png', size: 410, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'candle.png', size: 391, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'cross-out.svg', size: 774, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'footer-bg.svg', size: 2643, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'header-bg.svg', size: 2649, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'line.png', size: 522, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'progress-logo.svg', size: 3665, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'user.jpg', size: 136966, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
            ]},
            {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'index.html', size: 422, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
            {type: 'directory', id: nextId(), name: 'styles', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: '_bootstrap.scss', size: 557, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: '_kendo.scss', size: 1687, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: '_main.scss', size: 147, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: '_responsive.scss', size: 859, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: '_typography.scss', size: 238, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: '_variables.scss', size: 2212, time: new Date('2019-12-18T15:06:11')}
            ]}
          ]},
          {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 210, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'tsconfig.json', size: 543, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'tslint.json', size: 1988, time: new Date('2019-12-18T15:06:11')}
        ]},
        {type: 'directory', id: nextId(), name: 'material-dashboard', time: new Date('2019-12-18T15:06:11'), contents: [
          {type: 'file', id: nextId(), name: 'angular.json', size: 3757, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'bin', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: 'build-all.js', size: 597, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'serve-project.js', size: 345, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'file', id: nextId(), name: 'package-lock.json', size: 448330, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'package.json', size: 3063, time: new Date('2019-12-18T15:06:11')},
          {type: 'directory', id: nextId(), name: 'project', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'directory', id: nextId(), name: 'integration-pwa-material', time: new Date('2019-12-18T15:06:11'), contents: [
              {type: 'file', id: nextId(), name: 'README.md', size: 3234, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'browserslist', size: 388, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'karma.conf.js', size: 1031, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'ngsw-config.json', size: 551, time: new Date('2019-12-18T15:06:11')},
              {type: 'directory', id: nextId(), name: 'src', time: new Date('2019-12-18T15:06:11'), contents: [
                {type: 'directory', id: nextId(), name: 'app', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'app-routing.module.ts', size: 310, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.component.html', size: 32, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.component.spec.ts', size: 986, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.component.ts', size: 163, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.module.ts', size: 3227, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'app.routes.ts', size: 717, time: new Date('2019-12-18T15:06:11')},
                  {type: 'directory', id: nextId(), name: 'charts', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'active-issues.component.ts', size: 11951, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'issue-types.component.ts', size: 2161, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'statistics.component.ts', size: 1300, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'types-distribution.component.ts', size: 5299, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'common', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'index.ts', size: 31, time: new Date('2019-12-18T15:06:11')},
                    {type: 'directory', id: nextId(), name: 'utils', time: new Date('2019-12-18T15:06:11'), contents: [
                      {type: 'file', id: nextId(), name: 'Config.ts', size: 593, time: new Date('2019-12-18T15:06:11')},
                      {type: 'file', id: nextId(), name: 'index.ts', size: 59, time: new Date('2019-12-18T15:06:11')},
                      {type: 'file', id: nextId(), name: 'router-module.ts', size: 48, time: new Date('2019-12-18T15:06:11')}
                    ]}
                  ]},
                  {type: 'directory', id: nextId(), name: 'dashboard', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'dashboard.component.ts', size: 3077, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'dashboard.template.html', size: 1555, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'index.ts', size: 39, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'issues', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'index.ts', size: 36, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'issues.component.ts', size: 2266, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'issues.template.html', size: 5078, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'label.directive.ts', size: 1136, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'main-menu', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'main-menu.component.html', size: 2038, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'main-menu.component.spec.ts', size: 643, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'main-menu.component.ts', size: 1739, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'markdown', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'markdown.component.ts', size: 492, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'profile', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'index.ts', size: 37, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'profile.component.ts', size: 1343, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'profile.template.html', size: 6959, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'scss', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: '_dashboard.scss', size: 1330, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: '_globals.scss', size: 1741, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: '_header.scss', size: 212, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: '_issues.scss', size: 881, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: '_login.scss', size: 579, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: '_nav.scss', size: 2203, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: '_profile.scss', size: 143, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: '_typography.scss', size: 373, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: '_variables.scss', size: 2631, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'bootstrap-custom.scss', size: 95, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'shared', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'github.service.ts', size: 1472, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'index.ts', size: 33, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'issues-processor.service.ts', size: 5617, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'issues.model.ts', size: 1313, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'shared.module.ts', size: 300, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'spinner.component.ts', size: 403, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'signin', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'index.ts', size: 37, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'signin.component.ts', size: 660, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'signin.template.html', size: 1017, time: new Date('2019-12-18T15:06:11')}
                  ]}
                ]},
                {type: 'directory', id: nextId(), name: 'assets', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'directory', id: nextId(), name: 'app_icon', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'angularX144.png', size: 5078, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'angularX192.png', size: 7010, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'angularX36.png', size: 1600, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'angularX48.png', size: 2070, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'angularX512.png', size: 19822, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'angularX72.png', size: 2715, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'angularX96.png', size: 3571, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'help_images', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'add_to_home.png', size: 51829, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'cached_local.png', size: 55215, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'cached_remote.png', size: 56083, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'confirm.png', size: 25508, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'dashboard.png', size: 101068, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'offline.png', size: 36927, time: new Date('2019-12-18T15:06:11')},
                    {type: 'file', id: nextId(), name: 'sw.png', size: 36331, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'directory', id: nextId(), name: 'i18n', time: new Date('2019-12-18T15:06:11'), contents: [
                    {type: 'file', id: nextId(), name: 'en.json', size: 417, time: new Date('2019-12-18T15:06:11')}
                  ]},
                  {type: 'file', id: nextId(), name: 'issue-closed.png', size: 1222, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issue-open.png', size: 1159, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issueclosed.png', size: 1222, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'issueopen.png', size: 1159, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'login-left-bg.png', size: 35043, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'login-right-bg.png', size: 40236, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'noConnection.png', size: 11232, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'directory', id: nextId(), name: 'environments', time: new Date('2019-12-18T15:06:11'), contents: [
                  {type: 'file', id: nextId(), name: 'environment.prod.ts', size: 51, time: new Date('2019-12-18T15:06:11')},
                  {type: 'file', id: nextId(), name: 'environment.ts', size: 662, time: new Date('2019-12-18T15:06:11')}
                ]},
                {type: 'file', id: nextId(), name: 'favicon.ico', size: 5430, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'index.html', size: 703, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'main.ts', size: 372, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'manifest.json', size: 1422, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'polyfills.ts', size: 2838, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'styles.scss', size: 389, time: new Date('2019-12-18T15:06:11')},
                {type: 'file', id: nextId(), name: 'test.ts', size: 642, time: new Date('2019-12-18T15:06:11')}
              ]},
              {type: 'file', id: nextId(), name: 'tsconfig.app.json', size: 172, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tsconfig.spec.json', size: 270, time: new Date('2019-12-18T15:06:11')},
              {type: 'file', id: nextId(), name: 'tslint.json', size: 247, time: new Date('2019-12-18T15:06:11')}
            ]}
          ]},
          {type: 'directory', id: nextId(), name: 'static', time: new Date('2019-12-18T15:06:11'), contents: [
            {type: 'file', id: nextId(), name: '404.html', size: 292, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'index.html', size: 724, time: new Date('2019-12-18T15:06:11')},
            {type: 'file', id: nextId(), name: 'styles.css', size: 57, time: new Date('2019-12-18T15:06:11')}
          ]},
          {type: 'file', id: nextId(), name: 'tsconfig.json', size: 467, time: new Date('2019-12-18T15:06:11')},
          {type: 'file', id: nextId(), name: 'tslint.json', size: 1954, time: new Date('2019-12-18T15:06:11')}
        ]}
      ]}
    ];
}
