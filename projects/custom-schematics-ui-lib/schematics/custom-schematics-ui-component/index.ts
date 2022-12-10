import { apply, applyTemplates, chain, externalSchematic, MergeStrategy, mergeWith, move, Rule, url } from "@angular-devkit/schematics";
import { strings, normalize } from "@angular-devkit/core";
import { CustomSchematicsUiComponentSchema } from './custom-schematics-ui-component';

export function customUiComponentGenerator(options: CustomSchematicsUiComponentSchema): Rule {
  return () => {
    const templateSource = apply(
      url('./files'), [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: options.name
        }),
        move(normalize(`/${options.path}/${strings.dasherize(options.name)}`))
      ]
    )
    return chain([
      externalSchematic('@schematics/angular', 'component', options),
      mergeWith(templateSource, MergeStrategy.Overwrite)
    ])
  }
}