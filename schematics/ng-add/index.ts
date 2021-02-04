/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { Schema } from './schema';

import {
  addModuleImportToRootModule,
  addPackageToPackageJson,
  getProjectFromWorkspace,
  installPackageJsonDependencies,
} from '../utils';

const libName = '@iresa/ngx-questionaire-form';
const libVersion = '1.0.0';
const moduleName = 'NgxQuestionaireFormModule';
const modulePath = libName;

/* tslint:disable-next-line: no-default-export */
export default function (options: Schema): Rule {
  return chain([addPackageJsonDependencies(), installPackageJsonDependencies(), addModuleToImports(options.project)]);
}

function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: { name: string; version: string }[] = [{ name: libName, version: libVersion }];

    dependencies.forEach((dependency) => {
      addPackageToPackageJson(host, dependency.name, `${dependency.version}`);
      context.logger.log('info', `✅️ Added "${dependency.name}`);
    });

    return host;
  };
}

function addModuleToImports(projectName: string | undefined): Rule {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, projectName);

    addModuleImportToRootModule(host, 'BrowserAnimationsModule', '@angular/platform-browser/animations', project);
    addModuleImportToRootModule(host, `${moduleName}`, modulePath, project);

    return host;
  };
}
