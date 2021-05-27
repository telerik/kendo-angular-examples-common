import { 
    Rule, 
    SchematicContext, 
    Tree,
    externalSchematic
 } from '@angular-devkit/schematics';

export default function (options: any): Rule {
    const finalOptions = {
        ...options,
        
        // Default module to import, e.g 'GridModule'
        mainNgModule: '',
        
        // Package name, e.g 'grid'
        package: '',
        
        // Additional dependencies to install.
        // See https://github.com/telerik/kendo-schematics/issues/28
        peerDependencies: {
            // "@progress/kendo-angular-foo": "^1.0.0"
        }
    };

    return externalSchematic('@progress/kendo-schematics', 'ng-add', finalOptions);
}
