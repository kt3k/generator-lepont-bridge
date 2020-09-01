const Generator = require('yeoman-generator')
const chalk = require('chalk')
const { join } = require('path')

module.exports = class extends Generator {
  async prompting() {
    this.log(chalk.bold('Creating the scaffold of lepont bridge'))

    const props = await this.prompt([
      {
        type: 'input',
        name: 'packageName',
        message: 'Enter the package name',
        default: 'my-lepont-bridge',
      },
      {
        type: 'input',
        name: 'exportName',
        message: 'Enter the export name',
        default: 'MyLepontBridge',
      },
    ])

    this.props = props

    // @lepont/something -> lepont-something
    const dirName = this.props.packageName.replace(/@/g, '').replace(/\//g, '-')
    const root = this.destinationRoot(dirName)

    this.log(
      chalk.bold(
        `Creating the scaffold of lepont bridge into ${chalk.magenta(dirName)}.`
      )
    )
  }

  writing() {
    ;[
      'README.md',
      'package.json',
      'tsconfig.json',
      '.gitignore',
      'bridge/index.d.ts',
      'bridge/index.js',
      'src/index.ts',
      'src/bridge.ts',
      'src/shared.ts',
    ].forEach((filename) => {
      this.fs.copyTpl(
        this.templatePath(filename),
        join(root, filename),
        this.props
      )
    })
  }
}
